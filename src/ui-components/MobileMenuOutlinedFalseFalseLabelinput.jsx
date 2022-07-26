/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function MobileMenuOutlinedFalseFalseLabelinput(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="245px"
      height="56px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "MobileMenuOutlinedFalseFalseLabelinput")}
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
          <Flex
            gap="10px"
            position="absolute"
            top="-5px"
            left="-4px"
            direction="row"
            alignItems="center"
            padding="0px 4px 0px 4px"
            backgroundColor="rgba(255,251,254,1)"
            {...getOverrideProps(overrides, "Floating Label")}
          >
            <Text
              fontFamily="Roboto"
              fontSize="12px"
              fontWeight="500"
              color="rgba(121,116,126,1)"
              lineHeight="16px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.35px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Label"
              {...getOverrideProps(overrides, "Label")}
            ></Text>
          </Flex>
          <Flex
            gap="1px"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0px"
            direction="row"
            height="56px"
            alignItems="center"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Input75641510")}
          >
            <Text
              fontFamily="Roboto"
              fontSize="16px"
              fontWeight="400"
              color="rgba(28,27,31,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="center"
              letterSpacing="0.35px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Input"
              {...getOverrideProps(overrides, "Input75641511")}
            ></Text>
          </Flex>
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
