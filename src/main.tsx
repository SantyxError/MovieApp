import React from "react"
import ReactDOM from "react-dom/client"
import { Auth0Provider } from "@auth0/auth0-react"
import App from "./App"
import "./styles/index.scss"
import "./styles/reset.scss"

const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN
const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENTID

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider domain={auth0Domain} clientId={auth0ClientId} authorizationParams={{ redirect_uri: window.location.origin }}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
)
