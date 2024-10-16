import {cx} from "cva";
import {type ComponentProps} from "react";

export const icons = {
  AccordionBottom: "/icons/accordion-bottom.svg",
  AccordionLeft: "/icons/accordion-left.svg",
  AccordionRight: "/icons/accordion-right.svg",
  AccordionTop: "/icons/accordion-top.svg",
  ArrowLeft: "/icons/arrow-left-primary.svg",
  ArrowLeftAccent: "/icons/arrow-left-accent.svg",
  ArrowRight: "/icons/arrow-right-primary.svg",
  ArrowRightAccent: "/icons/arrow-right-accent.svg",
  Cart: "/icons/cart.svg",
  Close: "/icons/close.svg",
  Ellips: "/icons/ellips-accent.svg",
  Hamburger: "/icons/hamburger.svg",
  LoadingAccent: "/icons/loading-accent.svg",
  LoadingPrimary: "/icons/loading-primary.svg",
  Search: "/icons/search.svg",
  Trash: "/icons/trash.svg",
};

type Icon = keyof typeof icons;

export const iconAlts: Record<Icon, string> = {
  AccordionBottom: "Accordion Bottom",
  AccordionLeft: "Accordion Left",
  AccordionRight: "Accordion Right",
  AccordionTop: "Accordion Top",
  ArrowLeft: "Arrow Left",
  ArrowLeftAccent: "Arrow Left Accent",
  ArrowRight: "Arrow Right",
  ArrowRightAccent: "Arrow Right Accent",
  Cart: "Shopping Cart",
  Close: "Close",
  Ellips: "Ellipse",
  Hamburger: "Menu",
  LoadingAccent: "Loading",
  LoadingPrimary: "Loading",
  Search: "Search icon",
  Trash: "Trash icon",
};

export type IconProps = {name: Icon} & Omit<
  ComponentProps<"img">,
  "alt" | "sizes" | "src" | "srcSet"
>;

export default function Icon({className, name, ...rest}: IconProps) {
  return (
    <img
      alt={iconAlts[name]}
      className={cx(className)}
      src={icons[name]}
      {...rest}
    />
  );
}
