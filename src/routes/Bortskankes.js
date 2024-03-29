import React from "react";
import Form from "../components/Form";
import Card from "../components/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const Bortskankes = ({
  state,
  handleChange,
  fetch,
  setMethodNr,
  responseList,
  removeItem,
  isLoading
}) => {
  return (
    <>
      <Form
        state={state}
        handleChange={handleChange}
        fetch={fetch}
        setMethodNr={setMethodNr}
        isLoading={isLoading}
      />
      <Card removeItem={removeItem}>{responseList}</Card>
    </>
  );
};

export default Bortskankes;
