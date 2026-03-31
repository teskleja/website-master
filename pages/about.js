import React from "react";
import Head from "next/head";
import { VStack, Text, Heading, Wrap } from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import interests from "../data/interests.json";
import experience from "../data/experience.json";
import InterestTag from "@/components/interest-tag";
import ExperienceCard from "@/components/experience-card";
import Hero from "@/components/hero";
import Link from "@/components/link";
import Layout from "@/layouts/layout";

const About = () => (
  <Layout>
    <Hero title="About" align="start" subtitle="Learn more about me" />
    <VStack spacing={12} mt={6}>
      <Section>
        <VStack align="start" spacing={6}>
          <Text>
            I’m an amateur writer who simply enjoys putting thoughts into words.
          </Text>
          <Text>
            I write about things I notice, questions I have, and ideas that stay in my head a little too long.
          </Text>
        </VStack>
      </Section>

      <Section>
        <VStack align="start" spacing={4}>
          <Heading as="h2" size="lg">
            Like 😁
          </Heading>
          <Wrap>
            {interests.like.map((el) => (
              <InterestTag name={el} like />
            ))}
          </Wrap>
        </VStack>
      </Section>
      <Section>
        <VStack align="start" spacing={4}>
          <Heading as="h2" size="lg">
            Dislike 😒
          </Heading>
          <Wrap>
            {interests.dislike.map((el) => (
              <InterestTag name={el} />
            ))}
          </Wrap>
        </VStack>
      </Section>

      <Section>
        <VStack align="start" spacing={6}>
        </VStack>
      </Section>
    </VStack>
  </Layout>
);

export default About;
