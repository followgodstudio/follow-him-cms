import styled from "@emotion/styled/macro";
import { ReactComponent as Flag } from "assets/images/US-flag.svg";
import { Link as SiteLink } from "react-router-dom";

export const HorizontalLine = styled.hr`
  color: lightgray; //TODO: Replace it with global styling color
`;

export const FlexItem = styled.div`
  margin-bottom: 24px;
`;

export const FormBox = styled.form`
  background-color: white; //TODO: Replace it with global styling color
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
  color: red; //TODO: Replace it with global styling color
`;

export const Footer = styled.div`
  height: 88px;
  position: sticky;
  bottom: 0px;
  background-color: white; //TODO: Replace it with global styling color
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

export const CloseLink = styled(Link)`
  height: 24px;
`;
