import {
  Box,
  CircularProgress as CP,
  CircularProgressLabel as CPL,
} from "@chakra-ui/react";
import styled from "@emotion/styled/macro";
import theme from "components/CustomTheme";

export const CardWrapper = styled(Box)`
  border: 1px solid ${theme.colors.gray[100]};
  background: ${theme.colors.gray[0]};
  border-radius: 6px;
  padding: 6%;
  display: flex;
`;

export const CircularProgressAndTextWrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: fit-content;
  transform: translate(-50%, -50%);
`;

export const CircularProgress = styled(CP)``;

export const CircularProgressLabel = styled(CPL)`
  width: 50%;
  height: 50%;
  box-shadow: 0 0 6px 4px ${theme.colors.gray[400]};
  border-radius: 50%;
  background: ${theme.colors.gray[0]};
  padding: 16% 8%;
`;
