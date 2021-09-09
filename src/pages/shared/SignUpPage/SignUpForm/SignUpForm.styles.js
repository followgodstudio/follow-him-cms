import styled from "@emotion/styled/macro";
import { Text, Button } from "@chakra-ui/react";
import { Link as SiteLink } from "react-router-dom";
import { IconSquare, IconSquareCheck } from "@tabler/icons";
import { ReactComponent as Flag } from "assets/images/US-flag.svg";

export const HorizontalLine = styled.hr`
  color: lightgray;
`;
export const FlexItem = styled.div`
  margin-bottom: 24px;
`;
export const FormBox = styled.form`
  background-color: white;
  height: auto;
  margin: 28px 0px;
`;
export const InputGroup = styled.div`
  display: flex;
  justify-items: start;
  align-items: start;
  flex-wrap: wrap;
`;
export const Link = styled(SiteLink)`
  text-decoration: underline;
  color: red;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  flex-wrap: wrap;
  align-items: center;
  width: 440px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "16px"};
`;

export const CheckBoxButton = styled.button`
  &:focus {
    box-shadow: 0 0 0 3px white;
  }
`;

export const UncheckedIcon = styled(IconSquare)`
  color: ${(props) => (props.error ? "red" : "black")};
`;
export const CheckedIcon = styled(IconSquareCheck)``;

export const CheckBoxText = styled(Text)`
  padding-left: 8px;
  width: 85%;
`;
export const Wrapper = styled.div`
  margin-top: 12px;
`;
export const Footer = styled.div`
  height: 88px;
  position: sticky;
  bottom: 0px;
  background-color: white;
  border-radius: 8px 8px 0px 0px;
  transition: bottom 0.3s;
`;

export const FlagIcon = styled(Flag)`
  width: 20px;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  & > :not(:last-child) {
    margin-right: 8px;
  }
`;
export const CustomizeButton = styled(Button)`
  width: 440px;
  background-color: #00CBFE;
  border: 1px solid #00CBFE;
  color: white;
  &:hover {
    background-color: #ff4c41;
  }
`;

export const CloseLink = styled(Link)`
  height: 24px;
`;
