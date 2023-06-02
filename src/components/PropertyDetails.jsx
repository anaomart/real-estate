import React, { useEffect, useState } from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import { useParams } from "react-router-dom";
import ImageScrollbar from "./ImageScrollBar";
import nProgress from "nprogress";
import LoadingSpinner from "./LoadingSpinner";
import { Button } from "@chakra-ui/react";
import ContactUsForm from "./ContactUsForm";
export default function PropertyDetails() {
  const [propertyDetails, setPropertyDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [model, setModel] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const getPropertyDetails = async () => {
      const data = await fetchApi(
        `${baseUrl}/properties/detail?externalID=${id}`
      );
      console.log("Hello");
      console.log(data);
      setPropertyDetails(data);
      setIsLoading(false);
    };
    getPropertyDetails();
  }, [id]);
  console.log(propertyDetails);
  return (
    <>
      {isLoading ? (
        <div className="m-auto w-screen text-center">
          <LoadingSpinner />
        </div>
      ) : (
        <Box maxWidth="1200px" margin="auto" p="4">
          <div className=" my-4 flex w-full justify-center md:justify-end">
            <Button
              onClick={() => {
                setModel(!model);
              }}
              bg="blue.500"
              color="white"
              _hover={{ bg: "green.200" }}
            >
              Book a Meeting
            </Button>
          </div>
          {propertyDetails?.photos && (
            <div className="m-auto   w-[100%] md:w-[100%]">
              <div>
                <ImageScrollbar data={propertyDetails?.photos} />
              </div>
            </div>
          )}

          <Box w="full" p="6">
            <Flex paddingTop="2" alignItems="center">
              <Box paddingRight="3" color="green.400">
                {propertyDetails.isVerified && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                AED {propertyDetails?.price}{" "}
                {propertyDetails?.rentFrequency &&
                  `/${propertyDetails?.rentFrequency}`}
              </Text>
              <Spacer />
              <Avatar
                size="sm"
                src={propertyDetails?.agency?.logo?.url}
              ></Avatar>
            </Flex>
            <Flex
              alignItems="center"
              p="1"
              justifyContent="space-between"
              w="250px"
              color="blue.400"
            >
              {propertyDetails?.rooms}
              <FaBed /> | {propertyDetails?.baths} <FaBath /> |{" "}
              {millify(propertyDetails?.area)} sqft <BsGridFill />
            </Flex>
          </Box>
          <Box marginTop="2">
            <Text fontSize="lg" marginBottom="2" fontWeight="bold">
              {propertyDetails?.title}
            </Text>
            <Text lineHeight="2" color="gray.600">
              {propertyDetails?.description}
            </Text>
          </Box>
          <Flex
            flexWrap="wrap"
            textTransform="uppercase"
            justifyContent="space-between"
          >
            <Flex
              justifyContent="space-between"
              w="400px"
              borderBottom="1px"
              borderColor="gray.100"
              p="3"
            >
              <Text>Type</Text>
              <Text fontWeight="bold">{propertyDetails?.type}</Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              w="400px"
              borderBottom="1px"
              borderColor="gray.100"
              p="3"
            >
              <Text>Purpose</Text>
              <Text fontWeight="bold">{propertyDetails?.purpose}</Text>
            </Flex>
            {propertyDetails?.furnishingStatus && (
              <Flex
                justifyContent="space-between"
                w="400px"
                borderBottom="1px"
                borderColor="gray.100"
                p="3"
              >
                <Text>Furnishing Status</Text>
                <Text fontWeight="bold">
                  {propertyDetails?.furnishingStatus}
                </Text>
              </Flex>
            )}
          </Flex>
          <Box>
            {propertyDetails?.amenities?.length && (
              <Text fontSize="2xl" fontWeight="black" marginTop="5">
                Facilites:
              </Text>
            )}
            <Flex flexWrap="wrap">
              {propertyDetails?.amenities?.map((item) =>
                item?.amenities?.map((amenity) => (
                  <Text
                    key={amenity?.text}
                    fontWeight="bold"
                    color="blue.400"
                    fontSize="l"
                    p="2"
                    bg="gray.200"
                    m="1"
                    borderRadius="5"
                  >
                    {amenity.text}
                  </Text>
                ))
              )}
            </Flex>
          </Box>
        </Box>
      )}
      {model && <ContactUsForm open={true} />}
    </>
  );
}
