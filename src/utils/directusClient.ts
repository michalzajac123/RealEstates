import { createDirectus, rest } from "@directus/sdk";

export const client = createDirectus(location.origin + "/directus/").with(
  rest()
);
