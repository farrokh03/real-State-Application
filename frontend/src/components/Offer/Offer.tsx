import { Link } from "react-router-dom";

const Offers = (props) => {
  return (
    <Link
      className={`${props.width} ${props.height} bg-neutral-800`}
      to="/shop"
    >
      <div className="w-full overflow-hidden  relative h-full ">
        <img
          className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-all"
          src={props.src}
          alt="offers"
        />
        <div className="bg-black p-5  rotate-25 bottom-1/5 flex justify-around w-100 -translate-x-15  text-yellow-300 inset-x-0 text-3xl absolute">
          SPECIAL OFFER 80%
        </div>
      </div>
    </Link>
  );
};
export default Offers;
