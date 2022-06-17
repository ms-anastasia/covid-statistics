import { useState } from "react";
import {
  SearchHeader,
  SearchForm,
  SearchButton,
  SearchLabel,
  SearchInput,
} from "./SearchBar.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SearchBar({onSubmit}) {
  const [request, setRequest] = useState("");

  const handleNameChange = (event) => {
    setRequest((event.currentTarget.value.toLowerCase()));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (request.trim() === "") {
      toast.error("Please enter your query!", {
        theme: "colored",
      });
      return;
    }

    onSubmit(request);
    setRequest("");
  };
    return (
      // <SearchHeader>
        <SearchForm onSubmit={handleSubmit}>
            {/* <SearchLabel>Search</SearchLabel> */}
          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
            value={request}
            onChange={handleNameChange}
          />
        </SearchForm>
      // </SearchHeader>
    );
}