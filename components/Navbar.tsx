import Link from "next/link";

export default function Navbar(){
    return ( <nav>
          <h4>Header</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">about</Link></li>
            <li><Link href="/about/me">me</Link></li>
            <li><Link href="/post">post</Link></li>
            </ul>
          </nav>)
}