"use client";
import React from "react";

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
      <div className="flex mt-5">
        <div className="w-[30%] flex flex-col items-center justify-center">
          <Avatar className="w-64 h-64">
            <AvatarImage src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" />
            <AvatarFallback>Profile Photo</AvatarFallback>
          </Avatar>
          <p className="mt-4 text-center text-gray-600">Your profile photo</p>
        </div>
        <div className="w-[70%]">
          <Form {...form}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John"
                      {...field}
                      className="w-[70%] p-5"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                      className="w-[70%] p-5"
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
                      placeholder="Password"
                      {...field}
                      className="w-[70%] p-5"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
