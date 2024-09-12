import React from "react";

const solutions = [
  {
    owner: "gatobros",
    date: "2024-09-01",
    executionTime: 2231,
  },
  {
    owner: "groundmind",
    date: "2024-09-02",
    executionTime: 5131,
  },
  {
    owner: "peperman",
    date: "2024-09-04",
    executionTime: 1322,
  },
];

export const Solutions = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-start justify-center gap-2 w-full">
        {solutions.map(({ owner, date, executionTime }) => (
          <article className="transition ease-in px-3 cursor-pointer select-none flex flex-col gap-3 items-start w-full hover:bg-secondary">
            <header>
              <h2 className="font-bold text-pretty">{owner}'s solution</h2>
            </header>
            <footer className="inline-flex items-center gap-2 w-full justify-between">
              <div className="inline-flex items-center gap-2">
                <time className="text-xs text-muted-foreground">{date}</time>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="text-primary text-sm">{executionTime}ms</span>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};
