"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuthToken } from "@/utils/auth";
import { Provider } from "react-redux";
import { store } from "@/store";
import Login from "@/app/login/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  const router = useRouter();
  const token = getAuthToken();

  useEffect(() => {
    if (!token) {
      router.push("/dashboard");
    }
  }, [token, router]);

  if (!token) {
    return <Login />;
  }

  return (
    <Provider store={store}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Dashboard />
        </main>
      </div>
    </Provider>
  );
}
