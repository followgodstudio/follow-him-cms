import styled from "@emotion/styled/macro";

export const NavDrawerPopoverSectionWrapper = styled.li`
  padding: 0 13px;
  position: relative;
`;

export const IconWrapper = styled.div`
  border-radius: 12px;
  padding: 10.5px 11px;
  margin: 2px 0;
  background-color: ${(props) =>
    props.selected || props.isMouseHover ? "#ff4961" : "#FFFFFF"};
  cursor: pointer;
  svg {
    width: 32px;
    height: 32px;
    color: ${(props) =>
      props.selected || props.isMouseHover ? "#FFFFFF" : "#969BA0"};
  }
`;

export const SubNavWrapper = styled.div`
  position: absolute;
  left: 5rem;
  top: 0rem;
  width: 11.875rem;
  padding: 8px 0 8px 1px;
  box-shadow: 0px 0px 40px 0px rgb(82 63 105 / 10%);
  border-radius: 6px;
  background: #fff;
`;

export const SubNavItem = styled.div`
  padding: 13px 14px;
  color: ${(props) => (props.selected ? "#ff4961" : "#7e7e7e")};
  :hover {
    cursor: pointer;
    color: #ff4961;
  }
`;
