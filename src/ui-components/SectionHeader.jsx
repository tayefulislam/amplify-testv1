/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function SectionHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="274px"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="100px"
      padding="18px 16px 18px 16px"
      {...rest}
      {...getOverrideProps(overrides, "SectionHeader")}
    >
      <Flex
        gap="12px"
        direction="row"
        width="fit-content"
        alignItems="center"
        shrink="0"
        height="20px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Left")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="500"
          color="rgba(73,69,79,1)"
          lineHeight="20px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Section Header"
          {...getOverrideProps(overrides, "Label")}
        ></Text>
      </Flex>
    </Flex>
  );
}
