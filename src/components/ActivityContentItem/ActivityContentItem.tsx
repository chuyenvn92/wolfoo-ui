import { useState } from "react";

interface IProps {
  image: string;
  file: string;
}

export default function ActivityContentItem({ image, file }: IProps) {
  const [fetching, setFetching] = useState(false);

  const download = (url: string, name: string) => () => {
    if (!url) {
      throw new Error("Resource URL not provided! You need to provide one");
    }
    setFetching(true);
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        setFetching(false);
        const blobURL = URL.createObjectURL(blob);
        const a: HTMLAnchorElement = document.createElement("a");
        a.href = blobURL;
        a.style.display = "none";

        if (name && name.length) a.download = name;
        document.body.appendChild(a);
        a.click();
      })
      .catch(() => console.log("err"));
  };

  return (
    <div className="flex flex-col">
      <a
        href={file}
        className="relative inline-block preview-file"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={image}
          alt="previewImg"
          className="relative z-[1] rounded-[70px]"
        />
      </a>
      <button
        className="pt-4 mt-6 text-2xl text-center text-slate-blue"
        onClick={download(file, file)}
        disabled={fetching}
      >
        Download
      </button>
    </div>
  );
}
