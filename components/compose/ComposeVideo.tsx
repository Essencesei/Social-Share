"use client";
import "@uploadthing/react/styles.css";

import { UploadButton } from "@/lib/uploadthing/uploadthing";
import { FaCamera, FaVideo } from "react-icons/fa6";
import { Loader2 } from "lucide-react";

export type VideoData = {
  name: string;
  key: string;
  url: string;
};

type ComposeImageProps = {
  handleVideo: (video: VideoData) => void;
};

export default function ComposeImage({ handleVideo }: ComposeImageProps) {
  return (
    <>
      <UploadButton
        endpoint="videoUploader"
        config={{
          mode: "auto",
        }}
        appearance={{
          button({ uploadProgress }) {
            if (uploadProgress)
              return "w-fit h-fit p-4 ut-uploading:cursor-not-allowed rounded-r-none bg-slate-500  bg-none after:bg-slate-600";
            return "bg-primary w-fit h-fit p-4";
          },
        }}
        content={{
          button({ uploadProgress }) {
            if (uploadProgress)
              return <Loader2 className="z-50 h-4 w-4 animate-spin" />;
            return <FaVideo className="z-50" />;
          },
          allowedContent: " ",
        }}
        onClientUploadComplete={(res) => {
          // Do something with the response

          handleVideo({
            url: res[0].url,
            key: res[0].key,
            name: res[0].name,
          });

          console.log("Files: ", res);
          //   alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          //   alert(`ERROR! ${error.message}`);
        }}
      />
    </>
  );
}
