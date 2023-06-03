import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFilter } from "react-icons/bs";
import { useParams } from "react-router-dom";
import SearchFilters from "./SearchFilters";
import noResult from "../../assets/noresult.svg";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import LoadingSpinner from "../LoadingSpinner";
import Property from "../Property";
export default function Search() {
  const [searchFilters, setSearchFilters] = useState(false);
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { query } = useParams();
  let temp = {};
  console.log(query);
  query = query.split("&")?.map((q) => {
    let [key, value] = q.split("=");

    temp = { ...temp, [key]: value };
  });
  console.log(temp);
  query = temp;
  useEffect(() => {
    setIsLoading(true);
    const getProperties = async () => {
      const purpose = query.purpose || "for-rent";
      const rentFrequency = query.rentFrequency || "yearly";
      const minPrice = query.minPrice || "0";
      const maxPrice = query.maxPrice || "1000000";
      const roomsMin = query.roomsMin || "0";
      const bathsMin = query.bathsMin || "0";
      const sort = query.sort || "price-desc";
      const areaMax = query.areaMax || "35000";
      const locationExternalIDs = query.locationExternalIDs || "5002,6020";
      const categoryExternalID = query.categoryExternalID || "4";
      console.log(locationExternalIDs);
      const properties = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
      );

      setProperties(properties?.hits);
      setIsLoading(false);
    };
    getProperties();
  }, [
    query.areaMax,
    query.bathsMin,
    query.categoryExternalID,
    query.locationExternalIDs,
    query.maxPrice,
    query.minPrice,
    query.purpose,
    query.rentFrequency,
    query.roomsMin,
    query.sort,
  ]);
  console.log(properties);
  return (
    <Box>
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters query={temp} />}
      <Text fontSize="3xl" p="4" fontWeight="bold" textAlign={"center"}>
        Properties {query.purpose}
      </Text>
      <Flex flexWrap={"wrap"} m="auto" justifyContent={"center"}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {properties?.map((property) => (
              <Property property={property} key={property.id} />
            ))}
          </>
        )}
      </Flex>
      {properties?.length == 0 && !isLoading && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          marginTop="5"
          marginBottom="5"
        >
          <img src={noResult} />
          <Text fontSize="xl" marginTop="3">
            No Result Found.
          </Text>
        </Flex>
      )}
    </Box>
  );
}
