import { z } from "zod";

export const loginFormSchema = z.object({
    username: z.string().min(2).max(50).toLowerCase(),
    password: z.string().min(8).max(20)
  });
  

  export const signUpFormSchema = z.object({
    username: z.string().min(2).max(50).toLowerCase(),
    email: z.string().min(10).max(50),
    phoneNo: z.string().min(10).max(10),
    password: z.string().min(8).max(20),
    metaData: z.any()
  });
  
  export const QrFormSchema = z.object({
    no_of_qrs: z.string().min(1, {
      message: "Number of Qrs should be atleast 1."
    })
  });