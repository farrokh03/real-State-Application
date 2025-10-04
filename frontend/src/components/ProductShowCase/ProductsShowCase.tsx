import products from "./../../products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const ProductsShowCase = (props) => {
  return (
    <div className="w-full h-fit flex flex-wrap my-10 p-5 gap-8 items-center justify-start bg-gradient-to-tl from-violet-500 to-zinc-300">
      <h1 className="w-full h-10  text-zinc-900 font-bold flex  justify-center text-3xl px-10 capitalize">
        {props.showCase}
      </h1>
      {props.listToShow.map((item) => (
        <div className="w-50 h-90 flex flex-col items-center py-5 bg-neutral-100 gap-1 hover:bg-neutral-200 transition-all shadow-lg shadow-gray-600">
          <img
            className="w-10/12 h-7/12 object-cover aspect-[16/9]"
            src={item.image}
            alt="product"
          />
          <p className=" capitalize text-neutral-700">{item.name}</p>
          <p className="capitalize text-neutral-600">price: {item.price}$</p>
          <button className="w-2/3 px-2 py-1 text-neutral-800 bg-yellow-500 hover:bg-neutral-800 hover:text-yellow-500 transition-all">
            add to basket
          </button>
        </div>
      ))}
      <div className="w-full">
        <button className="text-black-500 w-full flex justify-end items-center hover:text-zinc-600">
          show more <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
      </div>
    </div>
  );
};
export default ProductsShowCase;
