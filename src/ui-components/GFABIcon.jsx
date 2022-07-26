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
import { Icon, View } from "@aws-amplify/ui-react";
export default function GFABIcon(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Fill 4": {},
        "Fill 3": {},
        "Fill 2": {},
        "Fill 1": {},
        icon: {},
        GFABIcon: {},
      },
      variantValues: { size: "regular" },
    },
    {
      overrides: {
        "Fill 4": {},
        "Fill 3": {
          width: "21px",
          height: "6.00146484375px",
          viewBox: { minX: 0, minY: 0, width: 21, height: 6.00146484375 },
          paths: [
            {
              d: "M6 0L0 6.0015L6.0945 6.0015L21 6.0015L21 0L6 0Z",
              fill: "rgba(66,133,244,1)",
              fillRule: "evenodd",
            },
          ],
        },
        "Fill 2": {
          width: "6.001953125px",
          height: "21px",
          viewBox: { minX: 0, minY: 0, width: 6.001953125, height: 21 },
          paths: [
            {
              d: "M0 0L0 21L6.0015 15L6.0015 0L0 0Z",
              fill: "rgba(234,67,53,1)",
              fillRule: "evenodd",
            },
          ],
        },
        "Fill 1": {},
        icon: { top: "12.5%", bottom: "12.5%", left: "12.5%", right: "12.5%" },
        GFABIcon: { width: "48px", height: "48px" },
      },
      variantValues: { size: "large" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="36px"
      height="36px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "GFABIcon")}
    >
      <View
        position="absolute"
        top="16.67%"
        bottom="16.67%"
        left="16.67%"
        right="16.67%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "icon")}
      >
        <View
          position="absolute"
          top="58.33%"
          bottom="0%"
          left="41.67%"
          right="41.67%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(52,168,83,1)"
          {...getOverrideProps(overrides, "Fill 4")}
        ></View>
        <Icon
          width="14px"
          height="4.0009765625px"
          viewBox={{ minX: 0, minY: 0, width: 14, height: 4.0009765625 }}
          paths={[
            {
              d: "M4 0L0 4.001L4.063 4.001L14 4.001L14 0L4 0Z",
              fill: "rgba(66,133,244,1)",
              fillRule: "evenodd",
            },
          ]}
          position="absolute"
          top="41.67%"
          bottom="41.66%"
          left="41.67%"
          right="0%"
          {...getOverrideProps(overrides, "Fill 3")}
        ></Icon>
        <Icon
          width="4.001953125px"
          height="14px"
          viewBox={{ minX: 0, minY: 0, width: 4.001953125, height: 14 }}
          paths={[
            {
              d: "M0 0L0 14L4.001 10L4.001 0L0 0Z",
              fill: "rgba(234,67,53,1)",
              fillRule: "evenodd",
            },
          ]}
          position="absolute"
          top="0%"
          bottom="41.67%"
          left="41.67%"
          right="41.66%"
          {...getOverrideProps(overrides, "Fill 2")}
        ></Icon>
        <View
          position="absolute"
          top="41.67%"
          bottom="41.67%"
          left="0%"
          right="58.33%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(251,188,4,1)"
          {...getOverrideProps(overrides, "Fill 1")}
        ></View>
      </View>
    </View>
  );
}
