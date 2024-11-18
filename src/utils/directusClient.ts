import { createDirectus, rest } from "@directus/sdk";

export const client = createDirectus("http://localhost:5175/directus/").with(
  rest()
);
