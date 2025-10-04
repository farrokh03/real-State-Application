import bg from "./../assets/digital-art-style-composition-with-fashion-design-studio.jpg";
import img1 from "./../assets/2b04a8efe5de289053ccf87daed3e096.jpg";
import img2 from "./../assets/c65e57a4fef269ebec65eb79face5c85.jpg";
import img3 from "./../assets/electronic.jpg";
import img4 from "./../assets/electronic2.jpg";
import Album from "../components/Album/Album";
import InviteSection from "../components/InviteSection/InviteSection";
import products from "./../products.json";
import SliderAlbum from "../components/Slider/SliderALbum";
import Offers from "../components/Offer/Offer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductsShowCase from "../components/ProductShowCase/ProductsShowCase";

// inside MainPage

const MainPage = () => {
  const generateRandomImage = () => {
    const items = products.products.filter((item) => item.category === "Shoes");
    const x = items[Math.floor(Math.random() * items.length)];
    return x.image;
  };
  const [randomImg1] = useState(() => generateRandomImage());
  const [randomImg2] = useState(() => generateRandomImage());
  const [randomImg3] = useState(() => generateRandomImage());
  const [index, setindex] = useState(0);
  const grouped = Object.values(
    products.products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = { category: product.category, items: [] };
      }
      acc[product.category].items.push(product);
      return acc;
    }, {})
  );
  const list = grouped[1].items;
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

  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/items/") // Django backend API
      .then((res) => res.json())
      .then((data) => {
        setProd(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  console.log(prod);
  if (loading) return <p>Loading...</p>;
  return (
    <div className="flex items-center justify-around w-full flex-wrap">
      <img
        className="w-full h-full -z-10 absolute top-0  left-0 opacity-30"
        src={bg}
        alt="background"
      />
      <div className="w-full  h-fit flex bg-white items-start p-10 justify-around ">
        <div className="w-65 gap-2 h-150 flex flex-col">
          <Offers height="h-1/2" width="w-full" src={randomImg1} />
          <Offers height="h-1/2" width="w-full" src={randomImg2} />
        </div>
        <InviteSection />
        <div className="w-1/4 h-150 flex flex-col gap-4">
          <Album
            img1={img1}
            img2={img2}
            height="h-1/2"
            width="w-full"
            category="fashions"
          />
          <Album
            img1={img3}
            img2={img4}
            height="h-1/2"
            width="w-full"
            category="electronics"
          />
        </div>
      </div>
      <div className="w-full h-lvh bg-white  flex justify-around items-center flex-wrap ">
        <SliderAlbum />
        <ProductsShowCase
          listToShow={products.products.filter(
            (item) => item.id > 11 && item.id < 18
          )}
          showCase="Best from the customer's perspective"
        />
        <div className="h-7/12 gap-1  w-12/12 p-5 flex flex-wrap justify-around">
          <div className="gap-2 w-8/24 h-full flex flex-wrap overflow-hidden">
            {products.products
              .filter((item) => item.id > 5 && item.id < 12)
              .map((x) => (
                <div className="w-30/96 h-23/48 hover:bg-neutral-500 transition-all bg-neutral-800 p-1 flex  flex-col items-center shadow-sm shadow-neutral-700">
                  <img
                    className="object-cover w-7/8 h-7/12"
                    src={x.image}
                    alt=""
                  />
                  <p className=" capitalize text-white">{x.name}</p>
                  <p className="capitalize text-yellow-300">
                    price: {x.price}$
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
            <AnimatePresence mode="wait">
              <motion.img
                key={list[index].id}
                src={list[index].image}
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
                src={list[(index + 1) % list.length].image}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.1 }}
                alt=""
              />
            </AnimatePresence>
            <button
              onClick={handleNext}
              className="bg-white absolute right-2 w-10 rounded-full h-10 hover:bg-gray-400 transition-colors z-20"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <Offers width="w-7/48" height="h-11/12" src={randomImg3} />
        </div>
        <ProductsShowCase
          listToShow={products.products.filter(
            (item) => item.id > 8 && item.id < 25
          )}
          showCase="Bestsellers of the week"
        />
        <SliderAlbum />
        <ProductsShowCase
          listToShow={products.products.filter((item) => item.id < 9)}
          showCase="The most discounts"
        />
      </div>
    </div>
  );
};
export default MainPage;
