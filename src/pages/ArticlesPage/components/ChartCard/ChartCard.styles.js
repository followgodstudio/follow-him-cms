import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled/macro";
import theme from "components/CustomTheme";

export const Wrapper = styled(Box)`
  border: 1px solid ${theme.colors.gray[100]};
  background: ${theme.colors.gray[0]};
  border-radius: 6px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2% 4%;
  border-bottom: 1px solid ${theme.colors.gray[100]};
`;

export const ChartWrapper = styled.div`
  padding: 2% 4%;
  height: 90%;
`;
