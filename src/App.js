import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import Container from "./components/Container/Container";
import { HeaderContainer, Header } from './components/Header/Header.styled';
import Title from './components/Header/Header';
import { ToastContainer, toast } from "react-toastify";
import DataTable from "./components/DataTable/DataTable"
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from 'react';
import { fetchCountries } from "./services/api";


function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  
  const getCountriesData = () => {
    fetchCountries().then((data) => setData(data.Countries));
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  const rows = data.map((row, index) => ({
    id: index + 1,
    country: row.Country,
    totalConfirmed: row.TotalConfirmed,
    totalDeath: row.TotalDeaths,
    totalRecovered: row.TotalRecovered,
  }));

  const countrySearch = (e) => {
    setFilter(e.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredCountries = rows.filter((row) =>
    row.country.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <HeaderContainer>
      <Title/>
    <SearchBar value={filter} onChange={countrySearch}/>
    </HeaderContainer>
    <DataTable rows={filteredCountries}/>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}

export default App;
