import {
  Box,
  Image,
  Badge,
  Button,
  Text,
  SimpleGrid,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { WarningText } from "./ArticlesPage.styles";

const ArticlesPage = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box w="100%" centerContent>
      <Box w="100%" p={4} color="white">
        <Button colorScheme="teal" variant="outline">
          + Add a new article
        </Button>
      </Box>
      <SimpleGrid columns={4} spacing={10}>
        {Array(20)
          .fill("")
          .map((_, item) => (
            <Box
              // eslint-disable-next-line react/no-array-index-key
              key={item}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={property.imageUrl} alt={property.imageAlt} />
              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    New
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {property.beds} beds &bull; {property.baths} baths
                  </Box>
                </Box>
                <Text>{item}</Text>
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {property.title}
                </Box>
                <Box>
                  {property.formattedPrice}
                  <Box as="span" color="gray.600" fontSize="sm">
                    / wk
                  </Box>
                </Box>
              </Box>
              <Flex>
                <Button p="4" bg="red.400">
                  <Text>Edit</Text>
                </Button>
                <Spacer />
                <Button p="4" bg="green.400" color="red.400">
                  <WarningText>Delete</WarningText>
                </Button>
              </Flex>
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default ArticlesPage;
