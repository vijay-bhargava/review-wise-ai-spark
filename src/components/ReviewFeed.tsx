
import React from "react";
import { Review } from "@/types";
import ReviewCard from "./ReviewCard";

interface ReviewFeedProps {
  reviews: Review[];
  title?: string;
}

const ReviewFeed: React.FC<ReviewFeedProps> = ({ reviews, title = "Recent Reviews" }) => {
  return (
    <div className="w-full animate-fade-in">
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      <div className="grid grid-cols-1 gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewFeed;
