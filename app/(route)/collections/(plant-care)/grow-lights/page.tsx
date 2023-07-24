import dynamic from "next/dynamic";
import getProducts from "@/actions/get-products";

import Body from "@/components/ui/body";

const GrowLight = async () => {
  const products = await getProducts({ isFeatured: true });
  const Product = dynamic(() => import("./components/product-list-find"));
  return (
    <Body>
      <Product items={products} />
    </Body>
  );
};

export default GrowLight;
