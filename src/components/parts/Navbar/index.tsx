import { JSX } from "react";
import Button from "@/components/elements/Button";
import Image from "next/image";
import Cart from "@/components/parts/Cart";

export default function Navbar(): JSX.Element {
    return (
        <div className="navbar bg-[#013237] text-white flex justify-around ">
            <Button className="hover:cursor-pointer" href="/">
                <Image className="rounded-sm" src="/logo.png" width={50} height={50} alt="logo" />
            </Button>

            <div className="menu menu-horizontal  items-center px-1">
                <li><Button className="btn btn-ghost hover:bg-[#014a52] hover:text-white" href="/products/clothings">Clothings</Button></li>
                <li className="btn mx-2 btn-ghost hover:bg-[#014a52] hover:text-white "><Button href="/products/electronics">Electronics</Button></li>
                <li><Button className="btn btn-ghost hover:bg-[#014a52] hover:text-white" href="/products/accessories">Accessories</Button></li>
            </div>
            <div className="menu menu-horizontal">
                {/* <li>
                    <Button className="hover:cursor-pointer" href="/about">About</Button>
                </li> */}
                <li>
                    <Cart />
                </li>
            </div>
        </div>
    )
}