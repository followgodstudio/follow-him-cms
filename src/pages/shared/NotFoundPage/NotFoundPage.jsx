import { Box, useMediaQuery } from "@chakra-ui/react";
import Button from "components/Button/Button";
import CenteredWrapper from "components/CenteredWrapper/CenteredWrapper";
import theme from "components/CustomTheme";
import Heading from "components/Heading/Heading";
import React from "react";
import { useHistory } from "react-router-dom";
import { PageNotFoundImage } from "./NotFoundPage.styles";

const NotFoundPage = () => {
  const history = useHistory();

  const [isDesktop] = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);
  const [isMobile] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  return (
    <CenteredWrapper>
      <Box padding={isMobile ? "0px 0px 32px 0px" : "32px 98px 64px 98px"}>
        <Heading variant="h2" mt="32px" fontWeight="700">
          Oops! Page not found.
        </Heading>
        <Heading variant="h4" mt="16px">
          We can’t seem to find the page you’re looking for.
        </Heading>
        <Button
          type="button"
          variant="primary-1"
          mt="64px"
          size={isMobile ? "small" : "medium"}
          onClick={() => {
            history.push("/");
          }}
        >
          Back to home
        </Button>
        <PageNotFoundImage
          width={isDesktop ? "478px" : "100%"}
          height={isDesktop ? "385px" : "100%"}
        />
      </Box>
    </CenteredWrapper>
  );
};

export default NotFoundPage;
