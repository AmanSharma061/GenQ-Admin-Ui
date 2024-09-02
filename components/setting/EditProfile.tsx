"use client";
import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { signUpFormSchema } from "@/lib/schemas";
import * as z from "zod";
const EditProfile = () => {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
  });
  return (
    <>
      <div className="flex mt-5 gap-x-10 px-10">
        <div className=" w-[10%] flex flex-col items-center justify-center ml-2 outline">
          <Avatar className="w-32 h-32 mt-[-12rem] relative outline">
            <AvatarImage src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" />
            <AvatarFallback>Profile Photo</AvatarFallback>
          </Avatar>
            <div className="absolute bottom-0 right-0">
              <MdOutlineEdit className="bg-blue-500 w-8 h-8 rounded-full text-white p-1" />
            </div>
        </div>
        <div className="w-[90%] text-black/70 font-poppins ">
          <Form {...form}>
            <div className="flex gap-x-10">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[30rem] p-6 rounded-xl placeholder:text-blue-300 block   border border-slate-300 focus:outline-none  "
                        placeholder="John"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John@gmail.com"
                        {...field}
                        className="w-[30rem] p-6 rounded-xl placeholder:text-blue-300 block   border border-slate-300 focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex  gap-x-10">
              <FormField
                control={form.control}
                name="phoneNo"
                render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel>Phone No</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="999-999-9999"
                        {...field}
                        className="w-[30rem] p-6 rounded-lg placeholder:text-blue-300 block   border border-slate-300 focus:outline-none"
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
                        placeholder="************"
                        {...field}
                        className="w-[30rem] p-6 rounded-xl placeholder:text-blue-300 block   border border-slate-300 focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex  gap-x-10">
              <FormField
                control={form.control}
                name="phoneNo"
                render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel>Phone No</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="999-999-9999"
                        {...field}
                        className="w-[30rem] p-6 rounded-lg placeholder:text-blue-300 block   border border-slate-300 focus:outline-none"
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
                        placeholder="************"
                        {...field}
                        className="w-[30rem] p-6 rounded-xl placeholder:text-blue-300 block   border border-slate-300 focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex  gap-x-10">
              <FormField
                control={form.control}
                name="phoneNo"
                render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel>Phone No</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="999-999-9999"
                        {...field}
                        className="w-[30rem] p-6 rounded-lg placeholder:text-blue-300 block   border border-slate-300 focus:outline-none"
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
                        placeholder="************"
                        {...field}
                        className="w-[30rem] p-6 rounded-xl placeholder:text-blue-300 block   border border-slate-300 focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Form>
          <div className="ml-[78%] mt-10">
            <Button className="bg-blue-500 rounded-md hover:bg-blue-500 px-10">
              Update
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
