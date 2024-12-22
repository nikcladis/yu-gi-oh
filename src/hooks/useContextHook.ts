import { useContext, Context } from "react";

export const useContextHook = <T>(
  context: Context<T | undefined>,
  contextName: string
): T => {
  const value = useContext(context);
  if (!value) {
    throw new Error(`${contextName} must be used within a Provider`);
  }
  return value;
};
