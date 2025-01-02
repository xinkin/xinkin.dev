import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link as TransitionLink } from "next-view-transitions";
import { forwardRef } from "react";

type LinkProps = NextLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
 const { href, ...rest } = props;

 if (typeof href === "string" && href.startsWith("#")) {
  return <NextLink {...rest} href={href} ref={ref} />;
 }

 return <TransitionLink {...rest} href={href} ref={ref} />;
});

export default Link;
