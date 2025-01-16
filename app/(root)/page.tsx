import sampleData from "@/db/sample-data";

export const metadata = {
  title: "Home",
};
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
import { Button } from "@/components/ui/button";
import ProductList from "@/components/shared/products/product-list";

export default async function Home() {
  await delay(1000); // Simulating a slow loading time
  return (
    <div>
      <Button>Hello</Button>
      <ProductList
        data={sampleData.products}
        title={"New arrivals"}
        limit={3}
      />
    </div>
  );
}
