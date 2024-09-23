import { getDiffTime } from '@/helpers/get-diff-time'
import { Calendar, Timer } from 'lucide-react'

const solutions = [
  {
    owner: 'gatobros',
    date: '2024-09-12',
    executionTime: 2231,
  },
  {
    owner: 'groundmind',
    date: '2024-09-11/23:00:12z',
    executionTime: 5131,
  },
  {
    owner: 'peperman',
    date: '2024-09-04',
    executionTime: 1322,
  },
  {
    owner: 'gatobros',
    date: '2024-09-01',
    executionTime: 2231,
  },
  {
    owner: 'groundmind',
    date: '2024-09-02',
    executionTime: 5131,
  },
  {
    owner: 'peperman',
    date: '2024-09-04',
    executionTime: 1322,
  },
  {
    owner: 'gatobros',
    date: '2024-09-01',
    executionTime: 2231,
  },
  {
    owner: 'groundmind',
    date: '2024-09-02',
    executionTime: 5131,
  },
  {
    owner: 'peperman',
    date: '2024-09-12',
    executionTime: 1322,
  },
  {
    owner: 'groundmind',
    date: '2024-09-12',
    executionTime: 5131,
  },
  {
    owner: 'peperman',
    date: '2024-09-11',
    executionTime: 1322,
  },
]

export const Solutions = () => {
  return (
    <section className="w-full h-full overflow-y-auto px-2">
      <div className="flex flex-col items-start justify-center gap-2 w-full">
        {solutions.map(({ owner, date, executionTime }) => (
          <article className="transition ease-linear px-3 py-1 cursor-pointer select-none flex flex-col gap-3 items-start w-full hover:bg-zinc-700 rounded-md">
            <header>
              <h2 className="font-bold text-pretty">
                {owner.toLowerCase()}'s solution
              </h2>
            </header>
            <footer className="inline-flex items-center gap-2 w-full justify-between">
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4" />
                <time className="text-xs mt-0.5">
                  {getDiffTime(new Date(date))}
                </time>
              </div>
              <div className="inline-flex items-center gap-2 text-primary">
                <Timer className="w-4" />
                <span className="text-sm mt-0.5">{executionTime} ms</span>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}
