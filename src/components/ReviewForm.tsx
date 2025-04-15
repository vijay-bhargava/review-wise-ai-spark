
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FileUpIcon, MessageSquare, Star, Mic, X } from "lucide-react";

const ReviewForm: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [isRecording, setIsRecording] = useState(false);
  const [attachments, setAttachments] = useState<string[]>([]);

  const handleStartRecording = () => {
    setIsRecording(true);
    // In a real app, we would start recording here
    setTimeout(() => {
      setIsRecording(false);
    }, 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // In a real app, we would upload the file to storage
      // For now, we'll just add a placeholder
      setAttachments([...attachments, URL.createObjectURL(e.target.files[0])]);
    }
  };

  const removeAttachment = (index: number) => {
    const newAttachments = [...attachments];
    newAttachments.splice(index, 1);
    setAttachments(newAttachments);
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center">
          <MessageSquare className="h-5 w-5 mr-2 text-brand-purple" />
          <CardTitle className="text-lg">Write a Review</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="product-select">Select Product</Label>
            <select
              id="product-select"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">Select a product to review</option>
              <option value="p1">NovaSound Pro Earbuds</option>
              <option value="p2">SwiftBook Air Laptop</option>
              <option value="p3">PixelMax 4K Camera</option>
              <option value="p4">EcoChef Smart Blender</option>
              <option value="p5">FitTrack Prime Watch</option>
            </select>
          </div>

          <div>
            <Label>Rating</Label>
            <div className="flex items-center mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 cursor-pointer ${
                    i < rating
                      ? "fill-yellow-500 text-yellow-500"
                      : "text-gray-300 hover:text-yellow-500"
                  }`}
                  onClick={() => setRating(i + 1)}
                />
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="review-title">Review Title</Label>
            <Input
              id="review-title"
              placeholder="Summarize your experience in a headline"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <Label htmlFor="review-content">Your Review</Label>
              <Button
                type="button"
                variant={isRecording ? "destructive" : "outline"}
                size="sm"
                className="h-8"
                onClick={handleStartRecording}
              >
                <Mic className={`h-4 w-4 mr-1 ${isRecording ? "animate-pulse" : ""}`} />
                {isRecording ? "Recording..." : "Voice to Review"}
              </Button>
            </div>
            <Textarea
              id="review-content"
              placeholder="What did you like or dislike? How was the performance? What use cases was this product good or bad for?"
              className="min-h-32"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <Label>Attachments</Label>
              <Label
                htmlFor="file-upload"
                className="cursor-pointer text-sm text-primary hover:underline"
              >
                <FileUpIcon className="h-4 w-4 inline mr-1" />
                Add Photo/Video
              </Label>
              <Input
                id="file-upload"
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {attachments.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {attachments.map((url, index) => (
                  <div key={index} className="relative w-20 h-20 group">
                    <img
                      src={url}
                      alt={`Attachment ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <button
                      type="button"
                      className="absolute top-1 right-1 bg-black/70 rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeAttachment(index)}
                    >
                      <X className="h-3 w-3 text-white" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-purple to-primary hover:from-brand-purple-dark hover:to-primary hover:opacity-90"
            >
              Submit Review
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReviewForm;
