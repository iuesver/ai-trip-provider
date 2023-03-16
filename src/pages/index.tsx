import SearchBar from "../components/SearchBar";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { PageStyles } from "../styles/page.module";

export default function Home() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <>
      <Head>
        <title>AI Trip Provider</title>
        <meta
          name="description"
          content="AI will introduce 3 tourist points about the country."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageStyles.Section>
          <SearchBar setResponse={setResponse} />
          <div>{response}</div>
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
