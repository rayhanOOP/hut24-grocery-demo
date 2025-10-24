import Link from "next/link";

export default function Cancel() {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-3xl font-bold">Payment Cancelled</h1>
      <p className="mt-4 text-gray-600">Your checkout was cancelled. You can continue shopping.</p>
      <Link href="/" className="inline-block mt-6 px-6 py-3 rounded-full border">Back to home</Link>
    </div>
  );
}
