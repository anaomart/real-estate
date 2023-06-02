import React, { useEffect, useState } from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "./Property";
import ClipLoader from "react-spinners/ClipLoader";
import LoadingSpinner from "./LoadingSpinner";
import SearchInput from "./SearchInput";

const Banner = ({
  purpose,
  title1,
  title2,
  imageUrl,
  linkName,
  desc1,
  buttonText,
  desc2,
}) => (
  <Flex
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
    padding="10"
  >
    <img src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br /> {title2}
      </Text>
      <Text
        fontSize="lg"
        paddingTop="3"
        paddingBottom="3"
        color="gray.700"
        fontWeight="medium"
      >
        {desc1}
        <br /> {desc2}
      </Text>
      <Button fontSize="xl" color="black">
        <Link to={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Properties() {
  const [isLoading, setIsLoading] = useState(true);
  const [propertiesForRent, setPropertiesForRent] = useState([]);
  const [propertiesForSale, setPropertiesForSale] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      setIsLoading(true);
      const propertyForSale = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
      );

      const propertyForRent = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
      );

      setPropertiesForSale(propertyForSale?.hits);
      setPropertiesForRent(propertyForRent?.hits);
      setIsLoading(false);
    };
    getProperties();
  }, []);
  console.log(propertiesForSale);
  console.log(propertiesForRent);
  return (
    <Box className="">
      <div className="flex w-full  justify-center">
        <SearchInput className="  m-auto my-2 rounded-full border-blue  px-20 py-3 text-center outline-dashed" />
      </div>

      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search/purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap={"wrap"} justifyContent={"center"} className=" ml-4 ">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {propertiesForRent?.map((property) => (
              <Property key={property.id} property={property} />
            ))}
          </>
        )}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy & Own Home"
        title2="Dream Home"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Sales"
        linkName="/search/purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap={"wrap"} className="" justifyContent={"center"}>
        {propertiesForSale ? (
          propertiesForSale?.map((property) => (
            <Property key={property.id} property={property} />
          ))
        ) : (
          <LoadingSpinner />
        )}
      </Flex>
    </Box>
  );
}
