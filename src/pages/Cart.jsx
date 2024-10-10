import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { AppContext } from "@/context/AppContext";
import { FaShoppingBag, FaTrash } from "react-icons/fa";
import Subscribe from "@/components/Home/Subscribe";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_TEST);

console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_TEST);

export default function Cart() {
  const { getCart, updateCartItem, removeFromCart, cart } =
    useContext(AppContext);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCart();
    setCartItems(cart);
  }, [cart]);

  console.log(cartItems);

  const handleQtyChange = (productId, size, newQty) => {
    if (newQty < 1) return;
    updateCartItem(productId, size, newQty);
  };

  const handleRemove = (productId, size) => {
    removeFromCart(productId, size);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.precio * item.qty,
    0
  );

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: cart.map(item => ({
          name: item.product.nombre,
          price: item.product.precio,
          quantity: item.qty,
          image: item.product.imagenes[0].asset.url
        })),
      }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <>
    <div className="p-4 w-full flex flex-col lg:flex-row max-w-[1440px] min-w-sm mx-auto">
      <div className="lg:w-2/3 h-full flex flex-col">
        <h1 className="text-3xl font-anton uppercase mb-6 pt-1">
          Bolsa de Compra ({cartItems.length})
        </h1>

        <div className="flex flex-col">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center  border-b py-4"
            >
              <div className="w-[100px] h-[148px] lg:w-20 lg:h-20">
                <Image
                  src={item.product.imagenes[0].asset.url}
                  alt={item.product.nombre}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col lg:flex-row">
                <div className=" px-4 text-left">
                  <h3 className="font-anton underline text-[17px] uppercase">
                    {item?.product?.nombre}
                  </h3>
                  <p className="text-[16px] font-gabarito">
                    Talla: {item.size}
                  </p>
                </div>

                <p className="font-bold font-gabarito text-[20px] text-left pl-[16px]">
                  ${item.product.precio} MXN
                </p>

                <div className="flex  items-center pl-[16px] gap-4 ">
                  <div className="w-[123px] h-[38px] border-[1px] border-black720 flex justify-around items-center font-gabarito text-[16px] mt-2 lg:mt-0">
                    <span
                      className="cursor-pointer"
                      onClick={() =>
                        handleQtyChange(
                          item.product._id,
                          item.size,
                          item.qty - 1
                        )
                      }
                    >
                      -
                    </span>
                    <span>{item.qty}</span>
                    <span
                      className="cursor-pointer"
                      onClick={() =>
                        handleQtyChange(
                          item.product._id,
                          item.size,
                          item.qty + 1
                        )
                      }
                    >
                      +
                    </span>
                  </div>
                  <FaTrash
                    className="cursor-pointer"
                    onClick={() => handleRemove(item.product._id, item.size)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-1/3 flex flex-col  mt-8 lg:mt-0 lg:pl-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[16px] lg:text-[30px] font-anton uppercase">
            Subtotal
          </h3>
          <p className="text-[18px] lg:text-[28px] font-gabarito font-bold">
            ${subtotal} MXN
          </p>
        </div>

        <div className="p-4 w-full flex flex-col items-center  ">
          <button className="w-[224px] h-[27px] lg:w-full lg:h-[50px] bg-black text-white uppercase text-center font-anton rounded-[28px] text-[16px] lg:text-[30px] flex justify-center items-center gap-2"
          onClick={handleCheckout}
          >
            <FaShoppingBag />
            Realizar Pago
          </button>

          <p className="text-[10px] font-gabarito mt-2">
            * Envío, impuestos y descuentos se calcularán al completar la
            compra.
          </p>
        </div>

        {/* <Link href="/shop">
          <button className="w-full mt-5 py-2 border border-black uppercase text-center">
            Seguir Comprando
          </button>
        </Link> */}
      </div>
    </div>
    <Subscribe/>
    </>
  );
}
