"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { instance } from "@/lib/axios/instance";
import Google from "@/public/assets/ggogle.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSignUp } from "../apis";
import { signUpFormSchema } from "@/lib/schemas";

const page = () => {
  const {
    mutate: SignUpMutation,
    isPending: isSigningUp,
    isSuccess,
  } = useSignUp();
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      username: "",
      email: "",
      phoneNo: "",
      password: "",
      metaData: {
        os: "",
        isFromMobile: false,
        ip_address: "",
      },
    },
  });
  async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    const data = await instance.get("https://ip-extractor.onrender.com/ip");
    let ip = data.ip;
    let metaData = {
      os: window.navigator?.userAgentData?.platform,
      isFromMobile: window.navigator?.userAgentData?.mobile,
      ip_address: ip,
    };
    values["metaData"] = metaData;
    SignUpMutation(values);
  }

  return (
    <div className="w-[100vw] flex  h-full ">
      <div className="flex flex-1 !w-[70vw]"></div>
      <div className="border  !w-[30vw] bg-[#f5f7fa] items-center  h-full px-24 py-24">
        {" "}
       
        <div className="w-full flex items-start flex-col justify-center h-full  gap-y-2">
          <Form {...form}>
          <p className="font-poppins font-semibold text-2xl">Sign Up </p>
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@xyz.com" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="0000000000"
                        {...field}
                        type="number"
                      />
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
                {isSigningUp ? "Submitting" : "Submit"}
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
