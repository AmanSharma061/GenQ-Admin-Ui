
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { useMutation } from "@tanstack/react-query";
import { instance } from "../axios/instance";
import { toast } from "@/hooks/use-toast";
import { redirect } from "next/navigation";
const date=new Date();

const year=(date.getFullYear())
const month=(date.getMonth())
const day=(date.getDay())
const today=[day,month,year].join("_");

export const downloadZip = async (urls: string[]) => {
  try {
    const zip = new JSZip();
    const fetchPromises = urls?.map(async (url, index) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}`);
      }
      const blob = await response.blob();
      const filename = `${url.split("/")[3].split(".")[0]}${url.substring(
        url.lastIndexOf(".")
      )}`;
      zip.file(filename, blob);
    });
    fetchPromises && (await Promise.all(fetchPromises));
    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, `${today}.zip`);
    return {message:"Qrs downloaded successfully."}
  } catch (err) {
    console.error(err);
  } finally {
  }
};

