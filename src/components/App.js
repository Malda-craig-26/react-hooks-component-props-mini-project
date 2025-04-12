import React from "react";
import blogData from "../data/blog";
import Header from "./Header";

console.log(blogData);

function App() {
 
    const blogName = "Overreacted";

  return (
    <div>
     <Header name={blogName} />
     
    </div>
  );
}

export default App;
