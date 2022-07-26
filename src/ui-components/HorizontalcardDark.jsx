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
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function HorizontalcardDark(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        background: {},
        Initial: {},
        monogram: {},
        header: {},
        subhead: {},
        text: {},
        content: {},
        media: {},
        HorizontalcardDark: {},
      },
      variantValues: { style: "outlined" },
    },
    {
      overrides: {
        background: {},
        Initial: {},
        monogram: {},
        header: {},
        subhead: {},
        text: {},
        content: {},
        media: {},
        HorizontalcardDark: {
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15000000596046448)",
        },
      },
      variantValues: { style: "elevated" },
    },
    {
      overrides: {
        background: {},
        Initial: {},
        monogram: {},
        header: {},
        subhead: {},
        text: {},
        content: {},
        media: {},
        HorizontalcardDark: {
          backgroundColor: "rgba(73,69,79,1)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
      },
      variantValues: { style: "filled" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="352px"
      height="80px"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(147,143,153,1)"
      borderRadius="12px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(28,27,31,1)"
      {...rest}
      {...getOverrideProps(overrides, "HorizontalcardDark")}
    >
      <Flex
        gap="16px"
        position="absolute"
        top="16px"
        left="16px"
        direction="row"
        width="240px"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "content")}
      >
        <View
          width="40px"
          height="40px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "monogram")}
        >
          <Icon
            width="40px"
            height="40px"
            viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
            paths={[
              {
                d: "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z",
                fill: "rgba(40,111,107,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "background")}
          ></Icon>
          <Text
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="500"
            color="rgba(28,27,31,1)"
            lineHeight="20px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="0px"
            width="40px"
            height="40px"
            position="absolute"
            top="calc(50% - 20px - 0px)"
            left="calc(50% - 20px - 0px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="A"
            {...getOverrideProps(overrides, "Initial")}
          ></Text>
        </View>
        <Flex
          gap="4px"
          direction="column"
          width="184px"
          grow="1"
          basis="184px"
          height="48px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "text")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="16px"
            fontWeight="500"
            color="rgba(230,225,229,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Header"
            {...getOverrideProps(overrides, "header")}
          ></Text>
          <Text
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="400"
            color="rgba(230,225,229,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.1px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Subhead"
            {...getOverrideProps(overrides, "subhead")}
          ></Text>
        </Flex>
      </Flex>
      <View
        position="absolute"
        top="0px"
        bottom="0px"
        height="calc(100% - 0px)"
        left="272px"
        right="0px"
        width="calc(100% - 272px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "media")}
      ></View>
    </View>
  );
}
