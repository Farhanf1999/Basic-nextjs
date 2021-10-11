import Layout from "../components/layout";
import styles from "../styles/Blog.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}
interface BlogProps {
  dataBlog: Post[];
}

export default function blog(props: BlogProps) {
  const { dataBlog } = props;
  return (
    <Layout pageTitle="Blog Page">
      {dataBlog.map((blog) => {
        return (
          <div className={styles.card} key={blog.id}>
            <p>{blog.title}</p>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </Layout>
  );
}

// data dinamis
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog: dataBlog,
    },
  };
}
