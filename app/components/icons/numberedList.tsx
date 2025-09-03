// components/icons/NumberedListIcon.tsx
import { SVGProps } from "react";

export default function NumberedListIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width ? props.width : "20px"}
      height={props.height ? props.height : "20px"}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {/* Numbers */}
      <text x="3" y="8" fontSize="5" fontFamily="monospace">
        1.
      </text>
      <text x="3" y="13" fontSize="5" fontFamily="monospace">
        2.
      </text>
      <text x="3" y="18" fontSize="5" fontFamily="monospace">
        3.
      </text>
      {/* Lines */}
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
