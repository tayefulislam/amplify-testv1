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
export default function Large1440dp(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Large1440dp: {} }, variantValues: { layoutRegions: "Off" } },
    { overrides: { Large1440dp: {} }, variantValues: { layoutRegions: "On" } },
    {
      overrides: { Large1440dp: { width: "1648px" } },
      variantValues: { layoutRegions: "Expanded" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="1440px"
      height="900px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Large1440dp")}
    ></View>
  );
}
