import { Footer } from "./shared/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="w-full z-10 flex flex-col justify-center items-center py-4 px-8 gap-8 flex-1 container">
        <h1>Chad challenger</h1>
        <p>Todo: here is the landing</p>
        <Link
          href="/challenges"
          className="transition ease-in px-2 py-3 rounded-md border border-border bg-secondary hover:border-primary"
        >
          Explore challenges
        </Link>
      </main>
      <Footer />
    </>
  );
}
