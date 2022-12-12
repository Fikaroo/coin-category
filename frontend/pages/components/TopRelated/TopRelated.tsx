import React from "react";
import { useGetCoinWithCountQuery } from "../../state/services/coin";
import TopRelativeItem from "./TopRelativeItem";

const TopRelated = () => {
  const { data, isLoading, isError } = useGetCoinWithCountQuery();
  return isLoading ? (
    <div>Loading ...</div>
  ) : isError ? (
    <div>Error</div>
  ) : (
    <div className="mt-12">
      <h2 className="text-3xl font-bold">Top Related</h2>
      <div className="grid w-full grid-cols-1 gap-16 my-5 md:grid-cols-2 xl:grid-cols-4">
        {data?.map((item) => (
          <TopRelativeItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TopRelated;
