import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TextInput, Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = ({ name }: any) => {
  const [val, setVal] = useState("");
  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setVal(val);
  };
  const router = useRouter();
  return (
    <nav className="flex justify-between mb-10">
      <Link href="/">
        <h1 className="text-5xl font-bold">{name}</h1>
      </Link>
      <div className="flex items-center gap-4">
        <TextInput
          className="flex items-center"
          type="search"
          placeholder="Search"
          icon={MagnifyingGlassIcon}
          value={val}
          onChange={inputHandle}
        />
        <Button
          className="!bg-purple-400 hover:!bg-purple-600"
          onClick={() =>
            router.push({
              pathname: "/coin",
              query: { search: val },
            })
          }
        >
          Search
        </Button>
      </div>
    </nav>
  );
};

export default Header;
