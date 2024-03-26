import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <p>Sorry, not exist</p>
      <Link href="/">BackHome</Link>
    </div>
  );
}
