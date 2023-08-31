import SubmitButton from "@/components/SubmitButton";
import TodoItem from "@/components/TodoItem";
import dbConnect from "@/libs/dbConnect";
import Todo from "@/models/Todo";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import { revalidatePath } from "next/cache";

const sleep = (sec: number) =>
  new Promise((resolve) => setTimeout(resolve, sec * 1000));

export default async function Todos() {
  const user: User | null = await currentUser();
  if (!user) return;

  await dbConnect();
  const todos = await Todo.find({ userId: user.id }).lean();
  todos.forEach((todo) => {
    todo._id = todo._id.toString();
  });

  async function createTdodo(formData: FormData, a: any) {
    "use server";

    const title = formData.get("title");
    console.log(`title: ${title}`);
    await sleep(1);
    try {
      await Todo.create({ userId: user.id, title });
    } catch (error) {
      console.log("error");
    }
    formData.set("title", "a");
    revalidatePath("/todos");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      <h3 className="text-3xl font-bold mb-6">
        {user.firstName! + user.lastName}'s Todos
      </h3>
      <form action={createTdodo} className="mb-6 w-96">
        <input
          name="title"
          type="text"
          placeholder="Add a new todo..."
          className="p-2 w-full rounded border border-gray-300 mb-2"
        />
        <SubmitButton />
      </form>
      <ul className="w-96 bg-white p-4 rounded shadow-md">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
