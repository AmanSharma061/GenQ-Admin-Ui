"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useHandleQrGeneration } from "@/lib/helpers";
import { QrFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const page = () => {
  const form = useForm<z.infer<typeof QrFormSchema>>({
    resolver: zodResolver(QrFormSchema),
    defaultValues: {
      no_of_qrs: ""
    }
  });

  const { mutate: GenerationMutation, isPending } = useHandleQrGeneration();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  function onSubmit(values: z.infer<typeof QrFormSchema>) {
    let pyalod = {
      no_of_qrs: Number(values?.no_of_qrs),
      user_id: "66d36b32e092082c7c4ae40b"
    };

    GenerationMutation(pyalod);
  }
  return (
    <div className="w-full h-[90vh] flex items-center justify-center ">
      <div className="w-1/3  bg-[#FFFFFF] rounded-lg my-auto p-8">
        <p className="font-poppins font-medium text-[#232323]">
          Enter the number of QR's to be generated
        </p>

        <div className="w-full mt-4 flex flex-col gap-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="no_of_qrs"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-[#1814F3] w-full hover:bg-[#1814F3]/90 disabled:!bg-[#1814F3]/90 "
              >
                Generate Qr
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default page;
