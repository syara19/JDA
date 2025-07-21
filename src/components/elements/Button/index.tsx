import Link from "next/link";
import { JSX, useMemo } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({
  type = "button", title, href, children, className, isLoading, disabled, onClick, ...props }: {
    type?: "submit" | "button", href?: string, children?: string | JSX.Element, title?: string, className?: string, isLoading?: boolean, disabled?: boolean, onClick?: () => void
  }): JSX.Element {

  const finalClassName = useMemo(() => twMerge("btn ", className), [className])


  if (href) {
    return (
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
      disabled={disabled || isLoading}
      onClick={onClick}
      title={title}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="loading loading-spinner " />
        </>
      ) : (
        children
      )}
    </button>
  );
}