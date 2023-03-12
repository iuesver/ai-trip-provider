import React, { useEffect, useState } from "react";
import country from "../../country.json";
import { componentsStyles } from "@/styles/Component.module";

const SearchBar = () => {
  const [text, setText] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const filterByText = () => {
    const filterdData = country.filter(
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
          {filterByText().map((data) => (
            <componentsStyles.ResultDiv>
              <componentsStyles.ResultDiv>
                <p>{data["name-ko"]}</p>
                <p>{data.name}</p>
              </componentsStyles.ResultDiv>
            </componentsStyles.ResultDiv>
          ))}
        </componentsStyles.ResultsDiv>
      )}
    </componentsStyles.SearchBarDiv>
  );
};

export default SearchBar;
