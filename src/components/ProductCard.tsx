import { ProductCardProps } from "@/types/produc";
import Image from "next/image";
import iconHeart from "../../public/icons-header/icon-heart.svg";
import { formatPrice } from "@/utils/formatPrice";
import StarRating from "./StarRating";

const cardDiscountPercent = 6;

function ProductCard({
  img,
  description,
  basePrice,
  discountPercent = 0,
  rating,
  categories,
}: ProductCardProps) {
  const calculateFinalPrice = (price: number, discaunt: number): number => {
    return discaunt > 0 ? price * (1 - discaunt / 100) : price;
  };

  const calculatePriceByCard = (price: number, discaunt: number): number => {
    return calculateFinalPrice(price, discaunt);
  };

  const isNewProduct = categories?.includes("new");

  const finalPrice = isNewProduct
    ? basePrice
    : calculateFinalPrice(basePrice, discountPercent);

  const priceByCard = isNewProduct
    ? basePrice
    : calculatePriceByCard(finalPrice, cardDiscountPercent);

  return (
    <div
      className="flex flex-col justify-between w-40 rounded overflow-hidden
              bg-white md:w-[224px] xl:w-[272px] align-top p-0 
              hover:shadow-(--shadow-article)"
    >
      <div className="relative w-40 h-40 md:w-[224px] xl:w-[272px]">
        <Image
          src={img}
          alt="Акция"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 160px, (max-width: 1200px) 224px, 272px"
        />
        <button
          className="w-8  h-8 p-2 bg-[#f3f2f1] hover:bg-[#fcd5ba] 
                right-2 opacity-50 cursor-pointer duration-300 absolute top-0"
        >
          <Image
            src={iconHeart}
            alt="В изюранное"
            width={24}
            height={24}
            sizes="24px"
          />
        </button>
        {discountPercent > 0 && (
          <div
            className="absolute bg-[#ff6633] py-1 px-2 rounded text-white bottom-2.5
              left-2.5"
          >
            -{discountPercent}%
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between p-2 gap-y-2">
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col gap-x-1">
            <div className="flex flex-row gap-x-1 text-sm md:text-lg font-bold text-[#414141]">
              <span>{formatPrice(priceByCard)}</span>
              <span>₽</span>
            </div>
            {discountPercent > 0 && (
              <p className="text-[#bfbfbf] text-[8px] md:text-xs">С картой</p>
            )}
          </div>

          {finalPrice !== basePrice && cardDiscountPercent > 0 && (
            <div className="flex flex-col gap-x-1">
              <div className="flex flex-row gap-x-1 text-xs md:text-base text-[#606060]">
                <span>{formatPrice(finalPrice)}</span>
                <span>₽</span>
              </div>
              <p className="text-[#bfbfbf] text-[8px] md:text-xs text-right">
                Обычная
              </p>
            </div>
          )}
        </div>
        <div
          className="h-13.5 text-xs md:text-base text-[#414141] line-clamp-3
              md:line-clamp-2 leading-[1.5]"
        >
          {description}
        </div>
        {rating > 0 && <StarRating rating={rating} />}
        <button
          className="border border-(--color-primary) hover:text-white
        hover:bg-[#ff6633] hover:border-transparent active:shadow-(--shadow-button-active)
        w-full h-10 rounded p-2 justify-center items-center text-(--color-primary)
        transition-all duration-300 cursor-pointer select-none"
        >
          В корзину
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
