import { Center } from "@chakra-ui/react";
import Text from "components/Text/Text";
import { useLocation } from "react-router-dom";
import { Wrapper } from "./Footer.styles";

const Footer = () => {
  const location = useLocation();
  const diffFooter = ["/signup", "/signin"];
  if (diffFooter.indexOf(location.pathname) > -1) {
    return null;
  }
  return (
    <Wrapper>
      <Center backgroundColor="transparent">
        <Text>FOOTER</Text>
      </Center>
    </Wrapper>
  );
};

export default Footer;
