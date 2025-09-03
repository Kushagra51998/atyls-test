// components/icons/BulletListIcon.tsx
import { SVGProps } from "react";

export default function BulletListIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width ? props.width : "20px"}
      height={props.height ? props.height : "20px"}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="5" cy="7" r="1.5" />
      <circle cx="5" cy="12" r="1.5" />
      <circle cx="5" cy="17" r="1.5" />
      <line
        x1="9"
        y1="7"
        x2="20"
        y2="7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="9"
        y1="12"
        x2="20"
        y2="12"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="9"
        y1="17"
        x2="20"
        y2="17"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
