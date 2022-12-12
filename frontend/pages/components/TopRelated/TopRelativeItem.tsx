import Image from "next/image";
import Link from "next/link";
import React from "react";
import { imageUrl } from "../../state/constants";
import { Coin } from "../../types";

const TopRelativeItem = ({ name, title, image, id }: Coin) => {
  return (
    <Link href={`/coin/${id}`}>
      <div className="relative flex flex-col items-center py-4 transition-all group hover:cursor-pointer">
        <Image
          className="transition-all group-hover:scale-105 group-hover:animate-bounce"
          loading="lazy"
          src={`${imageUrl}/${image[0]}`}
          width={160}
          height={160}
          alt={name}
        />
        <div className="absolute flex flex-col items-center p-4 transition-all rounded-md shadow-lg top-2/3 w-72 bg-gray-50 group-hover:bg-gray-100">
          <h5 className="text-lg font-medium">{name}</h5>
          <p className="text-sm font-normal text-center">{title}</p>
        </div>
      </div>{" "}
    </Link>
  );
};

export default TopRelativeItem;
