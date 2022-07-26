/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Iconsmenu24px(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="24px"
      height="24px"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M0 2L0 0L18 0L18 2L0 2ZM0 7L18 7L18 5L0 5L0 7ZM0 12L18 12L18 10L0 10L0 12Z",
          fill: "rgba(31,31,31,1)",
          fillRule: "evenodd",
          style: { transform: "translate(12.5%, 25%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Iconsmenu24px")}
    ></Icon>
  );
}
