// components/icons/UnderlineIcon.tsx
import { SVGProps } from "react";

export default function UnderlineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width ? props.width : "20px"}
      height={props.height ? props.height : "20px"}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeWidth={2} d="M6 4v6a6 6 0 0012 0V4M4 20h16" />
    </svg>
  );
}
