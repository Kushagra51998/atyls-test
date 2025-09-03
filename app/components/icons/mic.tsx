import { SVGProps } from "react";

export default function MicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ? props.width : "20px"}
      height={props.height ? props.height : "20px"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="9"
        y="3"
        stroke-width="2"
        width="6"
        height="11"
        rx="3"
        stroke="#222222"
        stroke-linejoin="round"
      />
      <path
        d="M5.5 11C5.5 12.7239 6.18482 14.3772 7.40381 15.5962C8.62279 16.8152 10.2761 17.5 12 17.5C13.7239 17.5 15.3772 16.8152 16.5962 15.5962C17.8152 14.3772 18.5 12.7239 18.5 11"
        stroke="#222222"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 21V19"
        stroke-width="2"
        stroke="#222222"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
