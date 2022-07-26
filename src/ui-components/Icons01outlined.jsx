/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Icons01outlined(props) {
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
          d: "M6 14C10.4183 14 14 10.4183 14 6L10 6C10 8.20914 8.20914 10 6 10L6 14ZM14 6C14 1.58172 10.4183 -2 6 -2L6 2C8.20914 2 10 3.79086 10 6L14 6ZM6 -2C1.58172 -2 -2 1.58172 -2 6L2 6C2 3.79086 3.79086 2 6 2L6 -2ZM-2 6C-2 10.4183 1.58172 14 6 14L6 10C3.79086 10 2 8.20914 2 6L-2 6Z",
          stroke: "rgba(31,31,31,1)",
          fillRule: "nonzero",
          strokeWidth: 2,
          style: { transform: "translate(25%, 25%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Icons01outlined")}
    ></Icon>
  );
}
