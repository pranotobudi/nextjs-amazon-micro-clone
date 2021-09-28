module.exports = {
    images: {
        domains: ["links.papareact.com", "fakestoreapi.com"]
    }, 
    env: {
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
        paypal_client_id: process.env.PAYPAL_CLIENT_ID,
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Fixes npm packages that depend on `fs` module
        // if (!isServer) {
          config.node = {
            fs: 'empty'
          }
        // }
    
        return config
    }
}