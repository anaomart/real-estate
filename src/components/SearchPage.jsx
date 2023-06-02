import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Property from "./Property";
import LoadingSpinner from "./LoadingSpinner";
import SearchInput from "./SearchInput";
export default function SearchPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  console.log();
  useEffect(() => {
    const getPro = async () => {
      const options = {
        method: "GET",
        url: "https://bayut.p.rapidapi.com/properties/list",
        params: {
          locationExternalIDs: id,
          purpose: "for-rent",
          hitsPerPage: "25",
          page: "0",
          lang: "en",
          sort: "city-level-score",
          rentFrequency: "monthly",
          categoryExternalID: "4",
        },
        headers: {
          "X-RapidAPI-Key":
            "d0c8393f24msh4542410fae98502p17a34ejsn459d60cf2906",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      setIsLoading(false);
      setProperties(response?.data?.hits);
    };

    getPro();
  }, [id]);
  return (
    <Flex flexWrap={"wrap"} justifyContent={"center"} className=" ml-4 ">
      <div className="flex w-full  justify-center">
        <SearchInput className=" m-auto my-3 rounded-full  border-blue px-20 py-3 text-center outline-dashed" />
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {console.log(properties)}
          {properties?.map((property) => (
            <Property key={property.id} property={property} />
          ))}
        </>
      )}
    </Flex>
  );
}
