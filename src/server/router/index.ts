// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { emailRouter } from "./emailRouter";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("email.", emailRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
