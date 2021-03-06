import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  console.log(posts);
  return <div>My Home</div>;
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10"
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
