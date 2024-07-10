import Link from "next/link";
import React from "react";
import cx from "classnames";

type ButtonProps = {
  text: string;
  linkTo: string;
  rounded: boolean;
};

const Button = ({ text, linkTo, rounded }: ButtonProps) => {
  const buttonClasses = cx({
    "rounded-full": rounded,
    "rounded-xl": !rounded,
    "bg-teal-600": true,
    "cursor-pointer": true,
    "text-center": true,
    "text-[13px]": true,
    "sm:text-[16px]": true,
    "px-6": true,
    "py-3": true,
    "font-bold": true,
    "bg-gradient-to-r from-purple-700 to-teal-500": true,
  });

  return (
    <Link href={linkTo} className={buttonClasses}>
      {text}
    </Link>
  );
};

export default Button;
