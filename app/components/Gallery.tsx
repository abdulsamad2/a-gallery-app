'use client'
import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Card, Stack } from "@mui/material";
import Mycard from "./Card";

const Gallery = () => {
  // State to track the selected tab value
  const [value, setValue] = React.useState(0);

  // Array of image descriptions with URLs, categories, and descriptions
  const imageArray = [
    
    {
      imageUrl:
        "https://images.unsplash.com/photo-1690672026269-7712bcfe517e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      category: "Nature",
      description: "A beautiful nature image.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1682685797886-79020b7462a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "City",
      description: "A cityscape with buildings and lights.",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1690038784525-30302fed8ba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Abstract",
      description: "Moonlight dances on the ripples of a serene midnight lake.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1691971943379-5965d3d7f07f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Cosmic Wonders",
      description:
        "The gentle rustling of leaves orchestrates a nocturnal symphony",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1692005104293-8a319ce41665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      category: "Cosmic Wonders",
      description:
        "Silhouettes of trees stand like guardians in the hush of the night",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1682686581484-a220483e6291?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Cosmic Wonders",
      description:
        "A distant owl's hoot adds an enigmatic rhythm to the nocturnal orchestra ",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1691142750550-6990f5b00bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      category: "Nightscapes",
      description:
        "The cool night air carries a hint of dew, refreshing the senses ",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1666824718396-09dfd0e5cf04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      category: "City",
      description:
        "Time seems to stand still as the night unfolds its mysteries ",
    },
    
  ];

  // Filter the imageArray to get unique categories
  const uniqueCategories = imageArray.filter((item, index) =>
    imageArray.findIndex((obj) => obj.category === item.category) === index
  );

  // Create an array of category names from uniqueCategories
  const categoryArray = uniqueCategories.map((item) => item.category);

  // Filter items based on selected tab value (0 for "All" or specific category)
  const filteredItems = imageArray.filter((item, index) => {
    return value === 0 ? item : item.category === categoryArray[value - 1];
  });


  // Handle tab change
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {/* Tab navigation for categories */}
      <Stack borderBottom={'solid 1px'} sx={{ bgcolor: "background.paper" }}>
        <Tabs TabIndicatorProps={{ style: { display: 'none' } }}  sx={{display:'flex',flexWrap:'wrap'}} value={value} onChange={handleChange} centered>
          {/* "All" tab */}
          <Tab label="All" />

          {/* Render tabs for unique categories */}
          {uniqueCategories.map((item, index) => (
            <Tab
              key={index}
              sx={{ textTransform: "capitalize" }}
              label={item.category}
            />
          ))}
        </Tabs>
      </Stack>

      {/* Gallery of Mycard components */}
      <Stack
        my={5}
        direction={"row"}
        gap={2}
        flexWrap="wrap"
        justifyContent={"center"}
        maxWidth="80%"
        mx={"auto"}
      >
        {/* Render Mycard components for filtered items */}
        {filteredItems.map((item, index) => (
          <Mycard
            key={index}
            imageurl={item.imageUrl}
            category={item.category}
            description={item.description}
          />
        ))}
      </Stack>
    </>
  );
};

export default Gallery;
