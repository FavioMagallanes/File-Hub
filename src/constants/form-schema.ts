import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, "Too Short"),
  email: z.string(),
  password: z.string().min(6, "Too Short"),
});
