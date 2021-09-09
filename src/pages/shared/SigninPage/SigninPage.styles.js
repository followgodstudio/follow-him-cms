import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { ReactComponent as LogoImg } from "assets/images/US-flag.svg";
import login from "assets/images/login-bg.jpg";

export const HorizontalContainer = styled.div`
  margin-left: -280px;
  display: flex;
  flex-direction: row;
`;

export const ImageBox = styled.div`
  width: 580px;
  position: relative;
  background-size: cover;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  color: #fff;
  z-index: 1;
  background-image: url(${login});
  background-size: cover;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    content: "";
    background-color: rgba(10, 29, 38, 0.95);
  }
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SuixingLogo = styled(LogoImg)`
  width: 200px;
`;

export const CloseLink = styled(Link)`
  height: 24px;
  position: absolute;
  top: 20%;
  right: 5%;
`;

export const SocialMediaBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: start;
  padding-top: 38px;
  & > :not(:last-child) {
    margin-right: 20px;
  }
`;
