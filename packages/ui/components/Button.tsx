import React, { ReactNode } from "react";
import classNames from "classnames";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={classNames(
          "border border-gray-200 px-3 py-1.5 rounded-md",
          className
        )}
      >
        {children}
      </button>
    );
  }
);

export default Button;
