module.exports = {
    images: {
        domains: ["links.papareact.com", "fakestoreapi.com"]
    }, 
    env: {
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
        paypal_client_id: process.env.PAYPAL_CLIENT_ID,
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
            config.resolve.fallback = {
                fs: false, 
                "zlib": false
            }
        }

        return config;
    }

}