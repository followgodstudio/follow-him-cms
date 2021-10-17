import { Box, Flex } from "@chakra-ui/react";
import ProductImg from "assets/images/ProductImg.jpeg";
import theme from "components/CustomTheme";
import Text from "components/Text/Text";
import Proptypes from "prop-types";
import { numberFormatter } from "utils/Formatter";
import { Wrapper } from "./Item.styles";

const Item = ({ item, index }) => {
  return (
    <>
      {index === 0 && (
        <Flex
          color={theme.colors.gray[600]}
          justifyContent="space-between"
          mb="8px"
        >
          <Box width="12%" />
          <Text size="small" width="48%" bold textAlign="center">
            Product Name
          </Text>
          <Text size="small" width="18%" bold textAlign="center">
            Category
          </Text>
          <Text size="small" width="14%" bold textAlign="center">
            Sales
          </Text>
        </Flex>
      )}
      <Wrapper>
        <Text
          size="small"
          width="3%"
          textAlign="center"
          color={theme.colors.gray[600]}
        >
          {index + 1}
        </Text>
        <Box width="10%" maxWidth="30px">
          <img alt={ProductImg} src={ProductImg} />
        </Box>
        <Text size="small" width="48%">
          {item.productName}
        </Text>
        <Text size="small" width="18%" textAlign="center">
          {item.category}
        </Text>
        <Text size="small" bold width="14%" textAlign="center">
          {numberFormatter(item.sales)}
        </Text>
      </Wrapper>
    </>
  );
};

Item.propTypes = {
  item: Proptypes.objectOf(),
  index: Proptypes.number,
};

export default Item;
