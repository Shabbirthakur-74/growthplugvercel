import type { Metadata } from "next"
import "./globals.css"
import { Poppins } from "next/font/google"; 
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GrowthPlug | Digital Marketing Agency",
  description:
    "GrowthPlug helps businesses grow with SEO, paid ads, and conversion-focused digital marketing strategies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
