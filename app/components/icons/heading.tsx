// components/icons/HeadingIcon.tsx
import { SVGProps } from "react";

export default function HeadingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width ? props.width : "20px"}
      height={props.height ? props.height : "20px"}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeWidth={2} d="M6 4v16M18 4v16M6 12h12" />
    </svg>
  );
}
