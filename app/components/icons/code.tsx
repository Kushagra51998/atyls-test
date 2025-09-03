// components/icons/CodeIcon.tsx
import { SVGProps } from "react";

export default function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width ? props.width : "20px"}
      height={props.height ? props.height : "20px"}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}
