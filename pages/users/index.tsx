import { useRouter } from "next/router";
import Layout from "../../components/layout";
import styles from "../../styles/Users.module.css";

interface UsersProps {
  dataUsers: Array<any>;
}
export default function Users(props: UsersProps) {
  // export default function User(props: { dataUsers: any }) {
  //fix by export function user (props)only /or
  // fix by export function User({datauser}) , without line 6
  const { dataUsers } = props;
  const router = useRouter();

  console.log(dataUsers);
  return (
    <Layout pageTitle="Users Page">
      {dataUsers.map((user) => {
        return (
          <div
            className={styles.card}
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await response.json();
  return {
    props: {
      dataUsers,
    },
  };
}
