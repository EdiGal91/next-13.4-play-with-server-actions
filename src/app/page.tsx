import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Welcome to Todos App</h1>
        <p className="mb-6">
          Organize your tasks and increase your productivity with our simple and
          intuitive todos app.
        </p>
        <Link
          className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          href="/todos"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
