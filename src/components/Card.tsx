import type { Product } from "../types";

type CardProps = Pick<Product, "title" | "category" | "price" | "image">;

function Card({ title, category, price, image }: CardProps) {
  return (
    <div className="bg-white size-80 border border-gray-300 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col ">
      <img
        src={image}
        alt={title}
        className="h-32 w-full object-contain bg-bg-alt p-4"
      />
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-dark line-clamp-2">
          {title}
        </h2>
        <p className="text-sm text-gray-one mt-1">{category}</p>
        <div className="flex items-center justify-between mt-auto">
          <h4 className="text-primary font-bold text-xl">${price}</h4>
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
