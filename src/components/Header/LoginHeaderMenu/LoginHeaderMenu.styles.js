import styled from "@emotion/styled/macro";

export const RightNavItem = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  :hover {
    cursor: pointer;
  }

  svg {
    margin-right: 8px;
  }

  @media (max-width: 1023px) {
    margin-right: 10px;
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
