import Link from "next/link";
import "./navbar.css"

export default function Navbar(){
    return ( <nav className="navbar">
          <Link href="/">Curso Next.js</Link>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">about</Link></li>
            <li><Link href="/about/me">me</Link></li>
            <li><Link href="/post">post</Link></li>
            </ul>
          </nav>)
}