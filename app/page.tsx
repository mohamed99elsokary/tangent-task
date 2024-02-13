import { Grid, GridItem } from "@chakra-ui/react";

import { productInterface } from "./types";
import ProductCardOrganism from "./components/organisms/productCardOrganism";
import { fetchProducts } from "./api/api";
import TextAtom from "./components/atoms/text";
export default async function Home() {
  const products = await fetchProducts();

  return (
    <>
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
    </>
  );
}
