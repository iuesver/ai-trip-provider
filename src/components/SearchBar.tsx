import axios from "axios";
import React, { useState } from "react";
import countryData from "../../country.json";
import { componentsStyles } from "../styles/component.module";

const SearchBar = ({
  setResponse,
}: {
  setResponse: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [text, setText] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    name: string
  ) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/api", { prompt: name });
      setResponse(data.response);
    } catch (error) {
      console.error(error);
    }
  };

  const filterByText = () => {
    const filterdData = countryData.filter(
      (item) => item["name-ko"].includes(text) || item.name.includes(text)
    );
    return filterdData;
  };

  return (
    <componentsStyles.SearchBarDiv>
      <componentsStyles.SearchBarInput
        type="text"
        value={text}
        onChange={onChange}
      />
      {text !== "" && (
        <componentsStyles.ResultsDiv>
          {filterByText().map((data, index) => (
            <form
              action="post"
              onClick={(event) => handleSubmit(event, data["name-ko"])}
              key={index}
            >
              <componentsStyles.ResultDiv>
                <p>{data["name-ko"]}</p>
                <p>{data.name}</p>
              </componentsStyles.ResultDiv>
            </form>
          ))}
        </componentsStyles.ResultsDiv>
      )}
    </componentsStyles.SearchBarDiv>
  );
};

export default SearchBar;
