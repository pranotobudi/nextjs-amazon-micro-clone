import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import {Provider as AuthProvider} from "next-auth/client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const MyApp = ({ Component, pageProps }) => {
  return (
    <PayPalScriptProvider options= {{"client-id": process.env.paypal_client_id }}>
      <AuthProvider session={pageProps.session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </PayPalScriptProvider>
  )
}

export default MyApp
