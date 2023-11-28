import { Box } from "@mui/material";

const iconSize = "25rem";

const Category = ({ category, selectedCategory, setSelectedCategory }) => {
  return (
    <Box sx={{ px: { sx: 0, md: 2 } }}>
      {category.map((category) => (
        <button
          key={category}
          className="category-btn"
          style={{
            backgroundColor: category.name === selectedCategory && "#272727",
          }}
          onClick={() => setSelectedCategory(category.name)}
        >
          <img
            src={
              category.name === selectedCategory
                ? category.iconTarget
                : category.icon
            }
            alt="HomeIcon"
            height={iconSize}
          />
          <span>{category.name}</span>
        </button>
      ))}
    </Box>
  );
};

export default Category;
