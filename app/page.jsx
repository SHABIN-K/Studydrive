import Link from "next/link";

export default function Home() {
  return (
    <main className="text-orange-500">
      Hello pasc
      <div className="bg-black w-1/5">
        <Link href="/dashboard"><p>dashboard</p></Link>
      </div>
    </main>
  );
}

