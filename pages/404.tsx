import { useEffect } from "react";
import { Router, useRouter } from "next/dist/client/router";

export default function NotFound() {
  const Router = useRouter();
  // lifecycle react
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
      console.log("Next page in 2 seconds ..");
    }, 2000);
  });

  return (
    <div>
      <h1 className="title-notfound">Oopssss..</h1>
      <h1 className="title-notfound">The page you've search isn't found</h1>
    </div>
  );
}
