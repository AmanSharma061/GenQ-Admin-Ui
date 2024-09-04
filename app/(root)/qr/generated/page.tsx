"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useRef, useState } from "react";

import { downloadZip } from "@/lib/helpers";
import { useQrStore } from "@/lib/store/qr.store";
import { MoveLeftIcon, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useReactToPrint } from "react-to-print";
const page = () => {
  const componentRef = useRef<HTMLDivElement | null>();
  const [columns, setColumns] = useState<string | undefined>("grid-cols-3");
  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);

  const handlePrint = useReactToPrint({
    content: () => componentRef?.current
  });

  const { QrCodes } = useQrStore();
  let timer: ReturnType<typeof setTimeout>;
  return (
    <>
      {isDownloaded ? (
        <div className="w-full h-[90vh] flex items-center justify-center overflow-hidden  ">
          <div className="w-1/4  bg-[#FFFFFF] rounded-lg my-auto p-8 flex  items-center justify-between">
            <p className="font-poppins font-medium text-[#232323] ">
              Qrs downloaded Successfully.
            </p>

            <Link href={"/qr/generate"}>
              <Button>
                <MoveRight />
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full  px-10 flex-1 h-[90vh]   overflow-hidden relative box-border ">
          <div className=" p-6   bg-[#f5f7fa] my-2  items-center border-2 flex-1  rounded-md   py-3 gap-x-2 flex justify-between">
            <Link href={"/qr/generate"}>
              <Button
                className="flex justify-start w-fit h-8">
                <MoveLeftIcon />
              </Button>
            </Link>

            <div className="flex gap-x-4 items-center">
              <Select onValueChange={(v) => setColumns(`grid-cols-${v}`)} >
                <SelectTrigger className="w-[180px]  focus:ring-0 hidden md:flex h-8">
                  <SelectValue placeholder="QR Columns" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">Default</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                </SelectContent>
              </Select>
              <Button
              className="h-8"
                onClick={async () => {
                  const res: any = await downloadZip(QrCodes);
                }}
              >
                Download as zip
              </Button>
              <Button className="h-8" onClick={handlePrint}>Print</Button>
            </div>
          </div>
          <div className="flex-1 overflow-auto border rounded-md max-h-[80vh]">
            <div
              className={`grid  gap-x-5 ${columns}  overflow-auto gap-y-4 flex-1`}
              ref={componentRef}
            >
              {QrCodes?.map((item: any, index: number) => {
                return (
                  <div key={index}>
                    <Image
                      src={item}
                      alt="Qr"
                      width={300}
                      height={300}
                      className="h-auto w-auto"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
