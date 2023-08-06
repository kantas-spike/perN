import Image from "next/image";
import { OpenInNew } from "../icons";

export default function Link({ href, children, isExternal = false }) {
  return (
    <>
      <a
        target={isExternal ? "_blank" : null}
        className="py-2 text-secondary underline underline-offset-2 focus:border-2 rounded-md focus:border-focused hover:text-tones-S_50 active:text-tones-S_20 visited:text-tones-S_10"
        href={href}
      >
        {children}
      </a>
      {isExternal ? <OpenInNew className="ml-0.5 mb-1 inline h-4 w-4" /> : null}
    </>
  );
}
