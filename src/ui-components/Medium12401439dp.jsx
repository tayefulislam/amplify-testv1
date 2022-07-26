/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Medium12401439dp(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Medium12401439dp: {} },
      variantValues: { layoutRegions: "Off" },
    },
    {
      overrides: { Medium12401439dp: {} },
      variantValues: { layoutRegions: "On" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="1280px"
      height="720px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Medium12401439dp")}
    ></View>
  );
}
