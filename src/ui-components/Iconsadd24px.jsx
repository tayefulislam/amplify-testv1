/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Iconsadd24px(props) {
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
          d: "M16 9L9 9L9 16L7 16L7 9L0 9L0 7L7 7L7 0L9 0L9 7L16 7L16 9Z",
          fill: "rgba(31,31,31,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 16.67%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Iconsadd24px")}
    ></Icon>
  );
}
