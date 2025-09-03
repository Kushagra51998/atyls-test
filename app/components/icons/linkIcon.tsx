// components/icons/LinkIcon.tsx
import { SVGProps } from "react";

export default function LinkIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M10 13a5 5 0 007.54.54l2-2a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-2 2a5 5 0 007.07 7.07l1.72-1.71"
      />
    </svg>
  );
}
