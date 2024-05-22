"use client";
import { RefObject } from "react";
import Image from "next/image";
import { prefix } from "../../../../lib/prefix";

// UI Components

interface FooterInterface {
  prefix: string;
  sectionRef: RefObject<HTMLDivElement>;
}
interface ImageHolderInterface {
  src: string;
  alt: string;
  width: number;
  height: number;
  url: string;
}

const Footer = (props: FooterInterface) => {
  const { sectionRef } = props;
  return (
    <div ref={sectionRef} className="flex justify-center items-center w-full h-20 border-t">
      <div className="flex justify-between items-center w-2/3 max-sm:w-full h-full max-sm:px-2 max-sm:text-xs text-gray-800">
        {/* Left */}
        <div className="flex flex-col">
          <p>@2024 Junhyeon Kim.</p>
          <p>All rights reserved</p>
        </div>
        {/* Center */}
        <div className="flex gap-2 max-sm:w-1/4">
          <ImageHolder src={`/Github.png`} alt="github" width={40} height={40} url="https://github.com/itsjh1242" />
          <ImageHolder src={`/Blog.png`} alt="github" width={40} height={40} url="https://jundev717.tistory.com/" />
          <ImageHolder src={`/Email.png`} alt="github" width={40} height={40} url="mailto:itsjh@kakao.com" />
        </div>
        {/* Right */}
        <div className="flex flex-col items-end">
          <p>@Designed & Developed by</p>
          <p>김준현</p>
        </div>
      </div>
    </div>
  );
};

const ImageHolder = (props: ImageHolderInterface) => {
  const { src, alt, width, height, url } = props;

  const handleLocation = () => {
    window.open(url, "_blank");
  };
  return (
    <div
      className="opacity-50 cursor-pointer hover:opacity-100 transition-all"
      onClick={() => {
        handleLocation();
      }}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Footer;
