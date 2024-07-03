// Import necessary hooks and components from React and Material UI libraries
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography , Box  } from "@mui/material";

// Define the structure of a post object
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const styles = {
  container: {
    width: "75%",
    minHeight: "80%",
  },
  heading: {
    color: "black",
  }
};

const PostsData: React.FC = () => {
  // State to hold the posts data
  const [data, setData] = useState<Post[]>([]);

  // Effect hook to fetch posts data when the component mounts
  useEffect(() => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => alert(err));
  }, []);

  // Define the columns for the DataGrid component
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", width: 600 },
  ];

  return (
    <Box sx={styles.container}>
        <Typography variant="h6" sx={styles.heading}>
            Dashboard
        </Typography>
      <DataGrid rows={data} columns={columns} autoPageSize />
    </Box>
  );
};

export default PostsData;
