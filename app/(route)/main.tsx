import Image from "next/image";
import profile_image from "@/public/profile-image.png";

export default function Main() {
  return (
    <div className="flex w-full h-svh">
      {/* Background Profile Image */}
      <div className="absolute top-0 left-0 w-full h-svh overflow-hidden">
        <Image
          src={profile_image}
          alt="main-profile-image"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 m-auto w-full h-full object-contain"
        />
      </div>
      {/* Left Component */}
      <div></div>
      {/* Right Component */}
      <div></div>
    </div>
  );
}
