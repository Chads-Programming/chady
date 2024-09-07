"use client";

import React from "react";

interface Props<Data> {
  title: string;
  data: Data[];
  renderItem: (leaderboardPosition: number, data: Data) => React.ReactNode;
}

export const Leaderboard = <Data,>({
  title,
  data,
  renderItem,
}: Props<Data>) => {
  return (
    <article className="px-2 py-4">
      <h2 className="font-bold text-lg text-pretty mb-2">{title}</h2>
      <ul className="list-none box-border flex flex-col">
        {data.map((data, index) => (
          <li
            key={index}
            className="inline-flex text-sm items-center justify-start transition ease-in cursor-pointer rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 p-2 px-3"
          >
            {renderItem(index + 1, data)}
          </li>
        ))}
      </ul>
    </article>
  );
};
