import { Card } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { imageUrl } from "../../state/constants";
import { Category } from "../../types";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const CategoryItem = ({ id, name, image }: Category) => {
  return id === 1 ? (
    <Card className="relative !bg-blue-300 !rounded-3xl z-10 overflow-hidden flex flex-col gap-20">
      <div className="z-10 flex items-start w-full gap-20 px-4 mb-20">
        <h2 className="text-4xl font-bold text-center text-gray-100">
          {name.split(" ")[0]} <br /> {name.split(" ")[1]}
        </h2>
        <Link href={{ pathname: `/category/${id}` }}>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-900 bg-white rounded-lg w-fit bg-opacity-90 hover:bg-opacity-100">
            Show All <ArrowLongRightIcon width={16} className="" />
          </button>
        </Link>
      </div>
      <p className="z-10 ml-24 text-sm font-medium text-center text-gray-100">
        A bullion coin is a coin struck from <br /> refined precious metal
        (bullion) and <br /> kept as a store of value or an <br /> investment
        rather than used in <br />
        day-to-day commerce.
      </p>
      <Image
        className="absolute -top-20 -right-28 opacity-80"
        src={`${imageUrl}/${image}`}
        width={280}
        height={280}
        priority
        alt={name}
      />
      <Image
        className="absolute -bottom-10 -left-40 opacity-80"
        src={`${imageUrl}/${image}`}
        width={280}
        height={280}
        priority
        alt={name}
      />
    </Card>
  ) : id === 2 ? (
    <Card className="relative !bg-red-400 !rounded-3xl z-10 overflow-hidden flex flex-col gap-16">
      <p className="z-10 ml-32 text-sm font-medium text-center text-gray-100">
        Exclusive Coins is an established <br /> company, specialising in the
        <br />
        buying and selling of rare gold & <br /> silver coins. We deal in coins
        only <br /> and pride ourselves on offering <br /> you a professional
        service wholly <br /> dedicated to this sector.
      </p>
      <div className="z-10 flex items-end w-full gap-12 px-4 mt-12">
        <h2 className="text-4xl font-bold text-center text-gray-100">
          {name.split(" ")[0]} <br /> {name.split(" ")[1]}
        </h2>
        <Link href={{ pathname: `/category/${id}` }}>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-900 bg-white rounded-lg w-fit bg-opacity-90 hover:bg-opacity-100">
            Show All <ArrowLongRightIcon width={16} className="" />
          </button>
        </Link>
      </div>
      <Image
        className="absolute -top-10 -left-32 opacity-70"
        src={`${imageUrl}/${image}`}
        width={280}
        height={280}
        priority
        alt={name}
      />
      <Image
        className="absolute -right-10 -bottom-44 opacity-70"
        src={`${imageUrl}/${image}`}
        width={280}
        height={280}
        priority
        alt={name}
      />
    </Card>
  ) : (
    <Card className="relative !bg-green-400 !rounded-3xl z-10 overflow-hidden flex flex-col gap-20">
      <Link href={{ pathname: `/category/${id}` }}>
        <button className="flex items-center gap-2 px-4 py-2 ml-4 text-sm font-semibold text-gray-900 bg-white rounded-lg w-fit bg-opacity-90 hover:bg-opacity-100">
          Show All <ArrowLongRightIcon width={16} className="" />
        </button>
      </Link>
      <p className="z-10 mt-10 mr-1 text-sm font-medium text-center text-gray-100">
        Commemorative coins are coins issued to <br /> commemorate some
        particular event or <br /> issue with a distinct design with reference
        <br />
        to the occasion on which they were issued.
      </p>
      <h2 className="z-10 mt-4 ml-16 text-4xl font-bold text-center text-gray-100">
        {name.split(" ")[0]} <br /> {name.split(" ")[1]}
      </h2>
      <Image
        className="absolute -top-44 -right-10 opacity-70"
        src={`${imageUrl}/${image}`}
        width={280}
        height={280}
        priority
        alt={name}
      />
      <Image
        className="absolute -bottom-52 -left-24 opacity-70"
        src={`${imageUrl}/${image}`}
        width={280}
        height={280}
        priority
        alt={name}
      />
    </Card>
  );
};

export default CategoryItem;
