"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Google from "@/public/assets/ggogle.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSignIn } from "../apis";
import { signIn } from "next-auth/react";
import { loginFormSchema } from "@/lib/schemas";

const page = () => {
  const { mutate: SignInMutation, isPending: isSigningIn } = useSignIn();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  });
  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
     SignInMutation(values);

  }

  return (
    <div className="w-[100vw] flex  h-full ">
      <div className="flex flex-1 !w-[70vw]"></div>
      <div className="border  !w-[30vw] bg-[#f5f7fa] items-center  h-full px-24 py-24">
        {" "}
        <div className="w-full"></div>
        <div className="w-full flex flex-col justify-center items-start h-full gap-y-4 ">
          <p className="font-poppins font-semibold text-2xl">Log In </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 w-[400px] "
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="john123" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        {...field}
                        type="password"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                {isSigningIn ? "Submitting" : "Submit"}
              </Button>
              <Button className="flex w-full gap-x-4 items-center font-poppins text-xs">
                <Google className="h-6" />
                <p className="">Sign up with google</p>
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default page;
