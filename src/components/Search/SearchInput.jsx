import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchInput({ className, type, rClassName }) {
  const [result, setResult] = React.useState([]);
  const [location, setLocation] = React.useState("[]");
  const [externalID, setExternalID] = React.useState("");
  const [inputFoucs, setInputFoucs] = React.useState(false);
  function debounce(cb, delay = 5000) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }
  const search = async (term) => {
    const options = {
      method: "GET",
      url: "https://bayut.p.rapidapi.com/auto-complete",
      params: {
        query: term,
        hitsPerPage: "25",
        page: "0",
        lang: "en",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_api_Key,
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    setResult(response?.data.hits);
    setLocation(response?.data?.hits[0]?.hierarchy[0]?.externalID);
    setExternalID(response?.data?.hits[0]?.hierarchy[1]?.externalID);
  };
  const searchHandler = debounce((term) => {
    console.log("dealau");
    search(term);
  }, 500);
  return (
    <div>
      <input
        onBlur={() => {
          setTimeout(() => {
            setInputFoucs(false);
          }, 300);
        }}
        type={type}
        className={className}
        placeholder=" Search ..."
        onChange={(e) => {
          setInputFoucs(true);
          if (e.target.value !== "") searchHandler(e?.target?.value);
          else setInputFoucs(false);
        }}
      />
      {inputFoucs && (
        <div
          className={
            `absolute z-50 my-3 h-48 w-72 overflow-y-scroll  bg-white text-black  md:w-80   ` +
            rClassName
          }
        >
          {result?.map((term) => (
            <Link
              className="my-1 block  border-b-2 p-2  hover:bg-gray-200"
              key={term?.id}
              to={`/search/locationExternalIDs=${location},${externalID}`}
            >
              {term?.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
