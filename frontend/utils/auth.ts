export const setAuthToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("authToken", token);
  }
};

export const getAuthToken = (): string | null => {
  return typeof window !== "undefined"
    ? localStorage.getItem("authToken")
    : null;
};

export const removeAuthToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("authToken");
  }
};
