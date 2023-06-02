import { useEffect, useMemo, useState } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import { filterData, getFilterValues } from "../utils/filterData";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function SearchFilters({ query }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log(location);
  const navigate = useNavigate();
  const [filters, setFilters] = useState(filterData);

  const filtersParams = {};

  const searchProperties = (filterValues) => {
    // console.log(query, filterValues);
    const param = Object.keys(filterValues)[0];
    // console.log(filterValues[param]);
    query[param] = filterValues[param];
    // console.log(query);

    let temp = [];
    Object.entries(query).forEach(function ([key, value]) {
      temp.push(`${key}=${value}`);
    });
    // console.log(temp);

    navigate(`/search/${temp.join("&")}`);
  };
  return (
    <Flex flexWrap={"wrap"} bg="gray.100" justifyContent={"center"} p="4">
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            width="-moz-min-content"
            onChange={(e) => {
              filtersParams[filter.queryName] = e.target.value;

              searchProperties({
                [filter.queryName]: e.target.value,
              });
            }}
            placeholder={filter.placeholder}
            p="2"
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
}
