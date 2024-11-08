const MAX_EXECUTION_TIME_MS = 10 * 1000;
const MAX_DIFFICULT_FACTOR = 3;

export const calculateChallengeScore = (
  difficultFactor: number,
  executionTime: number,
) => {
  const timeExecutionFactor = Math.max(
    0,
    1 - executionTime / MAX_EXECUTION_TIME_MS,
  );

  const difficultRelation = difficultFactor / MAX_DIFFICULT_FACTOR;

  const score = difficultRelation * timeExecutionFactor * 100;

  return score > 0 ? score : 0;
};
