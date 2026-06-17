import Header from "@/components/Header";
import Link from "next/link";

function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <Header title="Home" description="Your home place to start." />
      <div className="flex flex-col items-center">
        <Link href="/tickets" className="text-blue-500 hover:underline">
          Check out all tickets
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
