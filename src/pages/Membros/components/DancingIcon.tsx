
import React from "react";

const CustomDancingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="5" r="2" />
    <path d="m15 22-3-9-3 9" />
    <path d="M15 8v2l-3 1-3-1V8Z" />
    <path d="m9 22 1-14" />
    <path d="m15 22-1-14" />
    <path d="M12 8v14" />
    <path d="m7 6 1 2c.7 1.3 2.3 1.3 3 0 .7-1.3 2.3-1.3 3 0l1-2" />
  </svg>
);

export default CustomDancingIcon;
