import styled from "@emotion/styled/macro";
import { Button, Text } from "@chakra-ui/react";
import { Link as SiteLink } from "react-router-dom";
import { IconSquare, IconSquareCheck } from "@tabler/icons";
import { ReactComponent as Flag } from "assets/images/US-flag.svg";

export const HorizontalLine = styled.hr`
  color: lightgray;
`;
export const FormBox = styled.form`
  height: auto;
  margin: 10px 0px;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
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

export const Footer = styled.div`
  height: 88px;
  position: sticky;
  bottom: 0px;
  border-radius: 8px 8px 0px 0px;
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
  background-color: #00cbfe;
  border: 1px solid #00cbfe;
  color: white;
  &:hover {
    background-color: #ff4c41;
  }
`;
