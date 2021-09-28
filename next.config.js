module.exports = {
    images: {
        domains: ["links.papareact.com", "fakestoreapi.com"]
    }, 
    env: {
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
        paypal_client_id: process.env.PAYPAL_CLIENT_ID,
    }
}