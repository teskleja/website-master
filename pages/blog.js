import React from "react";
import Parser from "rss-parser";
import {
  VStack,
  SimpleGrid,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";
import Section from "@/components/section";
import Hero from "@/components/hero";
import Layout from "@/layouts/layout";

export default function Blog({ posts }) {
  return (
    <Layout>
      <Section>
        <VStack spacing={4}>
          <Hero
            title="Blog"
            subtitle="Thoughts, stories, and moments captured through writing and photography."
          />

          {!posts?.length && "No posts found."}

          <SimpleGrid columns={1} spacing={4} pt={8} w="100%">
            {posts.map((post) => (
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
    </Layout>
  );
}

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