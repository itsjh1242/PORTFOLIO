import { cn } from "@/lib/utils";
import { ReactNode } from "react";
// Icons
import { FaApple } from "react-icons/fa";
import { IoSearchOutline, IoBagOutline } from "react-icons/io5";

const NAV_ITEMS = ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "Entertainment", "Accessories", "Support"];

const Page = () => {
  return (
    <main className="w-screen h-full min-h-screen flex justify-center items-start">
      <div className="w-full h-11 bg-[#1d1d1f]">
        <nav className="sticky w-full h-full px-[22px] flex justify-center items-center gap-5">
          <NavItem className="w-7">
            <FaApple color="#d1d1d1" size={16} className="hover:fill-white transition duration-300" />
          </NavItem>
          {NAV_ITEMS.map((item, index) => {
            return (
              <NavItem key={index}>
                <p className="text-white text-xs font-thin">{item}</p>
              </NavItem>
            );
          })}
          <NavItem className="w-7">
            <IoSearchOutline color="#d1d1d1" size={16} className="hover:fill-white transition duration-300" />
          </NavItem>
          <NavItem className="w-7">
            <IoBagOutline color="#d1d1d1" size={16} className="hover:fill-white transition duration-300" />
          </NavItem>
        </nav>
        {/* Main, iPad Pro */}
        <MainUnit className="bg-[url('/clone/apple/hero_ipadpro__bpt7a9d8sh42_large_2x.jpg')] bg-no-repeat bg-center bg-cover">
          <div className="pt-[40px] text-white flex flex-col items-center">
            <p className="text-[50px] font-semibold">iPad Pro</p>
            <p className="text-[25px] font-light">Unbelievably thin. Incredibly powerful.</p>
            <div className="flex font-light mt-[19px]">
              <FillButton>Learn more</FillButton>
              <EmptyButton>Buy</EmptyButton>
            </div>
          </div>
        </MainUnit>
        <MainUnit></MainUnit>
        <MainUnit className="bg-[url('/clone/apple/hero_iphone_family_a__c7v3mvx3jv42_large_2x.jpg')] bg-no-repeat bg-center bg-cover">
          <div className="pt-[40px] text-white flex flex-col items-center">
            <p className="text-[50px] font-semibold">iPhone</p>
            <p className="text-[25px] text-center break-words font-light max-w-[400px]">Our most powerful cameras yet. Ultrafast chips. And USB-C.</p>
            <div className="flex font-light mt-[19px]">
              <FillButton>Learn more</FillButton>
              <EmptyButton>Shop iPhone</EmptyButton>
            </div>
          </div>
        </MainUnit>
      </div>
    </main>
  );
};

const NavItem = ({ className, children }: { className?: string; children?: ReactNode }) => {
  return <div className={cn(`px-2`, className)}>{children}</div>;
};

const MainUnit = ({ className, children }: { className?: string; children?: ReactNode }) => {
  return <div className={cn(`w-full h-[580px]`, className)}>{children}</div>;
};

const FillButton = ({ className, children }: { className?: string; children?: ReactNode }) => {
  return <a className={cn("text-[17px] bg-[#0071e3] text-white rounded-full px-[21px] py-[8px]", className)}>{children}</a>;
};

const EmptyButton = ({ className, children }: { className?: string; children?: ReactNode }) => {
  return (
    <a
      className={cn(
        "text-[17px] bg-transparent text-[#0071e3] rounded-full border border-[#0071e3] px-[21px] py-[8px] ml-[13px] hover:bg-[#0071e3] hover:text-white",
        className
      )}
    >
      {children}
    </a>
  );
};

export default Page;
