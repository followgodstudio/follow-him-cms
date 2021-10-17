import { Box, useMediaQuery } from "@chakra-ui/react";
import theme from "components/CustomTheme";
import Heading from "components/Heading/Heading";
import Text from "components/Text/Text";
import PropTypes from "prop-types";
import { numberFormatter } from "utils/Formatter";
import { CardWrapper } from "./SimpleCard.styles";

const SimpleCard = ({ title, date, currentAmount, ...rest }) => {
  const [is1800] = useMediaQuery(`(min-width: 1800px)`);
  return (
    <CardWrapper {...rest}>
      <Box>
        <Text size="medium">{title}</Text>
        {is1800 && (
          <Text size="medium" color={theme.colors.gray[600]}>
            {date}
          </Text>
        )}
      </Box>
      <Heading variant="h4" fontWeight="700">
        ${numberFormatter(currentAmount)}
      </Heading>
    </CardWrapper>
  );
};
SimpleCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.number,
  currentAmount: PropTypes.number,
};
export default SimpleCard;
