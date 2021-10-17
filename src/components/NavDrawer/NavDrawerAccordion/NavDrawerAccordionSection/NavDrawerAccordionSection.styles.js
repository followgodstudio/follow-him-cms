import styled from "@emotion/styled/macro";

// TODO: Replace colors with Colors Schema
export const NavDrawerSectionWrapper = styled.li`
  padding: 2px 10px;
`;

export const NavDrawerSectionTitle = styled.div`
  border-radius: 1.375rem;
  color: ${(props) => (props.selected ? "#ff4961" : "#969BA0")};
  background-color: ${(props) =>
    props.selected ? "rgba(255, 73, 97, 0.1)" : null};
  display: flex;
  justify-content: space-between;
  padding: 15px 18px;
  align-items: center;
  svg {
    width: 28px;
    height: 28px;
  }
  :hover {
    color: #ff4961;
    cursor: pointer;
  }
`;

export const SubSectionWrapper = styled.ul`
  padding: 8px 0;
`;

export const SubSectionTitle = styled.li`
  padding: 8px 30px 8px 36px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.selected ? "#ff4961" : "#7e7e7e")};
  svg {
    color: ${(props) => (props.selected ? "#43dc80" : "#7e7e7e")};
  }
  :hover {
    cursor: pointer;
    color: #ff4961;
    svg {
      color: #43dc80;
    }
  }
`;
