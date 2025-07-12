import { JSX } from "react";
import Button from "@/components/elements/Button";

export default function Navbar():JSX.Element{
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
               <Button className="btn btn-ghost text-xl" href="/">Home</Button>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a>Item 1</a></li> */}
                    <li><Button href="/about">About</Button></li>
                </ul>
            </div>
        </div>
    )
}