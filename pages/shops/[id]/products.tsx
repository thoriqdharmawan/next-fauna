import { getAccessToken } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import ProductForm from "../../../components/NewProducts";

export default function Products(props: any) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <ProductForm shopId={id} accessToken={props.accessToken} />
    </div>
  );
}

export async function getServerSideProps(ctx: any) {
  const { accessToken } = await getAccessToken(ctx.req, ctx.res);

  return {
    props: {
      accessToken,
    },
  };
}
