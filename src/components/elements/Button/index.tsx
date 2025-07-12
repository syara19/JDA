import Link from "next/link";
import { JSX, useMemo } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({type="button" ,href, children,className, isLoading,  disabled,...props}:{type?:"submit"|"button",href?:string,children?:string|JSX.Element,className?:string,isLoading?:boolean, disabled?:boolean}):JSX.Element {
const finalClassName = useMemo(()=> twMerge("btn btn-primary", className),[className])

    if(href){
        return(
            <Link href={href} aria-disabled={disabled}>
        <button type="button" className={className} {...props}>
          {children}
        </button>
      </Link>
        )
    }
    return (
        <button
      type={type}
      className={finalClassName}
      disabled={disabled|| isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="loading loading-spinner" />
        </>
      ) : (
        children
      )}
    </button>
    );
}