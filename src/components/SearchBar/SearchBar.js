import {
  SearchForm,
  ButtonWrapper,
  SearchInput,
} from "./SearchBar.styled";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ value, onChange }) {

  return (
    <SearchForm >
      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search..."
        value={value} onChange={onChange}
      />
      <ButtonWrapper>
        <IconButton type="button" >
          <SearchIcon />
        </IconButton>
      </ButtonWrapper>
    </SearchForm>
  );
}