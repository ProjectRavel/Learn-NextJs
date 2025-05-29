import Link from "next/link";

export default function Home() {
  return (
    // MAKE UI BETTER
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
      <p className="text-lg text-slate-400 mb-8">This is a placeholder for the home page.</p>
      <div className="flex space-x-4">
        <Link href="/about" className="px-4 py-2 bg-white text-slate-950 rounded hover:bg-slate-100 hover:scale-105">About</Link>
        <Link href="/products" className="px-4 py-2 bg-white text-slate-950 rounded hover:bg-slate-100 hover:scale-105">Products</Link>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside mt-4 text-gray-600">
          <li>Feature 1: User Authentication</li>
          <li>Feature 2: Dashboard with Charts</li>
          <li>Feature 3: Responsive Design</li>
          <li>Feature 4: Easy Navigation</li>
        </ul>
      </div>
      <footer className="mt-8 text-gray-500">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
