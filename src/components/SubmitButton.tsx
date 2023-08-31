"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <input
      type="submit"
      disabled={pending}
      value={pending ? "Submitting..." : "Add Todo"}
      className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
    />
  );
}
