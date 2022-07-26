/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Icons03outline(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="24px"
      height="24px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Icons03outline")}
    >
      <View
        position="absolute"
        top="25%"
        bottom="25%"
        left="25%"
        right="25%"
        border="2px SOLID rgba(31,31,31,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "icon")}
      ></View>
    </View>
  );
}
