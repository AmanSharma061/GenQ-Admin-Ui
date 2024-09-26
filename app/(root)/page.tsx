"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetCounts } from "@/lib/actions/qr.actions";

const page = () => {
  const { data, isLoading } = useGetCounts();
  return (
    <div className="grid grid-cols-5 gap-4  p-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Number of QR</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-semibold text-xl !font-poppins">
            {isLoading ? (
              <Skeleton className="w-24 h-8 bg-black/10" />
            ) : (
              Number(data?.data?.used_count) + Number(data?.data?.unused_count)
            )}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Used QR</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-semibold text-xl !font-poppins">
            {isLoading ? (
              <Skeleton className="w-24 h-8 bg-black/10" />
            ) : (
              Number(data?.data?.used_count)
            )}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Unused QR</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-semibold text-xl !font-poppins">
            {isLoading ? (
              <Skeleton className="w-24 h-8 bg-black/10" />
            ) : (
              Number(data?.data?.unused_count)
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
