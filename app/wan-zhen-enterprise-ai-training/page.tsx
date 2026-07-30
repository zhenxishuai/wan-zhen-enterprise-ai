import { permanentRedirect } from "next/navigation";
import { flagshipPath } from "../site";

export default function LegacyFlagshipPage() {
  permanentRedirect(flagshipPath);
}
