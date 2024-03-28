// HEADER FILE
"use client"
import { Box, Flex, Button, Stack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaSignInAlt } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useRouter } from "next/navigation";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <>
      <Box px={4} pt={5}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>

          {/* CHANGE LOGO HERE */}
          <Image
            
            height={100}
            width={100}
            src={logo}
            alt=" logo"
            onClick={() => {
              router.push("/");
            }}
            style={{ cursor: "pointer" }}
          />

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <a href="/signin" target="_blank">
                <Button rightIcon={<FaSignInAlt />}>Sign In</Button>
              </a>
              <a href="/signup" target="_blank">
                <Button>Sign Up</Button>
              </a>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
