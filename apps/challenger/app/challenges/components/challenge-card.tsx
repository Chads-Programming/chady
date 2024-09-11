import {
  Badge,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  cn,
} from "@repo/ui";
import React, { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import Markdown from "react-markdown";
import { ChallengeDifficult } from "../types";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  title: string;
  description: string;
  difficulty: ChallengeDifficult;
}

export const ChallengeCard = ({
  id,
  title,
  description,
  difficulty,
}: Props) => {
  const router = useRouter();
  const miniDescription = useMemo(
    () => description.substring(0, 120).concat("..."),
    [description]
  );

  const goToChallenge = (id: string) => () => {
    void router.push(`/challenges/${id}`);
  };

  return (
    <Card className="backdrop-blur-md bg-background/10 shadow-lg border-border border-x-0 border-t-0 rounded-none">
      <CardHeader>
        <CardTitle className="text-gray-300 text-xl">{title}</CardTitle>
        <Badge
          variant="secondary"
          className={cn("w-fit text-white bg-neutral-700 select-none", {
            ["text-primary"]: difficulty === ChallengeDifficult.Easy,
            ["text-amber-400"]: difficulty === ChallengeDifficult.Medium,
            ["text-red-400"]: difficulty === ChallengeDifficult.Hard,
          })}
        >
          {difficulty}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="text-pretty text-sm challenge-description line-clamp-2 select-none">
          <Markdown className="border border-border p-6 rounded-md shadow-md text-neutral-600">
            {miniDescription}
          </Markdown>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="secondary"
          className="group border border-transparent hover:border-primary transition ease-in"
          onClick={goToChallenge(id)}
        >
          Solve
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-all ease-in" />
        </Button>
      </CardFooter>
    </Card>
  );
};
