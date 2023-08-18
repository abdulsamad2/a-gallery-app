"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Header from "./components/Header";
import { motion } from "framer-motion";
import { useEffect } from "react";
import LastWordTyping from "./components/WordTyping";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <>
      <Box my={10} textAlign="center" width={600} mx="auto">
        <Box
          textAlign="center"
          flexWrap="wrap"
          sx={{ fontSize: "40px" }}
          gap={0.5}
         alignItems={'center'}
         justifyContent={'center'}
          display="flex" 
        >
          Simple and clean portfolio to showcase your{" "}
          <LastWordTyping  words={["photos", "items", "yourwork", "anything else"]} />
        </Box>
      
      </Box>
      <Gallery/>
    </>
  );
}
