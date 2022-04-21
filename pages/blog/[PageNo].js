import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: { PageNo: curElem.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.PageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const PageNo = ({ data }) => {
  const { id, title, body } = data;
  return (
    <div>
      <Navbar />
      <div>
        <h3>{id}</h3>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default PageNo;
