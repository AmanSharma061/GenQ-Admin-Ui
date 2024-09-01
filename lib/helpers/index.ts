import JSZip from "jszip";
import { saveAs } from "file-saver";
import { useMutation } from "@tanstack/react-query";
import { instance } from "../axios/instance";
import { toast } from "@/hooks/use-toast";
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
    saveAs(zipBlob, "files.zip");
  } catch (err) {
    console.error(err);
  } finally {
  }
};

const generateQr = async (payload: { no_of_qrs: number, user_id: string }) => {
  const response = await instance.post('/generate/qr', payload);
  return response
}
export const useHandleQrGeneration = () => {
  return useMutation({
    mutationFn: generateQr,
    onSuccess: (data: any) => {
      toast({
        description: data?.data?.message
      })
    }
  }

  )
}