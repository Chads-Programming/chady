import { Difficult } from '@prisma/client';

export const difficultMapToFactor = (difficult: Difficult) => {
  const difficultMap = {
    [Difficult.Easy]: 1,
    [Difficult.Medium]: 2,
    [Difficult.Hard]: 3,
  };

  return difficultMap[difficult] ?? 1;
};
