import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <OutlinedInput
      className="bg-mainDark"
      size="small"
      placeholder="Search"
      startAdornment={<SearchIcon />}
    />
  );
};

export default Search;
