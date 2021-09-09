import styled from "@emotion/styled/macro";

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  height: 92px;
  width: ${(props) => (props.width ? props.width : "440px")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0px")};
  margin-bottom: 16px;
`;

export const Input = styled.input`
  border: 1px solid black;
  width: 100%;
  max-height: 52px;
  border-radius: 4px;
  padding: 14px 16px 14px 16px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 12px;
  padding: 0px 0px 0px 16px;
`;

export const ErrorMessage = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  padding: 0px 0px 0px 16px;
  color: red;
`;
