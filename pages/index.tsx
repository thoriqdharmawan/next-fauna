import type { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import ProductList from "../components/ProductsList";

const GET_PRODUCTS = gql`
  query {
    getAllProducts {
      data {
        _id
        name
        description
        price
        imageUrl
        shop {
          _id
        }
      }
    }
  }
`;

const Home: NextPage = () => {
  const { data, loading } = useQuery(GET_PRODUCTS, {
    fetchPolicy: "network-only",
  });

  if (loading) return <p>Loading data, please wait..</p>;

  return (
    <>
      <ProductList products={data?.getAllProducts?.data} />
    </>
  );
};

export default Home;
