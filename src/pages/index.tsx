import SearchBar from "@/components/searchBar";
import axios from "axios";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import countryData from "../../country.json";
import { PageStyles } from "@/styles/Page.module";

export default function Home() {
  const [country, setCountry] = useState<any>([]);
  const [prompt, setPrompt] = useState<any>();
  const [response, setResponse] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/api", { prompt: prompt });
      setResponse(data.response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setCountry(countryData);
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Summarize all news in 3 lines for you."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageStyles.Section>
          <SearchBar />
          <div>hi</div>
        </PageStyles.Section>
      </main>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await axios.get("../../public/country.json");
//   const data = response.data;
//   return { props: { data } };
// };

// const getServerSideProps: GetServerSideProps = async () => {
//   const API_URL = process.env.PUBLIC_DATA_API_URL;
//   const API_KEY = process.env.PUBLIC_DATA_API_KEY;
//   const response = await axios.get(
//     `${API_URL}?serviceKey=${API_KEY}&numOfRows=${195}&pageNo=${1}`
//   );
//   const data = response.data;
//   return { props: { data } };
// };
