# 🚀 Deployment Guide - Lost & Found CDO

## Follow these steps IN ORDER. Each step takes about 2-5 minutes.

---

## STEP 1: Create Free Database (Neon)

1. Go to **https://neon.tech**
2. Click **"Sign Up"** → Sign up with Google or GitHub
3. Click **"Create a project"**
4. Name it: `lost-and-found-cdo`
5. Click **"Create"**
6. **Copy the connection string** (click the copy button)
   - It looks like: `postgresql://neondb_owner:xxxx@ep-xxx.us-east-2.aws.neon.tech/lost_and_found_cdo?sslmode=require`
7. **SAVE THIS** - you'll need it in Step 4

---

## STEP 2: Create Free Auth Account (Clerk)

1. Go to **https://clerk.com**
2. Click **"Get Started"** → Sign up with Google or GitHub
3. Create an app named: `Lost and Found CDO`
4. Choose **"Email"** and **"Google"** as sign-in options
5. Click **"Create Application"**
6. Go to **API Keys** in the left sidebar
7. **Copy these two values:**
   - `Publishable Key` (starts with `pk_test_`)
   - `Secret Key` (starts with `sk_test_`)
8. Go to **Webhooks** in the left sidebar
9. Click **"Add Endpoint"**
10. Set URL to: `https://your-app-name.vercel.app/api/webhooks/clerk` (use your future Vercel URL, or leave blank for now)
11. Select events: `user.created`, `user.updated`, `user.deleted`
12. Click **"Create"**
13. **Copy the Signing Secret** (starts with `whsec_`)
14. **SAVE ALL THREE VALUES**

---

## STEP 3: Create Free GitHub Account & Upload Code

1. Go to **https://github.com**
2. Sign up or log in
3. Click the **"+"** icon (top right) → **"New repository"**
4. Name: `lost-and-found-cdo`
5. Make it **Public**
6. Click **"Create repository"**
7. Open **PowerShell** and run these commands one by one:

```powershell
cd "C:\Users\Wenrick Jay\lost-and-found-cdo"
```

```powershell
git add .
```

```powershell
git commit -m "Initial deployment"
```

```powershell
git remote add origin https://github.com/YOURUSERNAME/lost-and-found-cdo.git
```
*(Replace YOURUSERNAME with your GitHub username)*

```powershell
git branch -M main
```

```powershell
git push -u origin main
```

---

## STEP 4: Deploy to Vercel (FREE)

1. Go to **https://vercel.com**
2. Click **"Sign Up"** → Sign up with **GitHub** (same account from Step 3)
3. Click **"Add New..."** → **"Project"**
4. Find your `lost-and-found-cdo` repo and click **"Import"**
5. Click **"Environment Variables"** and add these:

| Name | Value |
|------|-------|
| `DATABASE_URL` | Your Neon connection string from Step 1 |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Your Clerk Publishable Key from Step 2 |
| `CLERK_SECRET_KEY` | Your Clerk Secret Key from Step 2 |
| `CLERK_WEBHOOK_SECRET` | Your Clerk Webhook Secret from Step 2 |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | `/sign-in` |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | `/sign-up` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | `/dashboard` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | `/dashboard` |
| `NEXT_PUBLIC_APP_URL` | `https://lost-and-found-cdo.vercel.app` |

6. Click **"Deploy"**
7. Wait 2-3 minutes for deployment to finish
8. Your app is now live at: `https://lost-and-found-cdo.vercel.app`

---

## STEP 5: Setup Database Tables

1. Go to your Vercel dashboard → your project
2. Go to **"Settings"** tab → **"Environment Variables"**
3. Make sure `DATABASE_URL` is set
4. Go to **"Integrations"** tab → Open Vercel Terminal (or use your local terminal)
5. Run:

```powershell
cd "C:\Users\Wenrick Jay\lost-and-found-cdo"
npx prisma db push
```

6. This creates all the tables in your database

---

## STEP 6: Update Clerk Webhook URL

1. Go back to **Clerk dashboard** → **Webhooks**
2. Edit your webhook
3. Update the URL to: `https://lost-and-found-cdo.vercel.app/api/webhooks/clerk`
4. Save

---

## DONE! 🎉

Your app is now live and accessible from:
- Any browser (desktop or mobile)
- Facebook (share the link)
- Messenger (share the link)

---

## Share on Facebook

1. Open Facebook
2. Create a new post
3. Paste your link: `https://lost-and-found-cdo.vercel.app`
4. Facebook will show a preview
5. Post it!

---

## Troubleshooting

**If the app shows errors:**
- Make sure all environment variables are correct in Vercel
- Check that `prisma db push` ran successfully
- Check Vercel function logs for errors

**If sign-in doesn't work:**
- Make sure Clerk redirect URLs are set correctly
- Check that the webhook is configured

**Need help?** Check the error logs in Vercel dashboard → your project → "Logs" tab.
