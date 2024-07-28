import React, { useEffect, useState } from "react";
import AddRecipe from "../Main/Addrecipe";
import Filter from "../Main/Filter";
import Navbar from "../Main/Navbar";
import Recipe from "../Main/Recipe/Recipes";
import Slider from "../Main/Slider";
import Footer from "../Main/Footer";
import LoaderBody from "../loaderMain/LoaderBody";

const Home = () => {
  const [loading, setLoading] = useState(true);

  // useEffect(()=>{
  setTimeout(() => {
    setLoading(false);
  }, 2500);
  // },[])

  return (
    <>
      {loading && <LoaderBody />}
      {!loading && (
        <>
          <Navbar />
          <Slider />
          <Recipe />
          <Filter />
          <AddRecipe />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
