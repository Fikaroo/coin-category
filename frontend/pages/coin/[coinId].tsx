import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { Carousel, Table } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";
import { imageUrl } from "../state/constants";
import { useGetCoinWithIdQuery } from "../state/services/coin";

const Coin = () => {
  const router = useRouter();
  const { coinId } = router.query;
  const { data, isLoading, isError } = useGetCoinWithIdQuery(coinId);
  console.log(data);
  return isLoading ? (
    <div>Loading ...</div>
  ) : isError ? (
    <div>Error</div>
  ) : (
    <div className="container w-full pt-4 text-gray-900">
      <Header name={data?.name} />
      <Link
        href={`/category/${data?.categoryId}`}
        className="flex gap-1 font-medium"
      >
        <ArrowLeftCircleIcon width={24} /> Back list
      </Link>
      <div className="mt-4">
        <div className="grid h-[1200px] lg:grid-cols-2 gap-8 lg:h-[600px] 2xl:h-1/2 ">
          <Carousel
            className={`w-full h-full rounded-3xl ${
              data?.categoryId === 1
                ? "bg-blue-300"
                : data?.categoryId === 2
                ? "bg-red-400"
                : "bg-green-400"
            }`}
          >
            <Image
              loading="lazy"
              className="p-24"
              src={`${imageUrl}/${data?.image[0]}`}
              width={160}
              height={160}
              alt={data?.name || ""}
            />
            <Image
              loading="lazy"
              className="p-24"
              src={`${imageUrl}/${data?.image[1]}`}
              width={160}
              height={160}
              alt={data?.name || ""}
            />
          </Carousel>
          <div>
            <h4 className="text-3xl font-semibold">Description</h4>
            <div className="my-4 space-y-2">
              {data?.description.split(".").map((item) => (
                <p className="text-sm ">{item}</p>
              ))}
            </div>
            <Table striped={true} className="!bg-gray-400">
              <Table.Body>
                <Table.Row>
                  <Table.Cell className="font-semibold text-gray-900">
                    Issuing Country
                  </Table.Cell>
                  <Table.Cell>{data?.issuingCountry.name}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="font-semibold text-gray-900">
                    Composition
                  </Table.Cell>
                  <Table.Cell>{data?.composition.name}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="font-semibold text-gray-900">
                    Quality
                  </Table.Cell>
                  <Table.Cell>{data?.quality.name}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="font-semibold text-gray-900">
                    Denomination
                  </Table.Cell>
                  <Table.Cell>{data?.denomination}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="font-semibold text-gray-900">
                    Year
                  </Table.Cell>
                  <Table.Cell>{data?.year}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="font-semibold text-gray-900">
                    Weight
                  </Table.Cell>
                  <Table.Cell>{data?.weight} g</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="font-semibold text-gray-900">
                    Price
                  </Table.Cell>
                  <Table.Cell>{data?.price}$</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
