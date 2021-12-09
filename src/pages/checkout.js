import Image from "next/image"
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice"
import CheckoutProduct from "../components/CheckoutProduct"
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";
import {useRouter} from "next/router";
// import { useState } from "react";

// var paypal;
// import { loadStripe } from "@stripe/stripe-js";  
// import axios from "axios";

// const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();
    const router = useRouter();
    // const [payment, setPayment] = useState(false);
    // const [mobile, setMobile] = useState('')
    // const [address, setAddress] = useState('')

    // const handlePayment = () => {

    //     setPayment(true)
    // }

    // const [paidFor, setPaidFor] = useState(false);
    // const [loaded, setLoaded] = useState(false);
    
    // const createCheckoutSession = async () => {
    //     // const stripe = await stripePromise;
    //     // call backend to create a checkout session
    //     const checkoutSession = await axios.post('/api/create-checkout-session', {
    //         items: items,
    //         email: session.user.email
    //     })

    //     //redirect customer to checkout page
    //     const result = await stripe.redirectToCheckout({
    //         sessionId: checkoutSession.data.id
    //     })

    //     if (result.error){
    //         alert(result.error.message);
    //     }
    // }
    // let paypalRef = useRef();
    // const addPaypalScript = () => {
    //     console.log("I'm in addPaypalScript")
    //     const script = document.createElement("script");
    //     script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.paypal_client_id}`;
    //     // script.type="text/javascript";
    //     // script.async=true;
    //     script.addEventListener("load", () => setLoaded(true));
    //     document.body.appendChild(script);

    //     if(loaded){
    //         setTimeout(() => {
    //             window.paypal
    //             .Buttons({
    //                 createOrder: (data, actions) => {
    //                     return actions.order.create({
    //                         purchase_units: [
    //                             {
    //                                 description: product.description,
    //                                 amount: {
    //                                     currency_code: "USD",
    //                                     value: product.price
    //                                 }
    //                             }
    //                         ]
    //                     })
    //                 }
    //             })
    //             .render(paypalRef);
    //         });
    //     }
    // }
    // useEffect(() => {
    //     addPaypalScript()
    // }, [])

    return (
        <div className="bg-gray-100">
            {/* <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.paypal_client_id}`}></script> */}
                    
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* Left */}  
                <div>
                    <Image 
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />

                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length==0 ? `Your amazon basket is empty.`: `Shopping Basket`}
                        </h1>

                        {items.map((item, i)=>(
                            <CheckoutProduct 
                                key = {i}
                                id = {item.id}
                                title = {item.title}
                                price = {item.price}
                                rating = {item.rating}
                                description = {item.description}
                                category = {item.category}
                                image = {item.image}
                                hasPrime = {item.hasPrime}
                            />
                        ))}

                    </div>
                </div>
                {/* Right */}  
                <div className="flex flex-col bg-white p-10 shadow-md">
                    { (items.length > 0) &&  
                    <div>
                        <h2 className="whitespace-nowrap">
                            Subtotal ({items.length} items): {" "}
                            <span className="font-bold">
                            <Currency quantity={total} currency="USD" />
                            </span>                       
                        </h2>

                        <button 
                            role="link"
                            onClick={()=>router.push("/paypalcheckout","/payment")}
                            disabled={!session}
                            className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}
                        
                        >

                            {!session ? "Sign in to Checkout": "Proceed To Checkout"}
                        </button>
                    </div>
                    }
                </div>
                </main>

        </div>
    )
}

export default Checkout