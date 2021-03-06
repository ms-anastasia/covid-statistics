import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Modal from "../Modal/Modal";
import {
  CountryName,
  TextWrapper,
  CountryDescription,
  TextDescription,
  CountryDescriptionContainer,
} from "../Modal/Modal.styled";
import { ReactComponent as HeartLogo } from "../../images/heart.svg";
import { ReactComponent as SkelletLogo } from "../../images/skelet.svg";
import { ReactComponent as DocLogo } from "../../images/document.svg";

const columns = [
  { field: "id", headerName: "№", width: 78 },
  { field: "country", headerName: "Country", width: 800 },
  { field: "totalConfirmed", headerName: "Total Confirmed", width: 445 },
];

const DataTable = ({ rows }) => {
  const [finalClickInfo, setFinalClickInfo] = useState(null);
  const [showModal, setShowModal] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onCountryClick = (params) => {
    toggleModal();
    setFinalClickInfo(params);
  };
  return (
    <div style={{ height: 735, width: 1323 }}>
      <DataGrid
        sx={{
          border: "none",
          "& .MuiDataGrid-row": {
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "20px",
            border: "none",
            marginBottom: "20px"
          },
          "& .MuiDataGrid-row:first-of-type": {
            marginTop: "20px"
          },
          ".MuiDataGrid-iconSeparator": {
            color: "white",
          },
          ".MuiDataGrid-cell": {
            border: "transparent",
            borderLeft: "1px solid #B2B2B2"
          },
          ".MuiDataGrid-cell:first-child": {
            borderLeft: "none"
          },
          ".MuiDataGrid-columnSeparator:last-of-type": {
            display: "none"
          },
          ".MuiDataGrid-columnHeader": {
            backgroundColor: "#2196F3",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            color: "white",
            borderLeft: "1px solid white"
          },
          "& .MuiDataGrid-columnHeader:last-child": {
            borderRadius: "0px 20px 20px 0px",
          },
          "& .MuiDataGrid-columnHeader:first-child": {
            borderRadius: "20px 0px 0px 20px",
            borderLeft: "none"
          },
        }}
        // className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        onRowClick={onCountryClick}
      />
      {showModal && (
        <Modal onClose={toggleModal}>
          <CountryName>{finalClickInfo.row.country}</CountryName>
          <CountryDescriptionContainer>
            <CountryDescription>
              <TextWrapper>
                <HeartLogo />
                <TextDescription>Total Confirmed</TextDescription>
              </TextWrapper>
              <TextDescription>
                {finalClickInfo.row.totalConfirmed}
              </TextDescription>
            </CountryDescription>
            <CountryDescription>
              <TextWrapper>
                <SkelletLogo />
                <TextDescription>Total Deaths</TextDescription>
              </TextWrapper>
              <span>{finalClickInfo.row.totalDeath}</span>
            </CountryDescription>
            <CountryDescription>
              <TextWrapper>
                <DocLogo />
                <TextDescription>Total Recovered</TextDescription>
              </TextWrapper>
              <span>{finalClickInfo.row.totalRecovered}</span>
            </CountryDescription>
          </CountryDescriptionContainer>
        </Modal>
      )}
    </div>
  );
};
export default DataTable;
