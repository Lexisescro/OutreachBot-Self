// HERO FILE (middle of home page)
"use client"
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  createIcon,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

export default function HeroLanding() {
  return (
    <>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
        mb={50}
      >
        <Heading
          fontWeight={600}
          fontSize={{ md: "70px", sm: "6xl" }}
          lineHeight={"130%"}
          color={useColorModeValue("brand.main", "brand.light")}
        >
          <Text
            as={"span"}
            bgGradient={
              "linear(to-tr, brand.main, brand.200, brand.300, brand.400, brand.600)"
            }
            bgClip="text"
            fontSize={{ md: "100px", sm: "6xl" }}
            fontWeight="extrabold"
          >
            OUTREACH BOT
          </Text>
          <br />
          Your Connection Platform 
        </Heading>
        <Text color={"gray.500"} fontSize={"xl"}>
          Welcome to Outreachbot: a networking platform to boost your connection.
          <br /> No accounts, no plans, 100% open source.
        </Text>
        <Link href="#browse-anchor">
          <Button
            bg={useColorModeValue("brand.main", "brand.light")}
            _hover={{
              bg: useColorModeValue("brand.light", "brand.main"),
            }}
            size="lg"
            boxShadow={"0 5px 30px 0px rgb(63 62 94 / 43%)"}
            textColor={"brand.bg"}
          >
            ⚡ Start Building
          </Button>
        </Link>
      </Stack>
    </>
  );
}

const Sparkle = createIcon({
  displayName: "Arrow",
  path: (
    <path
      fill="black"
      d="M11 6.999c2.395.731 4.27 2.607 4.999 5.001.733-2.395 2.608-4.269 5.001-5-2.393-.731-4.268-2.605-5.001-5-.729 2.394-2.604 4.268-4.999 4.999zm7 7c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm-6 5.501c1.198.365 2.135 1.303 2.499 2.5.366-1.198 1.304-2.135 2.501-2.5-1.197-.366-2.134-1.302-2.501-2.5-.364 1.197-1.301 2.134-2.499 2.5zm-6-8.272c.522.658 1.118 1.253 1.775 1.775-.657.522-1.252 1.117-1.773 1.774-.522-.658-1.118-1.253-1.776-1.776.658-.521 1.252-1.116 1.774-1.773zm-.001-4.228c-.875 2.873-3.128 5.125-5.999 6.001 2.876.88 5.124 3.128 6.004 6.004.875-2.874 3.128-5.124 5.996-6.004-2.868-.874-5.121-3.127-6.001-6.001z"
    />
  ),
});
