"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui";
import { Leaderboard } from "./challenge/components/leaderboard";
import { SectionCard } from "./shared/components/section-card";
import { ChallengeCard } from "./challenge/components/challenge-card";

const testAvatar =
  "https://cdn.discordapp.com/avatars/526081797952634901/3838b7f65f82c7c0a99521230b1fcf8e.webp?size=128";

const leaderboard = [
  {
    id: "1",
    name: "Peperman",
    avatar: testAvatar,
    points: 10200,
  },
  {
    id: "2",
    name: "Gatobros",
    avatar: testAvatar,
    points: 5001,
  },
  {
    id: "3",
    name: "Ubermax",
    avatar: testAvatar,
    points: 4921,
  },
  {
    id: "4",
    name: "Randomguy",
    avatar: testAvatar,
    points: 4211,
  },
  {
    id: "5",
    name: "Groundmind",
    avatar: testAvatar,
    points: 4121,
  },
];

const challenges = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    completed: true,
  },
  {
    id: 2,
    title: "Reverse Linked List",
    difficulty: "Medium",
    description:
      "Given the head of a singly linked list, reverse the list, and return the reversed list. A linked list can be reversed either iteratively or recursively. Could you implement both?",
    completed: false,
  },
  {
    id: 3,
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    description:
      "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it. The number of nodes in all the linked-lists is in the range [0, 10^4]. The value of each node in the linked-list is in the range [-10^4, 10^4].",
    completed: false,
  },
  {
    id: 4,
    title: "Valid Parentheses",
    difficulty: "Easy",
    description:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.",
    completed: true,
  },
  {
    id: 5,
    title: "LRU Cache",
    difficulty: "Medium",
    description:
      "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class: LRUCache(int capacity) Initialize the LRU cache with positive size capacity. int get(int key) Return the value associated with key if the key exists, otherwise return -1. void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.",
    completed: false,
  },
];

export default function Home() {
  return (
    <main className="w-full flex flex-row flex-wrap justify-start py-4 px-8 gap-8">
      <SectionCard className="h-fit">
        <Leaderboard
          title="Top Performers"
          data={leaderboard}
          renderItem={(position, { name, avatar, points }) => (
            <div className="flex flex-row justify-start gap-2 w-full items-center content-start">
              <span className="text-lg mr-2 text-primary font-medium">
                {position}.
              </span>
              <Avatar>
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-pretty text-sm text-gray-700 dark:text-gray-400 flex-1 w-[100px]">
                {name}
              </span>
              <span className="text-pretty text-sm text-gray-700 dark:text-gray-400 font-medium">
                {points} pts.
              </span>
            </div>
          )}
        />
      </SectionCard>

      <section className="flex flex-col items-start gap-2 w-2/3">
        <h2 className="text-2xl text-primary text-pretty font-medium">
          Coding Challenges
        </h2>

        <div className="flex flex-col gap-2 w-full">
          {challenges.map(({ id, title, description, difficulty }) => (
            <ChallengeCard
              key={id}
              title={title}
              description={description}
              difficulty={difficulty}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
