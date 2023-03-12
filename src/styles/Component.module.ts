import tw from "tailwind-styled-components";

export const componentsStyles = {
  SearchBarDiv: tw.div`w-full h-24 flex flex-col items-center`,
  SearchBarInput: tw.input`w-96 border-2 border-black border-solid`,
  ResultsDiv: tw.div`w-96 h-full flex flex-col`,
  ResultDiv: tw.div`w-96 flex justify-between`,
};
