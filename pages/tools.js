import React from "react";
import {
  Icon,
  VStack,
  HStack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import Section from "@/components/section";
import {
  AppleLogo,
  DeviceMobile,
  Compass,
  Desktop,
} from "phosphor-react";
import ToolCard from "../components/tool-card";
import Hero from "@/components/hero";
import Layout from "@/layouts/layout";

const Tools = ({ tools }) => {
  return (
    <Layout>
      <VStack spacing={8}>
        <Hero
          title="Tools"
          subtitle="All the great apps and tools that make my life easier and more fun"
        />

        <Section>
          <Tabs
            variant="soft-rounded"
            colorScheme="blue"
            align="center"
            w="100%"
          >
            <TabList display="flex" flexWrap="wrap">
              <Tab
                bg={useColorModeValue("neutral.300", "neutralD.300")}
                _selected={{
                  color: useColorModeValue("gray.100", "neutralD.100"),
                  bg: useColorModeValue("gray.900", "gray.100"),
                }}
                mr={2}
                mt={2}
              >
                <HStack spacing={1}>
                  <Icon as={AppleLogo} />
                  <Text>Mac</Text>
                </HStack>
              </Tab>

              <Tab
                bg={useColorModeValue("neutral.300", "neutralD.300")}
                _selected={{
                  color: useColorModeValue("gray.100", "neutralD.100"),
                  bg: useColorModeValue("gray.900", "gray.100"),
                }}
                mr={2}
                mt={2}
              >
                <HStack spacing={1}>
                  <Icon as={DeviceMobile} />
                  <Text>iOS</Text>
                </HStack>
              </Tab>

              <Tab
                bg={useColorModeValue("neutral.300", "neutralD.300")}
                _selected={{
                  color: useColorModeValue("gray.100", "neutralD.100"),
                  bg: useColorModeValue("gray.900", "gray.100"),
                }}
                mr={2}
                mt={2}
              >
                <HStack spacing={1}>
                  <Icon as={Compass} />
                  <Text>Safari</Text>
                </HStack>
              </Tab>

              <Tab
                bg={useColorModeValue("neutral.300", "neutralD.300")}
                _selected={{
                  color: useColorModeValue("gray.100", "neutralD.100"),
                  bg: useColorModeValue("gray.900", "gray.100"),
                }}
                mr={2}
                mt={2}
              >
                <HStack spacing={1}>
                  <Icon as={Desktop} />
                  <Text>Web</Text>
                </HStack>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                  {tools
                    .filter((t) => t.platform === "Mac")
                    .map((tool, i) => (
                      <ToolCard key={i} {...tool} />
                    ))}
                </SimpleGrid>
              </TabPanel>

              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                  {tools
                    .filter((t) => t.platform === "iOS")
                    .map((tool, i) => (
                      <ToolCard key={i} {...tool} />
                    ))}
                </SimpleGrid>
              </TabPanel>

              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                  {tools
                    .filter((t) => t.platform === "Safari")
                    .map((tool, i) => (
                      <ToolCard key={i} {...tool} />
                    ))}
                </SimpleGrid>
              </TabPanel>

              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                  {tools
                    .filter((t) => t.platform === "Web")
                    .map((tool, i) => (
                      <ToolCard key={i} {...tool} />
                    ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Section>
      </VStack>
    </Layout>
  );
};

// 🔥 NO AIRTABLE — STATIC DATA
export async function getStaticProps() {
  return {
    props: {
      tools: [],
    },
  };
}

export default Tools;