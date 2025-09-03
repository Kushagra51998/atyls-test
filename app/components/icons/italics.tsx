// components/icons/ItalicIcon.tsx
import { SVGProps } from "react";

export default function ItalicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width ? props.width : "20px"}
      height={props.height ? props.height : "20px"}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <line x1="19" y1="4" x2="10" y2="4" strokeWidth={2} />
      <line x1="14" y1="20" x2="5" y2="20" strokeWidth={2} />
      <line x1="15" y1="4" x2="9" y2="20" strokeWidth={2} />
    </svg>
  );
}
