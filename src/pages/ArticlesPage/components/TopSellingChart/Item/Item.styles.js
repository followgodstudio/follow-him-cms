import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled/macro";
import theme from "components/CustomTheme";

export const Wrapper = styled(Flex)`
  padding: 8px 0;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.gray[200]};
  justify-content: space-between;
  width: 100%;
`;
