import AddPostForm from "./components/Add-post-form";
import Post from "./components/Post";
import './App.css';
import { useState } from "react";
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer"; 

function App() {
  const [rerender, setRerender] = useState(false);
  const handleRerender = () => {
    setRerender(!rerender);
  };
  return (
    <div className="App">
      <Header/>
      <AddPostForm getData={handleRerender}/>
      <Post rerender={rerender}/>
      <Footer/>
    </div>
  );
}

export default App;