"use server";

import Todo from "@/models/Todo";
import { revalidatePath } from "next/cache";

export async function completeTodo(todoId: string) {
  await Todo.findByIdAndDelete(todoId);
  revalidatePath("/todos");
}
