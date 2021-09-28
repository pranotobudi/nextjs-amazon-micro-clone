import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux"
import {addToBasket, removeFromBasket} from "../slices/basketSlice";

function PaymentProduct({id, title, price, rating, description, category, image, hasPrime}) {
    const dispatch = useDispatch();

    return (
        <div className='grid grid-cols-3'>
            {/* Left */}
            <Image src={image} height={200} width={200} objectFit="contain" />
            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <p className="text-xs my-2 line-clamp-3">
                    {description}
                </p>
                <Currency quantity={price} currency="USD"/>
                
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img  
                            className="w-12"
                            src="https://links.papareact.com/fdw"
                            alt=""
                        />
                        <p className="text-xs text-gray-500">FREE Next Day Delivery</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PaymentProduct
