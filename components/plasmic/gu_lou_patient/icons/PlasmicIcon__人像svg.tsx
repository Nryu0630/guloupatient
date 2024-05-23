// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 人像svgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 人像svgIcon(props: 人像svgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      t={"1709706243439"}
      className={classNames("plasmic-default__svg", className, "icon")}
      viewBox={"0 0 1024 1024"}
      version={"1.1"}
      pId={"11166"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M512 1024C229.23 1024 0 794.77 0 512S229.23 0 512 0s512 229.23 512 512-229.23 512-512 512zm0-804.571A146.25 146.25 0 10512 512a146.25 146.25 0 100-292.571zm0 365.714c-97.463 0-292.571 48.823-292.571 146.286v73.142H804.57V731.43c0-97.463-195.108-146.286-292.571-146.286z"
        }
        fill={"currentColor"}
        pId={"11167"}
      ></path>
    </svg>
  );
}

export default 人像svgIcon;
/* prettier-ignore-end */
