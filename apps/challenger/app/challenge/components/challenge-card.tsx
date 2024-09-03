import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui";
import React, { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  title: string;
  description: string;
  difficulty: string;
}

export const ChallengeCard = ({ title, description, difficulty }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="bg-secondary">
      <CardHeader>
        <CardTitle className="text-gray-500">{title}</CardTitle>
        <Badge variant="default" className="w-fit">
          {difficulty}
        </Badge>
      </CardHeader>
      <CardContent>
        <CardDescription className={isExpanded ? "" : "line-clamp-2"}>
          {description}
        </CardDescription>
        <Button
          variant="ghost"
          size="sm"
          className="mt-2 p-0 h-auto font-normal"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1" />
              Show less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1" />
              Show more
            </>
          )}
        </Button>
      </CardContent>
      <CardFooter>
        <Button variant="outline">
          Solve <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};
