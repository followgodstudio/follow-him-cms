import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

export const RightNavItem = styled.button`
  display: flex;
  align-items: center;
  text-align: left;

  svg {
    margin-right: 8px;
  }

  > div {
    max-width: 110px;
  }
`;

export const DropdownItem = styled.button`
  display: flex;
  text-align: start;
  font-size: 14px;
  padding: 12px;
  border-radius: 4px;
  height: 45px;
  &:hover {
    background: lightgray;
  }
`;
