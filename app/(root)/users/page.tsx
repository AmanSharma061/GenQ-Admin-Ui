"use client";
import { useGetAllUsers } from "@/lib/actions/user.actions";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const page = () => {
  const { data, isLoading } = useGetAllUsers();
  console.log(data);
  return (
    <Table className="">
      <TableHeader className="">
        <TableRow>
          <TableHead className="font-medium">Username</TableHead>
          <TableHead className="font-medium">Email</TableHead>
          <TableHead className="font-medium">Phone</TableHead>
          <TableHead className="font-medium">Ip Address</TableHead>
          <TableHead className="font-medium">Access to QR only</TableHead>
          <TableHead className="text-right font-medium">Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading && (
          <div>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11]?.map((_, index) => {
              return (
                <TableRow key={index}>
                  <Skeleton className="w-[100px] h-[20px] " />
                  <Skeleton className="w-[100px] h-[20px] " />
                  <Skeleton className="w-[100px] h-[20px] " />
                  <Skeleton className="w-[100px] h-[20px] " />
                  <Skeleton className="w-[100px] h-[20px] " />
                  <Skeleton className="w-[100px] h-[20px] " />
                </TableRow>
              );
            })}
          </div>
        )}
        {!isLoading &&
          data?.data?.map(
            ({
              username,
              email,
              phoneNo,
              metaData,
              role
            }: {
              username: string;
              email: string;
              phoneNo: number;
              metaData: any;
              role: any;
            }) => (
              <TableRow key={username}>
                <TableCell>{username}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{phoneNo}</TableCell>
                <TableCell className="">{metaData?.ip_address}</TableCell>
                <TableCell className="">
                  {role?.hasQrAccessOnly ? "Yes" : "No"}
                </TableCell>
                <TableCell className="text-right">{role?.type}</TableCell>
              </TableRow>
            )
          )}
      </TableBody>
    </Table>
  );
};

export default page;
