import { lazy } from "react";

export const AutoInvest = lazy(
  async () => await import("../pages/auto-invest")
);
