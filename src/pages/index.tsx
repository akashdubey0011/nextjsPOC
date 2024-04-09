import Link from "next/link";
import Nav from "./Nav";

export default function Home() {
  return (
    <main
    >
      <Nav />
      <p className="pageContent">This is Home page</p> 
    </main>
  );
}
