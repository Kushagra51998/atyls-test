// components/icons/HeadingIcon.tsx
import { SVGProps } from "react";

export default function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ? props.width : "20px"}
      height={props.height ? props.height : "20px"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 12H18M12 6V18"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
