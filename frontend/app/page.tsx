"use client";

import { Provider } from "react-redux";
import { store } from "@/store";
import Login from "./login/page";

export default function Home() {
  return (
    <Provider store={store}>
      <Provider store={store}>
        <Login />
      </Provider>
    </Provider>
  );
}
