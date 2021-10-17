import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled/macro";
import theme from "components/CustomTheme";

export const CardWrapper = styled(Box)`
  border: 1px solid ${theme.colors.gray[100]};
  background: ${theme.colors.gray[0]};
  border-radius: 6px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
