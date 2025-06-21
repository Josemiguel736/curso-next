import Link from "next/link";


export default function NotFound(){
    return (
        <div>
            <h1>Te has perdido</h1>
            <Link href="/" >Volver al inicio</Link>
        </div>
    )
}