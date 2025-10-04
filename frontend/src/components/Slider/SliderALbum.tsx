import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Album from "./../Album/Album";
import Products from "./../../products.json";
import { motion } from "framer-motion";

const grouped = Object.values(
  Products.products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = { category: product.category, items: [] };
    }
    acc[product.category].items.push(product);
    return acc;
  }, {})
);

const SliderAlbum = () => {
  const [index, setIndex] = useState(0);
  const itemsToShow = 5;

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % grouped.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + grouped.length) % grouped.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-80 bg-neutral-800 flex items-center relative overflow-hidden my-20">
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-2 bg-white w-10 h-10 rounded-full shadow-md z-20 hover:bg-gray-300 transition"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <motion.div
        className="flex gap-4 h-11/12"
        initial={false}
        animate={{ x: -index * (100 / itemsToShow) + "%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ width: `${(grouped.length / itemsToShow) * 100}%` }}
      >
        {grouped.map((item, i) => (
          <div key={i} className="w-1/4 flex-shrink-0">
            <Album
              img1={item.items[0].image}
              img2={item.items[1].image}
              height="h-full"
              width="w-full"
              category={item.category}
            />
          </div>
        ))}
      </motion.div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-2 bg-white w-10 h-10 rounded-full shadow-md z-20 hover:bg-gray-300 transition"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default SliderAlbum;
