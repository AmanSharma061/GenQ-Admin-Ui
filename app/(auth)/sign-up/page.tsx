"use client";
import { metadata } from "@/app/(root)/layout";
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
import googlee from "@/public/assets/google.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  username: z.string().min(2).max(50).toLowerCase(),
  email: z.string().min(10).max(50),
  phoneNo: z.string().min(10).max(10),
  password: z.string().min(8).max(20),
  metaData: z.any()
});

const page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email:"",
      phoneNo:"",
      password:"",
      metaData:{}
    }
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { data } = await axios.get("https://api.ipify.org?format=json");
    let { ip } = data;

    let metaData = {
      platform: window.navigator?.userAgentData?.platform,
      isFromMobile: window.navigator?.userAgentData?.mobile,
      ip_address: ip
    };
    values["metaData"] = metaData;
  }

  return (
    <div className="w-[100vw] flex  h-full ">
      <div className="flex flex-1 !w-[70vw]"></div>
      <div className="border  !w-[30vw] bg-[#f5f7fa] items-center  h-full px-24 py-24">
        {" "}
        <div className="w-full">
          <p className="font-poppins font-semibold text-2xl">Register </p>
          <p className="font-poppins font-medium text-sm mt-1">Sign up with</p>
          <div>
            <div className="gsi-material-button-state"></div>
            <Image src={googlee} alt="Google" className="border" />
          </div>
        </div>
        <div className="w-full flex items-center my-16 ">
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
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default page;
