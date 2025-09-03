// components/icons/BoldIcon.tsx
import { SVGProps } from "react";

export default function BoldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width ? props.width : "20px"}
      height={props.height ? props.height : "20px"}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 4h8a4 4 0 010 8H6zM6 12h9a4 4 0 010 8H6z"
      />
    </svg>
  );
}
