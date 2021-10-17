import { IconArrowsMaximize } from "@tabler/icons";
import theme from "components/CustomTheme";
import Text from "components/Text/Text";
import PropTypes from "prop-types";
import { ChartWrapper, TitleWrapper, Wrapper } from "./ChartCard.styles";

const ChartCard = ({
  fullSize = false,
  title,
  width,
  height,
  handleArrowMaximizeClick,
  children,
  ...rest
}) => {
  return (
    <Wrapper
      width={fullSize ? "100%" : width}
      height={fullSize ? "100%" : height}
      {...rest}
    >
      {title && (
        <TitleWrapper>
          <Text fontWeight={700}>{title}</Text>
          {!fullSize && (
            <IconArrowsMaximize
              cursor="pointer"
              color={theme.colors.gray[600]}
              onClick={handleArrowMaximizeClick}
            />
          )}
        </TitleWrapper>
      )}
      <ChartWrapper>{children}</ChartWrapper>
    </Wrapper>
  );
};

ChartCard.propTypes = {
  fullSize: PropTypes.bool,
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  handleArrowMaximizeClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default ChartCard;
