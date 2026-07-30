import { redirect } from "next/navigation";
import { flagshipPath } from "./site";

export default function Home() {
  redirect(flagshipPath);
}
