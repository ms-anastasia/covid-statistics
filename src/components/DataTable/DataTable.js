import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { fetchCountries } from "../../services/api";
import Modal from "../Modal/Modal";
import {
  ModalButton,
  CountryName,
  TextWrapper,
  CountryDescription,
  TextDescription,
  CountryDescriptionContainer
} from "../Modal/Modal.styled";
import {
    SearchForm,
    ButtonWrapper,
    SearchInput,
  } from "../SearchBar/SearchBar.styled";
import { ReactComponent as HeartLogo } from "../../images/heart.svg";
import { ReactComponent as SkelletLogo } from "../../images/skelet.svg";
import { ReactComponent as DocLogo } from "../../images/document.svg";
import { GridRowParams } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';

const columns = [
  { field: "id", headerName: "№", width: 78 },
  { field: "country", headerName: "Country", width: 800 },
  { field: "totalConfirmed", headerName: "Total Confirmed", width: 300 },
];

const DataTable = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState("");
  const [finalClickInfo, setFinalClickInfo] = useState(null);
  const [filter, setFilter] = useState("");


  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onCountryClick = (params) => {
    toggleModal();
    setFinalClickInfo(params);
  };

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
  // console.log(rows);
  const contactSearch = (e) => {
    setFilter(e.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = rows.filter((row) =>
    row.country.toLowerCase().includes(normalizedFilter)
  );
  return (
    <div style={{ height: 735, width: "100%" }}>
      <DataGrid
        // className={classes.root}
        rows={filteredContacts}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[12]}
        onRowClick={onCountryClick}
      />
      {showModal && (
        <Modal onClose={toggleModal}>
          <CountryName>{finalClickInfo.row.country}</CountryName>
          <CountryDescriptionContainer>
            <CountryDescription>
              <HeartLogo />
              <TextWrapper>
                <TextDescription>Total Confirmed</TextDescription>
                <TextDescription>{finalClickInfo.row.totalConfirmed}</TextDescription>
              </TextWrapper>
            </CountryDescription>
            <CountryDescription>
              <SkelletLogo />
              <TextWrapper>
                <span>Total Deaths</span>
                <span>{finalClickInfo.row.totalDeath}</span>
              </TextWrapper>
            </CountryDescription>
            <CountryDescription>
              <DocLogo />
              <TextWrapper>
                <span>Total Recovered</span>
                <span>{finalClickInfo.row.totalRecovered}</span>
              </TextWrapper>
            </CountryDescription>
          </CountryDescriptionContainer>
          
        </Modal>
      )}
      <SearchForm >
          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
            value={filter} onChange={contactSearch}
          />
          <ButtonWrapper>
          <IconButton type="button" >
              <SearchIcon />
            </IconButton>
            </ButtonWrapper>
        </SearchForm>
    </div>
  );
};
export default DataTable;
