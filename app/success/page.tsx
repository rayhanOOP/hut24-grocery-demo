import Link from "next/link";

export default function Success() {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-3xl font-bold">Payment Successful</h1>
      <p className="mt-4 text-gray-600">Thank you! Your order has been received.</p>
      <Link href="/" className="inline-block mt-6 px-6 py-3 rounded-full border">Back to home</Link>
    </div>
  );
}
