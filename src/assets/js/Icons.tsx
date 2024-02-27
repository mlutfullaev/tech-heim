import React from "react";

type Props = React.SVGProps<SVGSVGElement>

export const AllServicesI = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={26}
    height={13}
    {...props}
  >
    <symbol id="a">
      <path d="M0 0h3v3H0zm5 0h3v3H5zm5 0h3v3h-3zM0 5h3v3H0zm5 0h3v3H5zm5 0h3v3h-3zM0 10h3v3H0zm5 0h3v3H5zm5 0h3v3h-3z" />
    </symbol>
    <use xlinkHref="#a" fill="#609fcf" fillRule="evenodd" />
  </svg>
)
