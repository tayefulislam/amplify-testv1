/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Iconsmailoutline(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="24px"
      height="24px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M18 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM18 14L2 14L2 4L10 9L18 4L18 14ZM10 7L2 2L18 2L10 7Z",
          fill: "rgba(31,31,31,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 16.67%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Iconsmailoutline")}
    ></Icon>
  );
}
