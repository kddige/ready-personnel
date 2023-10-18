import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "@ready-personnel/api";

export const api = createTRPCReact<AppRouter>();

export { type RouterInputs, type RouterOutputs } from "@ready-personnel/api";
