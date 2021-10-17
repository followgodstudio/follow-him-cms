import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import PropTypes from "prop-types";
import BarChart from "../components/BarChart/BarChart";
import BubbleMap from "../components/BubbleMap/BubbleMap";
import ChartCard from "../components/ChartCard/ChartCard";
import SellingVariationLineChart from "../components/LineChart/SellingVariationLineChart";
import ViewTrafficLineChart from "../components/LineChart/ViewTrafficLineChart";
import PieChart from "../components/PieChart/PieChart";
import ProgressCircleCard from "../components/ProgressCircleCard/ProgressCircleCard";
import SimpleCard from "../components/SimpleCard/SimpleCard";
import TopSellingChart from "../components/TopSellingChart/TopSellingChart";

// The max height is 904px, make sure the height of each column is 904 px
const DashPage = ({ setFullSizeChart }) => {
  const handleArrowMaximizeClick = (targetName) => {
    setFullSizeChart(targetName);
  };
  return (
    <Flex>
      <Box width="30%" mr="15px">
        {/* <ChartCard
          title="Views Traffic"
          width="100%"
          height="280px"
          mb="12px"
          handleArrowMaximizeClick={() =>
            handleArrowMaximizeClick("Views Traffic")
          }
        >
          <ViewTrafficLineChart />
        </ChartCard>
        <ChartCard
          title="Top Selling Products"
          width="100%"
          height="612px"
          handleArrowMaximizeClick={() =>
            handleArrowMaximizeClick("Top Selling Products")
          }
        >
          <TopSellingChart />
        </ChartCard> */}
      </Box>
      <Box width="40%" mr="15px">
        <SimpleGrid columns={2} spacingX="12px" spacingY="8px" mb="12px">
          <ProgressCircleCard
            width="100%"
            height="160px"
            title="Active Customer Visits"
            current="230038"
            percentage="74"
            goal="100000"
          />
          <ProgressCircleCard
            width="100%"
            height="160px"
            title="Revenue"
            current="230038"
            percentage="39"
            goal="100000"
          />
          <ProgressCircleCard
            width="100%"
            height="160px"
            title="Ave. Conversion Rate"
            current="230038"
            percentage="58"
            goal="10000"
          />
          <ProgressCircleCard
            width="100%"
            height="160px"
            title="Active SKU"
            current="230038"
            percentage="3"
            goal="1000"
          />
        </SimpleGrid>
        <SimpleGrid columns={4} spacingX="8px" mb="12px">
          <SimpleCard
            height="120px"
            title="Active Sales"
            date="Real-time"
            currentAmount="130038"
          />
          <SimpleCard
            height="120px"
            title="Daily Sales"
            date="Today"
            currentAmount="130038"
          />
          <SimpleCard
            height="120px"
            title="Weekly Sales"
            date="Jun 30 - Jul 6"
            currentAmount="130038"
          />
          <SimpleCard
            height="120px"
            title="Annual Sales"
            date="Jan 1 - Dec 31, 2020"
            currentAmount="130038"
          />
        </SimpleGrid>
        <ChartCard
          title="Selling Variation"
          width="100%"
          height="432px"
          handleArrowMaximizeClick={() =>
            handleArrowMaximizeClick("Selling Variation")
          }
        >
          <SellingVariationLineChart />
        </ChartCard>
      </Box>
      <Box width="30%">
        <ChartCard
          title="Internal Sales Comparison"
          width="100%"
          height="300px"
          mb="12px"
          handleArrowMaximizeClick={() =>
            handleArrowMaximizeClick("Internal Sales Comparison")
          }
        >
          <BarChart />
        </ChartCard>
        <ChartCard
          title="Platform Sales Contribution"
          width="100%"
          height="300px"
          mb="12px"
          handleArrowMaximizeClick={() =>
            handleArrowMaximizeClick("Platform Sales Contribution")
          }
        >
          <PieChart />
        </ChartCard>
        <ChartCard
          title="Customer Distribution"
          width="100%"
          height="280px"
          handleArrowMaximizeClick={() =>
            handleArrowMaximizeClick("Customer Distribution")
          }
        >
          <BubbleMap />
        </ChartCard>
      </Box>
    </Flex>
  );
};

DashPage.propTypes = {
  setFullSizeChart: PropTypes.func,
};

export default DashPage;
