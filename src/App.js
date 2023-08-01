import "./App.css";

import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";

import MainWrapper from "./Components/MainWrapper/MainWrapper";
import Header from "./Components/Header/Header";

const API = "https://jsonplaceholder.typicode.com/todos";
const ELEMENTS_PER_PAGE = 6;

function App() {
  const [data, setData] = useState([]);
  const [backup, setBackup] = useState([]);
  const [page, setPage] = useState(0);
  const paginationInfo = {
    from: page * ELEMENTS_PER_PAGE,
    to: page * ELEMENTS_PER_PAGE + ELEMENTS_PER_PAGE,
  };
  const ultimaPagina = Math.round(data.length / 6);
  console.log(ultimaPagina);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setBackup(response);
      });
  }, []);

  const StampaPaginazione = ({ page }) => {
    console.log("page ", page);
    switch (page) {
      case 0:
        return (
          <>
            <li onClick={() => setPage(page + 1)}>{page + 2}</li>
            <li onClick={() => setPage(page + 2)}>{page + 3}</li>
            <li>...</li>
          </>
        );
      case 1:
        return (
          <>
            <li onClick={() => setPage(page)}>{page + 1}</li>
            <li onClick={() => setPage(page + 1)}>{page + 2}</li>
            <li>...</li>
          </>
        );

      case 2:
        return (
          <>
            <li onClick={() => setPage(page - 1)}>{page}</li>
            <li onClick={() => setPage(page)}>{page + 1}</li>
            <li onClick={() => setPage(page + 1)}>{page + 2}</li>
            <li>...</li>
          </>
        );

      case 31:
        return (
          <>
            <li>...</li>
            <li onClick={() => setPage(page)}>{page}</li>
            <li onClick={() => setPage(page + 1)}>{page + 1}</li>
          </>
        );
      case 32:
        return (
          <>
            <li>...</li>
            <li onClick={() => setPage(page - 1)}>{page - 1}</li>
            <li onClick={() => setPage(page)}>{page}</li>
          </>
        );
      case 33:
        return (
          <>
            <li>...</li>
            <li onClick={() => setPage(page - 2)}>{page - 2}</li>
            <li onClick={() => setPage(page - 1)}>{page - 1}</li>
          </>
        );
      default:
        return (
          <>
            <li>...</li>
            <li onClick={() => setPage(page - 1)}>{page}</li>
            <li onClick={() => setPage(page)}>{page + 1}</li>
            <li onClick={() => setPage(page + 1)}>{page + 2}</li>
            <li>...</li>
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header />
      <MainWrapper />
      <Footer />
    </div>
  );
}

export default App;
