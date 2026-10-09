import Image from "next/image";
import Navlinks from "../components/Navlinks";
import Marquee from "./Marquee";
import Link from "next/link";

const Header = () => {
  const date = Intl.DateTimeFormat("bn-BD", {
    dateStyle: "full",
  }).format();
  return (
    <div>
      <div className="mx-auto flex w-full justify-between items-center bg-white p-4 max-w-7xl sm:flex-row">
        <div className="flex gap-2">
          <Image src={"/Stack.png"} alt="logo" height={40} width={50} />
          <div className="flex-col gap-2">
            <h1 className="font-bold text-2xl">বাজার দর</h1>
            <p className="text-sm">{date}</p>
          </div>
        </div>
        <div className="flex gap-4 font-semibold items-center">
          <Link href={"/sign-in"}>
            <button className="">সাইন ইন</button>
          </Link>
          <Link href={"/sign-up"}>
            <button className="btn btn-soft bg-green-700 text-white rounded-lg ">
              সাইন আপ
            </button>
          </Link>
        </div>
      </div>

      {/* <Navlinks /> */}
      {/* <Marquee /> */}
    </div>
  );
};

export default Header;
