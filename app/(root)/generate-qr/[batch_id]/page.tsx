"use client";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { useReactToPrint } from "react-to-print";
import { downloadZip } from "@/lib/helpers";
import { useSession } from "next-auth/react";
import { useGetQrUrls } from "@/lib/actions/qr.actions";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const page = () => {
  const { batch_id } = useParams();
  const componentRef = useRef();
  const router = useRouter();
  const [columns, setColumns] = useState<string | undefined>("4");
  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);
  const { data: session } = useSession();
  const handlePrint = useReactToPrint({
    content: () => componentRef?.current
  });
  const { data: qrData, isLoading } = useGetQrUrls({
    batch_id: String(batch_id),
    user_id: session?.user?.user_id
  });
  const qrs = qrData?.data;
 
  let timer :ReturnType<typeof setTimeout>;;
  return (
    <>
      {isDownloaded ? (
        <div className="w-full h-[90vh] flex items-center justify-center ">
          <div className="w-1/4  bg-[#FFFFFF] rounded-lg my-auto p-8 flex  items-center justify-between">
            <p className="font-poppins font-medium text-[#232323] ">
              Qrs downloaded Successfully.
            </p>

            <Link href={"/generate-qr"}>
              <Button>
                <MoveRight />
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full  p-10 flex-1 h-[100vh]  ">
          <div className="w-full p-6 border h-20 mt-16 mb-4 gap-x-2 flex justify-end">
            <Select onValueChange={(v) => setColumns(v)}>
              <SelectTrigger className="w-[180px]  focus:ring-0">
                <SelectValue placeholder="QR Columns" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="6">6</SelectItem>
              </SelectContent>
            </Select>
            <Button
              onClick={async () => {
                const res: any = await downloadZip(qrs);
                console.log(res);
                if (res?.message) {
                  clearTimeout(timer)
                  timer=setTimeout(() => {
                    setIsDownloaded(true);
                    
                  }, 5000);
                }
              }}
            >
              Download as zip
            </Button>
            <Button onClick={handlePrint}>Print</Button>
          </div>

          <div
            className={`grid grid-cols-${columns} gap-x-5`}
            ref={componentRef}
          >
            {qrs?.map((item: number, index: number) => {
              return (
                <div key={index}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default page;
