import { useState } from "react";
import {
  SearchHeader,
  SearchForm,
  ButtonWrapper,
  SearchInput,
} from "./SearchBar.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({onSubmit}) {
  // const [request, setRequest] = useState("");

  // const handleNameChange = (event) => {
  //   setRequest((event.currentTarget.value.toLowerCase()));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (request.trim() === "") {
  //     toast.error("Please enter your query!", {
  //       theme: "colored",
  //     });
  //     return;
  //   }

  //   onSubmit(request);
  //   setRequest("");
  // };
    return (
      // <SearchHeader>
        <SearchForm >
            {/* <SearchLabel>Search</SearchLabel> */}
          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
          />
          <ButtonWrapper>
          <IconButton type="submit" >
              <SearchIcon />
            </IconButton>
            </ButtonWrapper>
        </SearchForm>
      // </SearchHeader>
    );
}