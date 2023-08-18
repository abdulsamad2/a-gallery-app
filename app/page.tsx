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
      <Box my={10} textAlign="center" width={{md:'600px',xs:'auto'}} mx="auto">
        <Box
          textAlign="center"
          flexWrap="wrap"
           fontSize={{md:'40px',sx:'22px'}}
          gap={0.5}
         alignItems={'center'}
         justifyContent={'center'}
          display="flex" 
          flexDirection={{sx:'column',md:'row'}}
        >
          Simple and clean portfolio to showcase your{" "}
          <LastWordTyping  words={["photos", "items", "yourwork", "anything else"]} />
        </Box>
      
      </Box>
      <Gallery/>
    </>
  );
}
