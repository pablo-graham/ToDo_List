import Image from "next/image";
import { list } from "postcss";
import Heading from "../app/components/Heading";
import List from "./components/List"

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
        <Heading heading = "todo list" ></Heading>
        <div>
          <List>
          </List>
        </div>
    </main>
  );
}
