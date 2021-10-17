import styled from "@emotion/styled/macro";
import { ReactComponent as CircleLogo } from "assets/images/US-flag.svg";
import { ReactComponent as TextLogo } from "assets/images/suixing-logo.svg";
import { Link } from "react-router-dom";

export const SuixingLogo = styled(TextLogo)`
  height: 30px;
  z-index: -2;
  // margin-left: 10px;
  // margin-right: 10px;
`;

export const MichaelsCircleLogo = styled(CircleLogo)`
  height: 58px;
  z-index: -2;
  margin-left: 13px;
  margin-right: 40px;
`;

export const LogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RightNav = styled.div`
  display: flex;
  margin-left: 30px;
  align-items: center;
  justify-content: space-between;

  .icon-tabler-tallymark-1 {
    margin: 0 8px;
  }

  @media (max-width: 740px) {
    margin-left: 0;
  }
`;
