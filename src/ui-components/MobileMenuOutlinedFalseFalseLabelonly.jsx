/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function MobileMenuOutlinedFalseFalseLabelonly(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="245px"
      height="56px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "MobileMenuOutlinedFalseFalseLabelonly")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(121,116,126,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Field")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="16px"
          right="19px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="16px"
            fontWeight="400"
            color="rgba(121,116,126,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="0.35px"
            height="56px"
            position="absolute"
            top="calc(50% - 28px - 0px)"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Label"
            {...getOverrideProps(overrides, "Label")}
          ></Text>
        </View>
      </View>
      <View
        width="24px"
        height="24px"
        position="absolute"
        top="calc(50% - 12px - 0px)"
        right="12px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Arrow ")}
      ></View>
    </View>
  );
}
