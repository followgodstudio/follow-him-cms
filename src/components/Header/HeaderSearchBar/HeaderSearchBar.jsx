/* eslint-disable react/jsx-no-bind */
import { useState } from "react";
import { IconSearch } from "@tabler/icons";
import { Wrapper, Input, SearchButton } from "./HeaderSearchBar.styles";

function HeaderSearchBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  function handleBlur() {
    setIsDropdownOpen(false);
    setSelectedIndex(-1);
  }
  function handleKeyDown({ code }) {
    // TODO: Add 'Enter' key for submit
    if (code === "Enter") {
      // console.log("search");
    }
  }

  return (
    <Wrapper>
      <Input
        value={query}
        placeholder="What are you looking for?"
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
}

export default HeaderSearchBar;
