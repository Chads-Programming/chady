import React from "react";
import Markdown from "react-markdown";

interface Props {
  title: string;
  description: string;
}

export const ChallengeDescription = ({ title, description }: Props) => {
  return (
      <section className="flex flex-col gap-2 h-full overflow-y-auto px-2">
          <h2 className="font-semibold text-xl text-primary">
              {title.toUpperCase()}
          </h2>
          <Markdown className="text-gray-300 text-sm challenge-description">
              {description}
          </Markdown>
      </section>
  );
};
