import bg from "./../assets/digital-art-style-composition-with-fashion-design-studio.jpg";
import img1 from "./../assets/2b04a8efe5de289053ccf87daed3e096.jpg";
import Album from "../components/Album/Album";
import InviteSection from "../components/InviteSection/InviteSection";
import SliderAlbum from "../components/Slider/SliderALbum";
import Offers from "../components/Offer/Offer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductsShowCase from "../components/ProductShowCase/ProductsShowCase";

import axios from "axios";
// inside MainPage

// console.log(items);
const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setindex] = useState(0);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/items/")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
        console.log("Fetched items:", res.data);
      })
      .catch((err) => {
        console.error("Error fetching items:", err);
        setLoading(false);
      });
  }, []);
  // console.log(items);
  // const generateRandomImage = () => {
  //   const items = products.products.filter((item) => item.category === "Shoes");
  //   const x = items[Math.floor(Math.random() * items.length)];
  //   return x.image;
  // };
  // const [randomImg1] = useState(() => generateRandomImage());
  // const [randomImg2] = useState(() => generateRandomImage());
  // const [randomImg3] = useState(() => generateRandomImage());
  // const grouped = Object.values(
  //   products.products.reduce((acc, product) => {
  //     if (!acc[product.category]) {
  //       acc[product.category] = { category: product.category, items: [] };
  //     }
  //     acc[product.category].items.push(product);
  //     return acc;
  //   }, {})
  // );
  const list = products.filter((product) => product.category == 2);
  const handleNext = function (e) {
    e.preventDefault();
    setindex((index) => (index + 1) % list.length);
  };
  const handelPerv = function (e) {
    e.preventDefault();
    setindex((index) => (index - 1) % list.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setindex((prev) => (prev + 1) % list.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [list.length]);

  if (loading) return <p className="text-center p-10">Loading...</p>;
  // console.log(prod);
  return (
    <div className="flex items-center justify-around w-full flex-wrap">
      <img
        className="w-full h-full -z-10 absolute top-0  left-0 opacity-30"
        src={bg}
        alt="background"
      />
      <div className="w-full  h-fit flex bg-white items-start p-10 justify-around ">
        <div className="w-65 gap-2 h-150 flex flex-col">
          <Offers height="h-1/2" width="w-full" src={img1} />
          <Offers height="h-1/2" width="w-full" src={img1} />
        </div>
        <InviteSection />
        <div className="w-1/4 h-150 flex flex-col gap-4">
          <Album
            img1={img1}
            img2={img1}
            height="h-1/2"
            width="w-full"
            category="fashions"
          />
          <Album
            img1={img1}
            img2={img1}
            height="h-1/2"
            width="w-full"
            category="electronics"
          />
        </div>
      </div>
      <div className="w-full h-lvh bg-white  flex justify-around items-center flex-wrap ">
        <SliderAlbum />
        <ProductsShowCase
          listToShow={products.filter((product) => product.category == 3)}
          showCase="Best from the customer's perspective"
        />
        <div className="h-7/12 gap-1  w-12/12 p-5 flex flex-wrap justify-around">
          <div className="gap-2 w-8/24 h-full flex flex-wrap overflow-hidden">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-30/96 h-23/48 hover:bg-neutral-500 transition-all bg-neutral-800 p-1 flex  flex-col items-center shadow-sm shadow-neutral-700"
              >
                <img
                  className="object-cover w-7/8 h-7/12"
                  src={product.image_url}
                  alt=""
                />
                <p className=" capitalize text-white">{product.name}</p>
                <p className="capitalize text-yellow-300">
                  price: {product.price}$
                </p>
                <button className="w-2/3 px-2 py-1 text-neutral-800 bg-white hover:bg-yellow-500 transition-all">
                  add to basket
                </button>
              </div>
            ))}
          </div>
          <div className="w-12/24 h-11/12  bg-gradient-to-l from-neutral-600 to-neutral-800 flex items-center justify-around relative  ">
            <button
              onClick={handelPerv}
              className="bg-white absolute w-10 left-2 rounded-full h-10 hover:bg-gray-400 transition-colors z-20"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            {loading || list.length === 0 ? (
              <p className="text-center p-10">Loading...</p>
            ) : (
              list.length > 0 && (
                <>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={list[index].id}
                      src={list[index].url}
                      alt=""
                      className=" w-2/3 h-2/3 object-contain aspect-[16/9] z-1"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.1 }}
                    />
                  </AnimatePresence>
                  <AnimatePresence>
                    <motion.img
                      className=" absolute top-0 left-0  w-full h-full -z-0 blur-sm object-cover"
                      src={list[(index + 1) % list.length].url}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.1 }}
                      alt=""
                    />
                  </AnimatePresence>
                </>
              )
            )}
            <button
              onClick={handleNext}
              className="bg-white absolute right-2 w-10 rounded-full h-10 hover:bg-gray-400 transition-colors z-20"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <Offers
            width="w-7/48"
            height="h-11/12"
            src={products.filter(
              (item) => item.id == "c76b634a-58ed-41fa-ae4f-610faed94f75"
            )}
          />
        </div>
        <ProductsShowCase
          listToShow={products.filter((item) => item.category == 4)}
          showCase="Bestsellers of the week"
        />
        <SliderAlbum />
        <ProductsShowCase
          listToShow={products.filter((item) => item.category == 5)}
          showCase="The most discounts"
        />
      </div>
    </div>
  );
};
export default MainPage;
