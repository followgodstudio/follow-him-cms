import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled/macro";

export const FormBox = styled.form`
    height: auto;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-items: start;
    align-items: start;
    flex-wrap: wrap;
`;

export const CustomizeButton = styled(Button)`
    width: 440px;
    background-color: #00cbfe;
    border: 1px solid #00cbfe;
    color: white;
    &:hover {
    background-color: #ff4c41;
    }
`;