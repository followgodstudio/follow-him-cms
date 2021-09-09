import styled from "@emotion/styled/macro";
import { Text } from "@chakra-ui/react";

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  flex-wrap: wrap;
  align-items: center;
  width: 300px;
  margin-right: 48px;
  margin-bottom: 8px;
`;
export const CheckBoxText = styled(Text)`
  padding-left: 8px;
  height: auto;
  width: 85%;
`;
export const CheckBoxButton = styled.input`
  border-width: 2px;
  border-radius: 4px;
  width: 16px;
  height: 16px;
  margin: 4px;
`;
