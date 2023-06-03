import React from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { Link } from "react-router-dom";
export default function Property({
  property: {
    externalID,
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) {
  return (
    <Link to={`/property/${externalID}`}>
      <Flex
        flexWrap={"wrap"}
        p="5"
        paddingTop={"0"}
        cursor={"pointer"}
        justifyContent={"center"}
        className="w-[350px] md:w-[400px]"
      >
        <Box>
          <img
            src={coverPhoto?.url}
            alt={"house"}
            className="h-[260px]  object-cover md:w-[400px]"
          />
        </Box>
        <Box w="full " marginLeft={"1.5"}>
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems={"center"}>
              <Box paddingRight="3" color="green.400">
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                AED {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={agency?.logo?.url} />
            </Box>
          </Flex>
          <Flex
            alignItems={"center"}
            p="1"
            justifyContent={"space-between"}
            w="250px"
            color="blue.400"
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
            <BsGridFill /> |
          </Flex>
          <Text>
            {title?.length > 30 ? `${title.substring(0, 30)} ... ` : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
}
