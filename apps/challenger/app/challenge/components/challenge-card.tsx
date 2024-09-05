import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  cn,
} from "@repo/ui";
import React, { useMemo, useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Markdown from "react-markdown";
import { ChallengeDifficult } from "../types";

interface Props {
  title: string;
  description: string;
  difficulty: ChallengeDifficult;
}

export const ChallengeCard = ({ title, description, difficulty }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="bg-secondary">
      <CardHeader>
        <CardTitle className="text-gray-500">{title}</CardTitle>
        <Badge
          variant="outline"
          className={cn("w-fit text-white", {
            ["bg-primary text-secondary"]:
              difficulty === ChallengeDifficult.Easy,
            ["bg-amber-400 text-secondary"]:
              difficulty === ChallengeDifficult.Medium,
            ["bg-destructive"]: difficulty === ChallengeDifficult.Hard,
          })}
        >
          {difficulty}
        </Badge>
      </CardHeader>
      <CardContent>
        <div
          className={cn("text-pretty text-sm challenge-description", {
            ["line-clamp-2"]: !isExpanded,
          })}
        >
          <Markdown>{description}</Markdown>
        </div>
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
        <Button
          variant="outline"
          className="group border border-transparent hover:border-primary transition ease-in"
        >
          Solve
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-all ease-in" />
        </Button>
      </CardFooter>
    </Card>
  );
};
