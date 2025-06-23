import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import {Roboto} from "next/font/google"
import "./globals.css"

export const roboto = Roboto({
    weight:["300","500","900"],
    style:["normal"]
})
export default function RootLayout({children}:{children:ReactNode}){
    return (
      <html lang="es">
      <body className={roboto.className}>
        <header>
           <Navbar/>
        </header>        
        <main>{children}</main>
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
    
    )
}