
import React from "react";
import { Review } from "@/types";
import { Star, ThumbsUp, MessageSquare, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SentimentVisualization from "./SentimentVisualization";
import { formatDistanceToNow } from "date-fns";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const formattedDate = formatDistanceToNow(new Date(review.date), { addSuffix: true });
  
  return (
    <Card className="w-full hover-scale">
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div className="flex items-start gap-3">
          <img
            src={review.userAvatar || "https://i.pravatar.cc/150"}
            alt={review.userName}
            className="rounded-full w-10 h-10 object-cover"
          />
          <div>
            <h3 className="font-medium">{review.userName}</h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <div className="flex items-center mr-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < review.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <h4 className="font-semibold mb-2">{review.title}</h4>
        <p className="text-sm text-muted-foreground mb-3">{review.comment}</p>
        
        {review.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {review.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs bg-secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <SentimentVisualization sentiment={review.sentiment} size="sm" />
      </CardContent>
      <CardFooter className="border-t pt-3 flex justify-between">
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <ThumbsUp className="h-4 w-4 mr-1" /> {review.likes}
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <MessageSquare className="h-4 w-4 mr-1" /> Reply
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Share2 className="h-4 w-4 mr-1" /> Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
