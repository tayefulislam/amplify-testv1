/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Iconscheckbox24px(props) {
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
          d: "M16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0Z",
          fill: "rgba(218,218,218,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M12 1.4L10.6 0L4 6.6L1.4 4L0 5.4L4 9.4L12 1.4Z",
          fill: "rgba(218,218,218,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 19.17%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Iconscheckbox24px")}
    ></Icon>
  );
}
