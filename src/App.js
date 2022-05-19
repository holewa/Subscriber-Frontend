import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Bortskankes from "./routes/Bortskankes";
import Bibliotek from "./routes/Bibliotek";
import Spinner from "./components/Spinner";
import Alert from "./components/Alert";
import Prenumerationer from "./routes/Prenumerationer";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [responseTypeOfAlert, setResponseTypeOfAlert] = useState("");
  const [responseList, setResponseList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [methodNr, setMethodNr] = useState(1);
  const [state, setState] = useState({
    email: "",
    searchWord: "",
  });

  //TODO: bätter metodnamn!
  const fetch = async (event) => {
    if (methodNr === 1) {
      startAsubscription(event);
    }
    if (methodNr === 2) {
      fetchSubscribesFromDb(event);
    }
  };

  const startAsubscription = async (event) => {
    event.preventDefault();
    event.target.reset();
    setResponseTypeOfAlert("");
    setIsLoading(true);

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    await axios
      .post("/startASubscription", {
        method: "post",
        searchWord: state.searchWord,
        email: state.email,
        headers,
      })
      .then(function (response) {
        setResponseList(response.data.earlierSearches);
        setResponseText(response.data.text);
        setResponseTypeOfAlert(response.data.typeOfAlert);
      })
      .then(() => setIsLoading(false), setShowAlert(true))
      .catch(function (error) {
        console.log(error);
      });
  };

  const fetchSubscribesFromDb = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResponseText("");

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    await axios
      .post("/getUsersSubscribes", {
        method: "POST",
        email: state.email,
        headers,
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.earlierSearches.length > 0) {
          setResponseTypeOfAlert("");
          setResponseList(response.data.earlierSearches);
          setIsLoading(false);
        } else {
          setResponseList("");
          setResponseText(response.data.text);
          setResponseTypeOfAlert(response.data.typeOfAlert);
        }
      })
      .then(() => setIsLoading(false), setShowAlert(true))
      .catch(function (error) {
        console.log(error);
      });
  };

  const removeSearchFromUser = async (searchWord) => {
    setIsLoading(true);

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    await axios
      .post("/removeSearchFromUser", {
        method: "post",
        searchWord: searchWord,
        email: state.email,
        headers,
      })
      .then(function (response) {
        setResponseList(response.data.earlierSearches);
        setResponseText(response.data.text);
        setResponseTypeOfAlert(response.data.typeOfAlert);
      })
      .then(() => setIsLoading(false), setShowAlert(true))
      .catch(function (error) {
        console.log(error);
      });
  };

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/bortskankes/prenumerationer'
              element={<Prenumerationer />}
            />
            <Route
              path='bortskankes'
              element={
                <Bortskankes
                  state={state}
                  handleChange={handleChange}
                  fetch={fetch}
                  setMethodNr={setMethodNr}
                  responseList={responseList}
                  removeItem={removeSearchFromUser}
                />
              }
            />
            <Route path='bibliotek' element={<Bibliotek />} />
          </Routes>
          <Alert
            typeOfAlert={responseTypeOfAlert}
            show={showAlert}
            toggleShow={setShowAlert}
          >
            {responseText}
          </Alert>
          <Spinner isLoading={isLoading} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
