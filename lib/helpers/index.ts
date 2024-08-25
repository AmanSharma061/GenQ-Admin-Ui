import JSZip from "jszip";
import { saveAs } from "file-saver";
export const downloadZip = async (urls:string[]) => {
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