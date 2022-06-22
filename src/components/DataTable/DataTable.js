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
import { ReactComponent as HeartLogo } from "../../images/heart.svg";
import { ReactComponent as SkelletLogo } from "../../images/skelet.svg";
import { ReactComponent as DocLogo } from "../../images/document.svg";
import { GridRowParams } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "№", width: 78 },
  { field: "country", headerName: "Country", width: 800 },
  { field: "totalConfirmed", headerName: "Total Confirmed", width: 300 },
];

const DataTable = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState("");
  const [finalClickInfo, setFinalClickInfo] = useState(null);

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
  console.log(rows);
  return (
    <div style={{ height: 735, width: "100%" }}>
      <DataGrid
        // className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[12]}
        onRowClick={onCountryClick}
      />
      {finalClickInfo &&
        `Final clicked id = ${finalClickInfo.id},  
        Final clicked country = ${finalClickInfo.row.country},
        Final total confirmed = ${finalClickInfo.row.totalConfirmed},
        Final total dead = ${finalClickInfo.row.totalDeath},
        Final total recovered = ${finalClickInfo.row.totalRecovered},
        `}
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
    </div>
  );
};
export default DataTable;
