import { permanentRedirect } from "next/navigation";
import { experienceProductizationPath } from "../site";

export default function LegacyFdeCoursePage() {
  permanentRedirect(experienceProductizationPath);
}
