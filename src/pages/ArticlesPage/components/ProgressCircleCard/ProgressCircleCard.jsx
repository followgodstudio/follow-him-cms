// import { Wrapper } from './NotFoundPage.styles';
import { Box, useMediaQuery } from "@chakra-ui/react";
import theme from "components/CustomTheme";
import Heading from "components/Heading/Heading";
import Text from "components/Text/Text";
import PropTypes from "prop-types";
import "react-circular-progressbar/dist/styles.css";
import { numberFormatter } from "utils/Formatter";
import {
  CardWrapper,
  CircularProgress,
  CircularProgressAndTextWrapper,
  CircularProgressLabel,
} from "./ProgressCircleCard.styles";

const ProgressCircleCard = ({ title, current, goal, percentage, ...rest }) => {
  const [is1500] = useMediaQuery(`(min-width: 1500px`);
  const [is1800] = useMediaQuery(`(min-width: 1800px)`);
  return (
    <CardWrapper {...rest}>
      <Box height="100%" width={is1500 ? "50%" : "100%"}>
        <Heading variant="h2" mb="20px">
          {numberFormatter(current)}
        </Heading>
        <Text bold>{title}</Text>
        <Text size="small" color={theme.colors.gray[600]}>
          Today
        </Text>
      </Box>
      {is1500 && (
        <Box height="100%" width="50%">
          <CircularProgressAndTextWrapper>
            <CircularProgress
              size={is1800 ? "120px" : "80px"}
              value={percentage}
              color={theme.colors.platform.b2b}
              thickness="8px"
            >
              <CircularProgressLabel>
                <Text size="small">{`${percentage}%`}</Text>
              </CircularProgressLabel>
            </CircularProgress>
            <Text mt="2px" color={theme.colors.gray[400]} textAlign="center">
              {`Goal: ${numberFormatter(goal)}`}
            </Text>
          </CircularProgressAndTextWrapper>
        </Box>
      )}
    </CardWrapper>
  );
};
ProgressCircleCard.propTypes = {
  title: PropTypes.string,
  current: PropTypes.number,
  goal: PropTypes.number,
  percentage: PropTypes.number,
};

export default ProgressCircleCard;
