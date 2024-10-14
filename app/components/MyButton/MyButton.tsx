"use client";

import React, { forwardRef, useRef } from "react";
import Link from "next/link";
import styles from "./MyButton.module.scss";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: ButtonVariant;
}

const MyButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, href, className, variant = "primary", ...props }, ref) => {
    const rippleRef = useRef<HTMLSpanElement>(null);

    const createRipple = (
      event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
    ) => {
      const element = event.currentTarget as HTMLElement;
      const ripple = document.createElement("span");
      const diameter = Math.max(element.clientWidth, element.clientHeight);
      const radius = diameter / 2;

      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${
        event.clientX - element.getBoundingClientRect().left - radius
      }px`;
      ripple.style.top = `${
        event.clientY - element.getBoundingClientRect().top - radius
      }px`;
      ripple.classList.add(styles.ripple);

      const rippleContainer = element.getElementsByClassName(styles.ripple)[0];

      if (rippleContainer) {
        rippleContainer.remove();
      }

      element.appendChild(ripple);
    };

    const combinedClassName = `${styles.button} ${styles[variant]} ${
      className || ""
    }`;

    if (href) {
      return (
        <Link
          href={href}
          className={combinedClassName}
          onClick={(e) => {
            createRipple(e as any);
            props.onClick && props.onClick(e);
          }}
          {...props}
        >
          {children}
          <span className={styles.ripple}></span>
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        onClick={(e) => {
          createRipple(e);
          props.onClick && props.onClick(e);
        }}
        {...props}
      >
        {children}
        <span className={styles.ripple}></span>
      </button>
    );
  }
);

MyButton.displayName = "MyButton";

export default MyButton;
