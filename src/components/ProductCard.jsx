import imageMobile from "../images/image-product-mobile.jpg";
import imageDesktop from "../images/image-product-desktop.jpg";
import iconCart from "../images/icon-cart.svg";

const ProductCard = () => {
  return (
    <section className="min-[376px]:flex py-8 px-4 h-screen w-screen justify-center items-center">
      <div className="min-[376px]:w-[39em]">
        <div className="rounded-lg min-[376px]:grid grid-cols-2">
          <div>
            <img
              src={imageMobile}
              alt="product-image"
              className="object-contain rounded-t-lg min-[376px]:hidden"
            />

            <img
              src={imageDesktop}
              alt="product-image"
              className="h-full object-cover rounded-tl-lg rounded-bl-lg max-[375px]:hidden"
            />
          </div>

          <div className="bg-white p-6 max-[375px]:rounded-b-lg min-[376px]:rounded-tr-lg min-[376px]:rounded-br-xl">
            <p className="uppercase color1 perfume-letter-spancing">Perfume</p>
            <h1 className="text-3xl color3 my-3 font-bold font-fraunces  leading-none">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="leading-normal color1 mb-5">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL
            </p>

            <div className="flex items-center gap-x-4 mb-4">
              <h1 className="text-3xl font-bold font-fraunces  color2">
                $149.99
              </h1>
              <p className="color1 line-through">$169.99</p>
            </div>

            <button className="bg1 text-white w-full p-3 rounded-md font-semibold flex items-center justify-center gap-1 hover:bg-green-950">
              <img src={iconCart} alt="cart-icon" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
