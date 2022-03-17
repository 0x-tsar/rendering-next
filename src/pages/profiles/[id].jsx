import { useRouter } from "next/router";
import React from "react";
import axios from "axios";

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { data } = await axios.get(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json",
    { params: { id: context.params.id } }
  );

  const pokemon = await data[context.params.id - 1];

  return {
    props: { pokemon },
  };
}

const Profile = ({ pokemon }) => {
  console.log(pokemon);
  // const router = useRouter();
  return <div>{/* <p>{pokemon</p> */}</div>;
  // return <div>Profile {router.query.id}</div>;
};

export default Profile;
