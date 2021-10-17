/* eslint-disable react/jsx-no-bind */
import { IconSearch } from "@tabler/icons";
import { useState } from "react";
import { Input, SearchButton, Wrapper } from "./SearchBar.styles";

const SearchBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleBlur = () => {
    setIsDropdownOpen(false);
    setSelectedIndex(-1);
  };
  const handleKeyDown = ({ code }) => {
    // TODO: Add 'Enter' key for submit
    if (code === "Enter") {
      // console.log("search");
    }
  };

  return (
    <Wrapper>
      <Input
        value={query}
        placeholder="Search here..."
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsDropdownOpen(true)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />

      <SearchButton
        aria-label="Search Button"
        type="button"
        onClick={() => {
          // console.log("search");
        }}
        onBlur={handleBlur}
      >
        <IconSearch />
      </SearchButton>
    </Wrapper>
  );
};

export default SearchBar;
