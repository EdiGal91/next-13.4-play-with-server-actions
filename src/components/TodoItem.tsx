"use client";

import { completeTodo } from "@/app/actions";
import { ITodo } from "@/models/Todo";

export default function TodoItem({ todo }: { todo: ITodo }) {
  return (
    <li className="flex justify-between items-center mb-2 last:mb-0">
      <span
        className={`text-lg ${todo.isDone ? "line-through text-gray-400" : ""}`}
      >
        {todo.title}
      </span>
      <form
        action={async function (formData: FormData) {
          console.log("ALOHA!!");
          await completeTodo(todo._id);
        }}
      >
        <input
          type="submit"
          name="done"
          value="Done!"
          className="cursor-pointer"
        />
      </form>
    </li>
  );
}
