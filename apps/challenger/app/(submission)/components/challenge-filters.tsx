import { Badge, ToggleGroup, ToggleGroupItem } from "@repo/ui";
import React from "react";

export const ChallengeFilters = () => {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem
        className="border border-border"
        value="easy"
        aria-label="Toggle easy"
      >
        Easy
      </ToggleGroupItem>
      <ToggleGroupItem
        className="border border-border"
        value="medium"
        aria-label="Toggle medium"
      >
        Medium
      </ToggleGroupItem>
      <ToggleGroupItem
        className="border border-border"
        value="hard"
        aria-label="Toggle hard"
      >
        Hard
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
