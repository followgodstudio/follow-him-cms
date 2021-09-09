import styled from "@emotion/styled/macro";
import { ReactComponent as Logo } from "assets/images/suixing-icon.png";
import { Link } from "react-router-dom";

export const SuixingLogo = styled(Logo)`
  height: 30px;
  z-index: -2;
`;
export const LogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;

  @media (max-width: 740px) {
    margin-right: 0;
  }
`;
