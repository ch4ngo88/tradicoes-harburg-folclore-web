
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
    <path d="M12 3a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
    <path d="m8 16 4-4 4 4" />
    <path d="M12 17v4" />
    <circle cx="17" cy="7" r="2" />
    <circle cx="7" cy="7" r="2" />
  </svg>
);

export default CustomDancingIcon;
