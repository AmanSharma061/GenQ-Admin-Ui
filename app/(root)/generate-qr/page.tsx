"use client";
import React, { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { handleQrGeneration } from "@/lib/actions/qr.actions";
const page = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const generateQr = async () => {
    if (inputRef.current?.value) {
      const no_of_qrs = Number(inputRef.current.value);
      const response = await handleQrGeneration(no_of_qrs);
      if (response) {
        inputRef.current.value = "";
      }
    }
  };
  console.log(inputRef.current)
  return (
    <div className="w-full h-[90vh] flex items-center justify-center ">
      <div className="w-1/3  bg-[#FFFFFF] rounded-lg my-auto p-8">
        <p className="font-poppins font-medium text-[#232323]">
          Enter the number of QR's to be generated
        </p>

        <div className="w-full mt-4 flex flex-col gap-y-4">
          <Input ref={inputRef} type="number" />
          <Button
            onClick={()=>generateQr()}
            className="bg-[#1814F3] hover:bg-[#1814F3]/90 disabled:!bg-[#1814F3]/90 "
          >
            Generate Qr
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
