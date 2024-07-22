import React, { forwardRef, useRef } from "react";
import styles from "./MyButton.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const MyButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const rippleRef = useRef<HTMLSpanElement>(null);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add(styles.ripple);

    const rippleContainer = button.getElementsByClassName(styles.ripple)[0];

    if (rippleContainer) {
      rippleContainer.remove();
    }

    button.appendChild(ripple);
  };

  return (
    
    <button
      ref={ref}
      {...props}
      className={`${styles.button} ${props.className}`}
      onClick={(e) => {
        createRipple(e);
        props.onClick && props.onClick(e);
      }}
    >
      {props.children}
      <span ref={rippleRef} className={styles.ripple}></span>
    </button>
  );
});

MyButton.displayName = "MyButton";

export default MyButton;
