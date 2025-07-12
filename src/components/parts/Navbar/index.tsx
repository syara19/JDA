import { JSX } from "react";
import Button from "@/components/elements/Button";
import Image from "next/image";

export default function Navbar():JSX.Element{
    return (
        <div className="navbar flex justify-around bg-base-100 mb-10">
            <div className="">
               <Button className="hover:cursor-pointer" href="/">
                <Image src="/logo.png" width={50} height={50} alt="logo" />
               </Button>
            </div>
            <div className="">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a>Item 1</a></li> */}
                    <li><Button href="/products/clothings">Clothings</Button></li>
                    <li className="mx-3"><Button href="/products/electronics">Electronics</Button></li>
                    <li><Button href="/products/accessories">Accessories</Button></li>

                </ul>

            </div>
            <Button href="/about">About</Button>
        </div>
    )
}