import {Caveat} from "next/font/google";
const caveat = Caveat({ subsets: ["latin"] });

export default function Heading({heading}) {
    return (
      <div>
        <h1 className={`${caveat.className} p-10 text-9xl items-center`} >{heading}</h1>
      </div>
    );
  }