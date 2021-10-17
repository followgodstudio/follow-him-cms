import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { IconArrowLeft } from "@tabler/icons";
import Text from "components/Text/Text";
import Proptypes from "prop-types";
import DetailBarChart from "../components/BarChart/BarChart";
import LineChart from "../components/LineChart/ViewTrafficLineChart";
import { BackButtonWrapper } from "./DetailPage.styles";

const DetailPage = ({ setFullSizeChart }) => {
  return (
    <Tabs variant="enclosed">
      <Flex>
        <BackButtonWrapper>
          <IconArrowLeft />
          <Text
            pl="5px"
            onClick={() => setFullSizeChart(null)}
            cursor="pointer"
          >
            Back to Main Page
          </Text>
        </BackButtonWrapper>
        <TabList>
          <Tab>View Traffic</Tab>
          <Tab>TopSelling Products</Tab>
          <Tab>Selling Variations</Tab>
          <Tab>Internal Sales Comparison</Tab>
          <Tab>Platform Sales Contribution</Tab>
          <Tab>Customer Distribution</Tab>
        </TabList>
      </Flex>

      <TabPanels>
        <TabPanel>
          <LineChart />
        </TabPanel>
        <TabPanel>
          <Text>TopSelling Products</Text>
        </TabPanel>
        <TabPanel>
          <Text>Selling Variations</Text>
        </TabPanel>
        <TabPanel>
          <DetailBarChart />
        </TabPanel>
        <TabPanel>
          <Text>Platform Sales Contribution</Text>
        </TabPanel>
        <TabPanel>
          <Text>Customer Distribution</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

DetailPage.propTypes = {
  setFullSizeChart: Proptypes.func,
};

export default DetailPage;
