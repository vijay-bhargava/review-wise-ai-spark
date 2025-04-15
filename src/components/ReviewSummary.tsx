
import React from "react";
import { ReviewSummary as ReviewSummaryType } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, ThumbsDown, MessagesSquare, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ReviewSummaryProps {
  summary: ReviewSummaryType;
}

const ReviewSummary: React.FC<ReviewSummaryProps> = ({ summary }) => {
  // Calculate sentiment color
  const getSentimentColor = (score: number) => {
    if (score > 0.5) return "text-green-600";
    if (score > 0) return "text-blue-500";
    if (score > -0.5) return "text-orange-500";
    return "text-red-600";
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center">
          <MessagesSquare className="h-5 w-5 mr-2 text-brand-purple" />
          <CardTitle className="text-lg">Review Summary</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold mr-2">{summary.avgRating.toFixed(1)}</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(summary.avgRating)
                      ? "fill-yellow-500 text-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <Badge variant="outline">
            {summary.totalReviews} {summary.totalReviews === 1 ? "review" : "reviews"}
          </Badge>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm">Overall Sentiment</span>
            <span className={`text-sm font-medium ${getSentimentColor(summary.sentimentScore)}`}>
              {(summary.sentimentScore * 100).toFixed(0)}%
            </span>
          </div>
          <Progress
            value={(summary.sentimentScore + 1) * 50}
            className="h-2"
            indicatorClassName={`${
              summary.sentimentScore > 0.5
                ? "bg-green-500"
                : summary.sentimentScore > 0
                ? "bg-blue-500"
                : summary.sentimentScore > -0.5
                ? "bg-orange-500"
                : "bg-red-500"
            }`}
          />
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex items-center text-sm font-medium mb-1">
              <ThumbsUp className="h-4 w-4 mr-1 text-green-600" />
              <span>Top Positives</span>
            </div>
            <ul className="text-xs space-y-1 text-muted-foreground">
              {summary.topPositives.map((positive, i) => (
                <li key={`pos-${i}`} className="flex items-start">
                  <span className="mr-1">•</span>
                  <span>{positive}</span>
                </li>
              ))}
            </ul>
          </div>

          {summary.topNegatives.length > 0 && (
            <div>
              <div className="flex items-center text-sm font-medium mb-1">
                <ThumbsDown className="h-4 w-4 mr-1 text-red-600" />
                <span>Top Negatives</span>
              </div>
              <ul className="text-xs space-y-1 text-muted-foreground">
                {summary.topNegatives.map((negative, i) => (
                  <li key={`neg-${i}`} className="flex items-start">
                    <span className="mr-1">•</span>
                    <span>{negative}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <div className="text-sm font-medium mb-1">Most Mentioned</div>
          <div className="flex flex-wrap gap-1">
            {summary.mostMentioned.map((topic, i) => (
              <Badge key={`topic-${i}`} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewSummary;
