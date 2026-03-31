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
  I’m just someone who enjoys turning thoughts into words. I write about random things I notice, questions I can’t ignore, and ideas that stick longer than they should.
</Text>

<Text>
  I’ve been getting into stoicism and life philosophy lately. It helps me stay calm and see life as an ongoing lesson. In the end, I just try to stay grateful and enjoy the ride.
</Text>

<Text>
  I’m also a tech nerd — especially when it comes to smartphones. I love seeing how fast things evolve and how technology shapes everyday life.
</Text>

<Text>
  And yeah, I love photography. Even with simple gear, I enjoy capturing moments. Hopefully I’ll upgrade someday, but for now, it’s more about how I see things than what I use.
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
