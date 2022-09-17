import React from "react";
import Gallery from "./components/Gallery";
import Layout from "./components/Layout";

const placeholderElements = Array.from({ length: 15 }).map((_, i) => {
  return {
    key: "" + i,
    value: <div />,
  };
});

function App() {
  return (
    <Layout>
      <Gallery elements={placeholderElements} />
    </Layout>
  );
}

export default App;
