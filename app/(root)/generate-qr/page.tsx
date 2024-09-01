"use client";
import React, { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useHandleQrGeneration } from "@/lib/helpers";
const page = () => {
const {mutate:GenerationMutation,isPending}=useHandleQrGeneration()
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);


const handleQrGeneration=()=>{
  let pyalod={
    no_of_qrs:Number(inputRef.current?.value),
    user_id:"66d36b32e092082c7c4ae40b"
  }
  GenerationMutation(pyalod)
}
  return (
    <div className="w-full h-[90vh] flex items-center justify-center ">
      <div className="w-1/3  bg-[#FFFFFF] rounded-lg my-auto p-8">
        <p className="font-poppins font-medium text-[#232323]">
          Enter the number of QR's to be generated
        </p>

        <div className="w-full mt-4 flex flex-col gap-y-4">
          <Input ref={inputRef} type="number" />
          <Button
            type="submit"
            onClick={()=>handleQrGeneration()}
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
