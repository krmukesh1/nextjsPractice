import Navbar from "../../components/Navbar";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
export default function blog({ data }) {
  return (
    <div>
      <Navbar />
      <h1>Blog Page</h1>
      {data.slice(0, 5).map((curElem) => {
        return (
          <div key={curElem.id} style={{ cursor: "pointer" }}>
            <h3>{curElem.id}</h3>
            <Link href={`/blog/${curElem.id}`} passHref>
              <h3>{curElem.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
