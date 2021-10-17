import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { switchNav, switchSubNav } from "redux/slices/utilSlice";
import { Box, Image, Badge, StarIcon, Text } from "@chakra-ui/react";
import DashPage from "./DashPage/DashPage";
import DetailPage from "./DetailPage/DetailPage";

const RealtimeTrafficDash = () => {
  const dispatch = useDispatch();
  const [activeCustomerVisits, setActiveCustomerVisits] = useState({});
  const [revenue, setRevenue] = useState({});

  const [fullSizeChart, setFullSizeChart] = useState(null);

  useEffect(() => {
    // Switch Header Text
    dispatch(switchNav("Real Time Dash"));
    dispatch(switchSubNav("KPI Traffic Dash"));

    const client = new WebSocket("ws://127.0.0.1:8890");
    client.onmessage = (messageData) => {
      const messageOjb = JSON.parse(messageData.data);
      if (messageOjb.api_name === "active_user") {
        setActiveCustomerVisits({
          title: messageOjb.api_name,
          current: messageOjb.data.current,
          goal: messageOjb.data.goal,
          percentage: messageOjb.data.percentage,
        });
      } else if (messageOjb.api_name === "revenue") {
        setRevenue({
          title: messageOjb.api_name,
          current: messageOjb.data.current,
          goal: messageOjb.data.goal,
          percentage: messageOjb.data.percentage,
        });
      }
    };
  }, [dispatch]);

  // return fullSizeChart ? (
  //   <DetailPage setFullSizeChart={setFullSizeChart} />
  // ) : (
  //   <DashPage setFullSizeChart={setFullSizeChart} />
  // );

  // Sample card from Airbnb

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
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
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

        {/* <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <Text>Testing</Text>
                // <StarIcon
                //   key={i}
                //   color={i < property.rating ? "teal.500" : "gray.300"}
                // />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box> */}
      </Box>
    </Box>
  );
};

export default RealtimeTrafficDash;
