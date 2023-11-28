import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { categories1, categories2, categories3 } from "../utils/constants";
import Category from "./Category";

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home");

  return (
    <Stack
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        p: "0.5rem 0",
        backgroundColor: "#0F0F0F",
      }}
    >
      <Category
        category={categories1}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <hr width="99%" color="#3d3d3d" />
      <Category
        category={categories2}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <hr width="99%" color="#3d3d3d" />
      <Typography
        color="#fff"
        className="copyright"
        variant="body2"
        sx={{ px: { sx: 0, md: 2 } }}
      >
        Remember that's a Youtube clone made by Hazem Sabry You can't Sign in
        but you're welcome to try😜.
      </Typography>
      <hr width="99%" color="#3d3d3d" />
      <Category
        category={categories3}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <hr width="99%" color="#3d3d3d" />
      <Typography
        color="#fff"
        className="copyright"
        variant="body2"
        sx={{ px: { sx: 0, md: 2 } }}
      >
        &copy;Copyright 2023 to Hazem Sabry
      </Typography>
    </Stack>
  );
};

export default Sidebar;
