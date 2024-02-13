import { Grid, GridItem } from "@chakra-ui/react";
import { productInterface } from "./types";
import ProductCardOrganism from "./components/organisms/productCardOrganism";
import { fetchProducts } from "./api/api";
import TextAtom from "./components/atoms/text";
import PaginationMolecule from "./components/molecules/paginationMolecule";
import Link from "next/link";
const MAX_LIMIT = 5;
interface HomePageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}
export default async function Home({ searchParams }: HomePageProps) {
  const page = searchParams?.page || 1;
  const limit = (+page - 1) * MAX_LIMIT;
  const { products, total } = await fetchProducts(
    `?limit=${MAX_LIMIT}&skip=${limit}`
  );

  return (
    <>
      <Link href="/cart">cart &#8594;</Link>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {!!products.length ? (
          products.map((product: productInterface) => (
            <GridItem key={product.title}>
              <ProductCardOrganism product={product} />
            </GridItem>
          ))
        ) : (
          <TextAtom text={"no products found"}></TextAtom>
        )}
      </Grid>
      {!!total && total > MAX_LIMIT && (
        <PaginationMolecule totalItemsCount={total} limit={MAX_LIMIT} />
      )}
    </>
  );
}
