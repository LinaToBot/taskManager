"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setAuthToken } from "@/utils/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [view, setView] = useState<"default" | "login" | "register">("default");
  const router = useRouter();

  const inputStyles = "p-2 border rounded w-full bg-gray-900";
  const logInStyles = "bg-green-500 hover:bg-green-700 text-white p-2 rounded";
  const registerStyles =
    "font-bold bg-purple-500 hover:bg-purple-700 text-white p-2 rounded";
  const backLinkStyles = "text-purple-500 hover:text-purple-700 underline mt-2";

  const API_USER =
    process.env.NEXT_PUBLIC_URL_USER || "http://localhost:5000/api/users";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(`${API_USER}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setAuthToken(data.token);
      router.push("/dashboard");
    } else {
      setError(data.message || "Error al iniciar sesión");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(`${API_USER}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setAuthToken(data.token);
      router.push("/dashboard");
    } else {
      setError(data.message || "Error al registrar el usuario");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-white">
      <div className="flex flex-col items-center space-y-4 p-6 bg-gray-800 text-white shadow-lg rounded-md">
        {view === "default" && (
          <>
            <h1 className="text-xl sm:text-[1.5rem] font-bold mb-8">
              Elija una opción
            </h1>
            <button
              className={` sm:text-[1.25rem] ${registerStyles} w-40`}
              onClick={() => setView("register")}
            >
              Registrarse
            </button>
            <button
              className={`font-bold sm:text-[1.25rem] ${logInStyles} w-40 mt-4 mb-2`}
              onClick={() => setView("login")}
            >
              Iniciar sesión
            </button>
          </>
        )}

        {view === "register" && (
          <form onSubmit={handleRegister} className="space-y-4 w-64">
            <h1 className="text-xl font-bold mb-4">Registrarse</h1>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={`${inputStyles}`}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`${inputStyles}`}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`${inputStyles}`}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className={` ${registerStyles} w-full`}>
              Registrar
            </button>
            <button
              className={`${backLinkStyles}`}
              onClick={() => setView("default")}
            >
              Volver
            </button>
          </form>
        )}

        {view === "login" && (
          <form onSubmit={handleLogin} className="space-y-4 w-64">
            <h1 className="text-xl font-bold mb-4">Iniciar sesión</h1>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`${inputStyles}`}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`${inputStyles}`}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className={`${logInStyles} w-full`}>
              Iniciar sesión
            </button>
            <button
              className={`${backLinkStyles}`}
              onClick={() => setView("default")}
            >
              Volver
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
