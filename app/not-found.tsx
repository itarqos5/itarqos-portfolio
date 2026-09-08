import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="micro-type">404</p>
      <h1 className="display-type">Unexplored territory.</h1>
      <p>There isn’t a page at these coordinates.</p>
      <Link href="/" className="button-primary">
        <ArrowLeft size={17} /> Back to spawn
      </Link>
    </main>
  );
}
