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
import { useHandleQrGeneration } from "@/lib/actions/qr.actions";
import { QrFormSchema } from "@/lib/schemas";
import { useQrStore } from "@/lib/store/qr.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const page = () => {
  const { data: session, status } = useSession();
  const { SetQrCodes } = useQrStore();
  const sessioUser: any = session?.user;
  const form = useForm<z.infer<typeof QrFormSchema>>({
    resolver: zodResolver(QrFormSchema),
    defaultValues: {
      no_of_qrs: "",
      starting_amount: "",
      ending_amount: ""
    }
  });

  const { mutate: GenerationMutation, isPending } = useHandleQrGeneration();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);
  const router = useRouter();
  function onSubmit(values: z.infer<typeof QrFormSchema>) {
    let pyalod = {
      no_of_qrs: Number(values?.no_of_qrs),
      user_id: sessioUser.user_id,
      starting_amount: Number(values.starting_amount),
      ending_amount: Number(values.ending_amount)
    };

    GenerationMutation(pyalod, {
      onSuccess: (data) => {
        SetQrCodes(data?.data);
        router.push(`/qr/generated`);
      }
    });
  }

  useEffect(() => {
    SetQrCodes([]);
  }, []);
  return (
    <div className="w-full h-[90vh] flex items-center justify-center  ">
      <div className="lg:w-1/3   bg-[#FFFFFF] rounded-lg w-full py-8 border mx-8">
        <p className="font-poppins font-medium text-[#232323] text-xs text-left md:text-sm px-6">
          Enter the number of QR's to be generated
        </p>

        <div className="w-full mt-4 flex flex-col gap-y-4 p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="no_of_qrs"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Number of Qr's"
                        {...field}
                        autoComplete="off"
                        className="focus:!ring-0 "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="md:flex-row flex flex-col  w-full gap-x-4 gap-y-4  justify-between  items-center">
                <FormField
                  control={form.control}
                  name="starting_amount"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Starting Amount"
                          autoComplete="off"
                          className="focus:!ring-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ending_amount"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="Ending Amount"
                          {...field}
                          autoComplete="off"
                          className="focus:!ring-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="bg-[#1814F3] w-full hover:bg-[#1814F3]/90 disabled:!bg-[#1814F3]/90 "
              >
                {isPending ? "Generating...." : "Generate Qr"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default page;
