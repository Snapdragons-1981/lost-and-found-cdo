"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Camera, 
  MapPin, 
  X,
  CheckCircle,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CATEGORIES, COLORS, BARANGAYS_CDO, KEPT_BY_OPTIONS } from "@/constants";

const steps = [
  { id: 1, name: "Category" },
  { id: 2, name: "Photos" },
  { id: 3, name: "Details" },
  { id: 4, name: "Location" },
  { id: 5, name: "Contact" },
];

export default function NewFoundReportPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    color: "",
    brand: "",
    uniqueMarks: "",
    serialNumber: "",
    condition: "",
    keptBy: "",
    barangay: "",
    streetAddress: "",
    landmark: "",
    locationName: "",
    dateFound: "",
    timeDescription: "",
    contactPhone: "",
    contactMessenger: "",
    contactEmail: "",
  });

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (images.length + files.length > 5) {
      alert("Maximum 5 images allowed");
      return;
    }

    const newImages = [...images, ...files].slice(0, 5);
    setImages(newImages);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", { ...formData, category: selectedCategory, images });
      router.push("/dashboard");
    } catch (error) {
      console.error("Error submitting report:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                Report Found Item
              </h1>
              <p className="text-gray-600">
                Help reunite this item with its owner
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-colors ${
                      currentStep > step.id
                        ? "bg-green-500 text-white"
                        : currentStep === step.id
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <span className="hidden sm:block ml-2 text-sm font-medium text-gray-900">
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded ${
                      currentStep > step.id ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Step 1: Category */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>What did you find?</CardTitle>
              <CardDescription>
                Select the category that best describes the found item
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(category.id);
                      updateFormData("category", category.id);
                    }}
                    className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all ${
                      selectedCategory === category.id
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold mb-2"
                      style={{ backgroundColor: category.color }}
                    >
                      {category.name.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>
              {!selectedCategory && (
                <p className="mt-2 text-sm text-red-500">
                  Please select a category
                </p>
              )}
            </CardContent>
          </Card>
        )}

        {/* Step 2: Photos */}
        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Add Photos</CardTitle>
              <CardDescription>
                Upload photos to help identify the found item
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {imagePreviews.map((preview, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-xl overflow-hidden border-2 border-gray-200"
                  >
                    <img
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                {images.length < 5 && (
                  <label className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-green-500 hover:bg-green-50 transition-colors">
                    <Camera className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600">Add Photo</span>
                    <span className="text-xs text-gray-400 mt-1">
                      {images.length}/5
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Tip: Take clear photos from multiple angles. Include any unique marks or features.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Details */}
        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Describe the Item</CardTitle>
              <CardDescription>
                Provide details to help identify the owner
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Item Name *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Black Leather Wallet"
                  value={formData.title}
                  onChange={(e) => updateFormData("title", e.target.value)}
                />
                {!formData.title && (
                  <p className="text-sm text-red-500">Title is required</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the item in detail. Include any distinguishing features, where you found it, etc."
                  value={formData.description}
                  onChange={(e) => updateFormData("description", e.target.value)}
                />
                {!formData.description && (
                  <p className="text-sm text-red-500">Description is required</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="color">Color</Label>
                  <select
                    id="color"
                    className="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-base"
                    value={formData.color}
                    onChange={(e) => updateFormData("color", e.target.value)}
                  >
                    <option value="">Select color</option>
                    {COLORS.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brand">Brand</Label>
                  <Input
                    id="brand"
                    placeholder="e.g., Nike, Apple"
                    value={formData.brand}
                    onChange={(e) => updateFormData("brand", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="uniqueMarks">Unique Marks or Features</Label>
                <Input
                  id="uniqueMarks"
                  placeholder="e.g., scratch on front, sticker on back"
                  value={formData.uniqueMarks}
                  onChange={(e) => updateFormData("uniqueMarks", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="serialNumber">Serial Number (if applicable)</Label>
                <Input
                  id="serialNumber"
                  placeholder="e.g., IMEI number, barcode"
                  value={formData.serialNumber}
                  onChange={(e) => updateFormData("serialNumber", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="condition">Condition</Label>
                <select
                  id="condition"
                  className="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-base"
                  value={formData.condition}
                  onChange={(e) => updateFormData("condition", e.target.value)}
                >
                  <option value="">Select condition</option>
                  <option value="new">Like New</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                  <option value="damaged">Damaged</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="keptBy">Currently Kept By</Label>
                <select
                  id="keptBy"
                  className="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-base"
                  value={formData.keptBy}
                  onChange={(e) => updateFormData("keptBy", e.target.value)}
                >
                  <option value="">Select location</option>
                  {KEPT_BY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Location */}
        {currentStep === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>Where did you find it?</CardTitle>
              <CardDescription>
                Provide the location to help the owner find the item
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="barangay">Barangay</Label>
                <select
                  id="barangay"
                  className="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-base"
                  value={formData.barangay}
                  onChange={(e) => updateFormData("barangay", e.target.value)}
                >
                  <option value="">Select barangay</option>
                  {BARANGAYS_CDO.map((barangay) => (
                    <option key={barangay} value={barangay}>
                      {barangay}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="streetAddress">Street Address</Label>
                <Input
                  id="streetAddress"
                  placeholder="e.g., 123 Main Street"
                  value={formData.streetAddress}
                  onChange={(e) => updateFormData("streetAddress", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="landmark">Nearby Landmark</Label>
                <Input
                  id="landmark"
                  placeholder="e.g., near McDonald's, beside 7-Eleven"
                  value={formData.landmark}
                  onChange={(e) => updateFormData("landmark", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="locationName">Location Name</Label>
                <Input
                  id="locationName"
                  placeholder="e.g., Centrio Mall, University of Mindanao"
                  value={formData.locationName}
                  onChange={(e) => updateFormData("locationName", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dateFound">Date Found *</Label>
                  <Input
                    id="dateFound"
                    type="date"
                    value={formData.dateFound}
                    onChange={(e) => updateFormData("dateFound", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeDescription">Time (approximate)</Label>
                  <Input
                    id="timeDescription"
                    placeholder="e.g., around 3 PM"
                    value={formData.timeDescription}
                    onChange={(e) => updateFormData("timeDescription", e.target.value)}
                  />
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">
                    Map integration coming soon
                  </p>
                  <Button variant="link" size="sm" className="mt-2">
                    Use current location
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 5: Contact */}
        {currentStep === 5 && (
          <Card>
            <CardHeader>
              <CardTitle>How can the owner contact you?</CardTitle>
              <CardDescription>
                Choose how you want to be contacted. Your information will only be
                shared when both parties agree.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="contactPhone">Phone Number</Label>
                <Input
                  id="contactPhone"
                  type="tel"
                  placeholder="e.g., 09171234567"
                  value={formData.contactPhone}
                  onChange={(e) => updateFormData("contactPhone", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactMessenger">Messenger Username</Label>
                <Input
                  id="contactMessenger"
                  placeholder="e.g., john.doe"
                  value={formData.contactMessenger}
                  onChange={(e) => updateFormData("contactMessenger", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactEmail">Email Address</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  placeholder="e.g., john@example.com"
                  value={formData.contactEmail}
                  onChange={(e) => updateFormData("contactEmail", e.target.value)}
                />
              </div>

              <div className="p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-800">
                  <strong>Privacy Protected:</strong> Your contact information will
                  only be shared when the owner accepts your message. You can also use
                  our in-app messaging system.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation Buttons */}
        <div className="mt-6 flex items-center justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          {currentStep < steps.length ? (
            <Button type="button" onClick={nextStep}>
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button type="button" onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Submit Report
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
