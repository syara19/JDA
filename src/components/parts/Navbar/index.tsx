import { JSX } from "react";
import Button from "@/components/elements/Button";
import Image from "next/image";

export default function Navbar(): JSX.Element {
    return (
        <div className="navbar bg-[#013237] text-white flex justify-around ">
            <Button className="hover:cursor-pointer" href="/">
                <Image src="/logo.png" width={50} height={50} alt="logo" />
            </Button>

            <div className="">
                <div className="menu menu-horizontal px-1">
                    <li><Button href="/products/clothings">Clothings</Button></li>
                    <li className="mx-3"><Button href="/products/electronics">Electronics</Button></li>
                    <li><Button href="/products/accessories">Accessories</Button></li>
                </div>
            </div>
            <div className="menu menu-horizontal">
                <li>
                    <Button className="hover:cursor-pointer" href="/about">About</Button>
                </li>
            </div>
        </div>
    )
}