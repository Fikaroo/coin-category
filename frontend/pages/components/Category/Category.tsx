import React from "react";
import { useGetAllCategoryQuery } from "../../state/services/coin";
import CategoryItem from "./CategoryItem";

const Category = () => {
  const { data, isLoading, isError } = useGetAllCategoryQuery();
  return isLoading ? (
    <div>Loading ...</div>
  ) : isError ? (
    <div>Error</div>
  ) : (
    <div className="grid w-full grid-cols-1 gap-8 my-5 md:grid-cols-2 xl:grid-cols-3">
      {data?.map((item) => (
        <CategoryItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Category;
