import { useRouter } from "next/router";
import ProductForm from "../../../components/NewProducts";

export default function Products() {
  const router = useRouter();
  const { id } = router.query;

  console.log(router);

  return (
    <div>
      <ProductForm shopId={id} />
    </div>
  );
}
