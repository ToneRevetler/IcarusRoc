import { useCallback } from "react";

export type Status = "idle" | "deploying" | "success" | "error";

export function useDeployProject() {
  return useCallback((id: number, onResult: (status: Status) => void) => {
    onResult("deploying");

    setTimeout(() => {
      const success = Math.random() > 0.3;
      onResult(success ? "success" : "error");
    }, 1500);
  }, []);
}
