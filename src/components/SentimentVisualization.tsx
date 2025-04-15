
import React from "react";
import { Sentiment, EmotionType } from "@/types";
import { cn } from "@/lib/utils";

interface SentimentVisualizationProps {
  sentiment: Sentiment;
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
}

const SentimentVisualization: React.FC<SentimentVisualizationProps> = ({
  sentiment,
  size = "md",
  showLabels = true,
}) => {
  const emotionColors: Record<EmotionType, string> = {
    happy: "bg-green-500",
    sad: "bg-blue-500",
    angry: "bg-red-500",
    surprised: "bg-yellow-500",
    neutral: "bg-gray-400",
  };

  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  const overallSentimentColor = sentiment.overall > 0.5
    ? "text-green-500"
    : sentiment.overall > 0
      ? "text-blue-500"
      : sentiment.overall < -0.5
        ? "text-red-500"
        : "text-gray-500";

  const emotions = Object.entries(sentiment.emotions) as [EmotionType, number][];

  return (
    <div className="w-full">
      {showLabels && (
        <div className="flex justify-between items-center mb-1 text-xs text-muted-foreground">
          <span>Sentiment Analysis</span>
          <span className={cn("font-medium", overallSentimentColor)}>
            {sentiment.overall > 0 ? "+" : ""}{(sentiment.overall * 100).toFixed(0)}%
          </span>
        </div>
      )}
      <div className="flex w-full rounded-full overflow-hidden">
        {emotions.map(([emotion, value]) => (
          value > 0 && (
            <div
              key={emotion}
              className={cn(emotionColors[emotion], sizeClasses[size])}
              style={{ width: `${value * 100}%` }}
              title={`${emotion}: ${(value * 100).toFixed(0)}%`}
            />
          )
        ))}
      </div>
      {showLabels && (
        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1 text-xs">
          {emotions.map(([emotion, value]) => (
            value > 0.1 && (
              <div key={emotion} className="flex items-center">
                <div className={cn("w-2 h-2 mr-1 rounded-full", emotionColors[emotion])} />
                <span className="capitalize">{emotion}</span>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default SentimentVisualization;
