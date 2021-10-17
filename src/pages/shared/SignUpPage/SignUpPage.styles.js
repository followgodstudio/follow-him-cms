import styled from "@emotion/styled/macro";
import login from "assets/images/login-bg.jpg";
import { ReactComponent as LogoImg } from "assets/images/suixing-logo.svg";
import { Link } from "react-router-dom";

export const HorizontalContainer = styled.div`
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
  color: #fff; //TODO: Replace it with global styling color
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
    background-color: rgba(
      10,
      29,
      38,
      0.95
    ); //TODO: Replace it with global styling color
  }
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const MichaelsLogo = styled(LogoImg)`
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
