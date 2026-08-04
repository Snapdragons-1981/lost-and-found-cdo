import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";
import prisma from "@/lib/prisma";

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

async function validateRequest(request: NextRequest) {
  const body = await request.text();
  const svixId = request.headers.get("svix-id");
  const svixTimestamp = request.headers.get("svix-timestamp");
  const svixSignature = request.headers.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return null;
  }

  const wh = new Webhook(webhookSecret || "");
  
  try {
    const evt = wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    });
    return evt as { type: string; data: Record<string, unknown> };
  } catch (error) {
    console.error("Webhook verification failed:", error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const event = await validateRequest(request);
    
    if (!event) {
      return NextResponse.json(
        { error: "Invalid webhook" },
        { status: 400 }
      );
    }

    const eventType = event.type;
    const data = event.data;

    switch (eventType) {
      case "user.created": {
        const emailAddresses = data.email_addresses as Array<{ email_address: string }> | undefined;
        const email = emailAddresses?.[0]?.email_address || "";
        const firstName = (data.first_name as string) || "";
        const lastName = (data.last_name as string) || "";
        const avatar = (data.image_url as string) || "";
        const clerkId = data.id as string;

        await prisma.user.create({
          data: {
            clerkId,
            email,
            firstName,
            lastName,
            avatar,
          },
        });

        console.log("User created:", clerkId);
        break;
      }

      case "user.updated": {
        const clerkId = data.id as string;
        const emailAddresses = data.email_addresses as Array<{ email_address: string }> | undefined;
        const email = emailAddresses?.[0]?.email_address || "";
        const firstName = (data.first_name as string) || "";
        const lastName = (data.last_name as string) || "";
        const avatar = (data.image_url as string) || "";

        await prisma.user.upsert({
          where: { clerkId },
          update: {
            email,
            firstName,
            lastName,
            avatar,
          },
          create: {
            clerkId,
            email,
            firstName,
            lastName,
            avatar,
          },
        });

        console.log("User updated:", clerkId);
        break;
      }

      case "user.deleted": {
        const clerkId = data.id as string;

        await prisma.user.delete({
          where: { clerkId },
        });

        console.log("User deleted:", clerkId);
        break;
      }

      default:
        console.log("Unhandled event type:", eventType);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
