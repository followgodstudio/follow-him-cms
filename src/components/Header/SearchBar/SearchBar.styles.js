import styled from "@emotion/styled/macro";

export const Wrapper = styled.div`
  display: flex;
  align-self: stretch;
  flex: 1;
  border-radius: 99999px;
  border: 1px solid #f1f1f1;
  background: #f1f1f1;
  padding: 8px 8px 8px 24px;
  position: relative;
  align-items: center;
`;

export const Input = styled.input`
  background: transparent;
  height: 100%;
  flex: 1;
  margin-right: 10px;
  padding-top: 1px;
  outline: none;

  ::placeholder {
    color: #7e7e7e;
    font-weight: 600;
  }

  :focus {
    box-shadow: none;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

// TODO: need to add DSN Label variant to DSN Text component
export const ClearButton = styled.button`
  font-size: 10px;
  font-weight: 800;
  color: grey;
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99999px;
  background: linear-gradient(135deg, #e9425b, #cf1f2e);
  color: white;
  height: 40px;
  width: 40px;

  & > svg {
    width: 16px;
  }
`;

export const Results = styled.ul`
  border-radius: 0 0 16px 16px;
  background: white;
  padding: 20px 0 16px 0;
  z-index: 0;
  transition: max-height 0.2s ease-out;
  position: absolute;
  top: 100%;
  left: -0.75rem;
  right: -0.75rem;
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
  height: auto;
  max-height: 0;

  ${({ isOpen }) =>
    isOpen &&
    `opacity: 1;
     visibility: visible;
     max-height: 400px;`}

  > * {
    padding-left: 34px;
    padding-right: 34px;
  }
`;

export const Result = styled("li", {
  shouldForwardProp: (prop) => prop !== "isSelected",
})`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 5px;
  color: black;
  cursor: pointer;

  :hover {
    background: lightgray;

    > div:first-of-type p {
      color: red;
      text-decoration: underline;
    }
  }

  ${({ isSelected }) =>
    isSelected &&
    `
      background: lightgray;
      > div:first-of-type p {
        color: blue;
        text-decoration: underline;
      }
    `}
`;

export const ResultSubText = styled.div`
  display: flex;
  align-items: center;
  color: lightgray;
  p {
    text-decoration: none !important;
  }
`;
