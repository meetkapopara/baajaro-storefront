import { Metadata } from "next"
import { retrieveCart } from "@lib/data/cart"
import { getCustomer } from "@lib/data/customer"
import { getBaseURL } from "@lib/util/env"
import Nav from "@modules/layout/templates/nav"
import Footer from "@modules/layout/templates/footer"
import AgeVerification from "@modules/common/age-verification"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "BAAJARO - Premium Vaping Products",
  description: "Discover premium vaping products and accessories at BAAJARO.",
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  const customer = await getCustomer()
  const cart = await retrieveCart()

  return (
    <div className="">
      <AgeVerification />
      <Nav />
      <main className="relative">{props.children}</main>
      <Footer />
    </div>
  )
}