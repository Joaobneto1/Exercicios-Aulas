import { AddTodo } from "@/components/AddTodo";
import { ListTodo } from "@/components/ListTodo";
import { LoadingTodo } from "@/components/LoadingTodo";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <AddTodo />
      <Suspense fallback={<LoadingTodo />}>
        <ListTodo />
      </Suspense>
    </>
  );
}
