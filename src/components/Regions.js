import Image from "next/image";
import Link from "next/link";

const regions = [
  {
    id: 1,
    img: "assets/img/azizi1.png",
    title: "EMAAR",
    properties: "38 properties"
  },
  {
    id: 2,
    img: "assets/img/ellington1.jpeg",
    title: "ELLINGTON",
    properties: "33 properties"
  },
  {
    id: 6,
    img: "assets/img/danube1.png",
    title: "DANUBE",
    properties: "40 properties"
  },
  {
    id: 3,
    img: "assets/img/EMAAR_WORD_MARK_EN.png",
    title: "SOBHA",
    properties: "20 properties"
  },
  
  {
    id: 4,
    img: "assets/img/damaac1.png",
    title: "DAMAC",
    properties: "52 properties"
  }
];

export default function Regions() {
  return (
    <div className="flex gap-5  flex-wrap justify-center">
      <div className="">
        <Image
          width={150}
          height={130}
          src="/assets/img/azizi1.png"
          className="mt-6"
          alt="EMAAR"
        />
      </div>
      <div className="">
        <Image
          width={150}
          height={150}
          src="/assets/img/ellington1.jpeg"
          className=""
          alt="ELLINGTON"
        />
      </div>
      <div className="">
        <img
          src="assets/img/danube1.png"
          className=" mt-12"
          alt="DANUBE"
          style={{ width: "150px", height: "90px" }}
        />
      </div>
      <div className="">
        <img
          src="assets/img/EMAAR_WORD_MARK_EN.png"
          className=""
          alt="SOBHA"
          style={{ width: "150px", height: "150px" }}
        />
      </div>

      <div className="">
        <img
          src="assets/img/damaac1.png"
          className=" mt-14"
          alt="DAMAC"
          style={{ width: "150px", height: "40px" }}
        />
      </div>
    </div>
  );
}
