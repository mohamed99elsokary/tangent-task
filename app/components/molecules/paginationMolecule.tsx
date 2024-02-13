"use client";
import { Flex } from "@chakra-ui/react";
import ButtonAtom from "../atoms/button";
import colors from "@/app/constants/colors";
import { usePathname, useRouter } from "next/navigation";

const PaginationMolecule = ({
  totalItemsCount,
  limit,
}: {
  totalItemsCount: number;
  limit: number;
}) => {
  const numberOfPages = totalItemsCount / limit;
  const router = useRouter();
  const pathName = usePathname();

  const pages = new Array(numberOfPages)
    .fill(0)
    .map((item, index) => index + 1);
  const handlePageClick = (item: number) => {
    router.push(`${pathName}?page=${item}`);
  };
  return (
    <Flex>
      {pages.map((item) => (
        <ButtonAtom
          onClick={() => {
            handlePageClick(item);
          }}
          text={String(item)}
          color={colors.gray}
        />
      ))}
    </Flex>
  );
};
export default PaginationMolecule;
