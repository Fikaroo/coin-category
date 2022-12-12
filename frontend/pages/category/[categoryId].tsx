import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";
import TopRelatedItem from "../components/TopRelated/TopRelativeItem";
import { useGetCoinWithCategoryIdQuery } from "../state/services/coin";

const Category = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  const { data, isLoading, isError } =
    useGetCoinWithCategoryIdQuery(categoryId);
  return isLoading ? (
    <div>Loading ...</div>
  ) : isError ? (
    <div>Error</div>
  ) : (
    <div className="container my-4 text-gray-900">
      <Header name={data?.[0].category.name} />
      <div className="grid w-full grid-cols-1 gap-16 my-12 md:grid-cols-2 xl:grid-cols-4">
        {data?.map((item) => (
          <div key={item.id} className="mb-4">
            <TopRelatedItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
