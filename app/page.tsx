import ButtonNumber from "@/components/ButtonNumber"


export const metadata = {
    title: "home Mi tienda con next.js",
    description: "Esta es la página principal de mi tienda",
    keywords: "shop,next.js"
}

export default function HomePage(){
    return (<section>
        <h1>Hello World</h1>
        <ButtonNumber/>
        </section>)
}