import Parser from "rss-parser";
import React from "react";
import {
  Button,
  Box,
  VStack,
  Text,
  Heading,
  SimpleGrid,
  HStack,
  Icon,
} from "@chakra-ui/react";
import Section from "@/components/section";
import Link from "@/components/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Layout from "@/layouts/layout";

const Home = ({ posts }) => (
  <Layout>
    <VStack spacing={16}>
      {/* HERO */}
      <Section>
        <VStack spacing={4} align="start">
          <HStack justify="space-between" w="100%" align="center">
            <Heading size="lg">Hey there. 👋</Heading>

            <Link href="/about" legacyBehavior>
              <Button
                variant="ghost"
                rightIcon={<Icon as={ArrowUpRightIcon} />}
                size={["sm", "md"]}
              >
                Read more
              </Button>
            </Link>
          </HStack>

          <Text fontSize={["lg", "2xl"]}>
            I'm Panji Ariyo, an amateur writer who enjoys photography, based in Indonesia.
          </Text>
        </VStack>
      </Section>

      {/* POSTS */}
      <Section>
        <VStack align="start" spacing={8}>
          <HStack justify="space-between" w="100%" align="center">
            <Heading size="lg">Latest Posts</Heading>

            <Link href="/blog" legacyBehavior>
              <Button
                size={["sm", "md"]}
                variant="ghost"
                rightIcon={<Icon as={ArrowUpRightIcon} />}
              >
                View all
              </Button>
            </Link>
          </HStack>

          <SimpleGrid columns={1} spacing={4} w="100%">
            {posts.slice(0, 3).map((post) => (
              <Box key={post.id} p={4} borderWidth="1px" rounded="lg">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <Heading size="md">{post.title}</Heading>
                </a>
                <Text fontSize="sm" color="gray.500">
                  {new Date(post.publishDate).toDateString()}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Section>
    </VStack>
  </Layout>
);

export async function getStaticProps() {
  const parser = new Parser();

  const feed = await parser.parseURL(
    "https://medium.com/feed/@panjiariyo"
  );

  const posts = feed.items.map((item) => ({
    id: item.guid,
    title: item.title,
    link: item.link,
    publishDate: item.pubDate,
  }));

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}

export default Home;