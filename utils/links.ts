interface NavigationLinks {
  href: string;
  label: string;
}

interface FooterLinks {
  href: string;
  label: string;
}

export const links: NavigationLinks[] = [
  { href: "/", label: "home" },
  { href: "/favorites ", label: "favorites" },
  { href: "/bookings ", label: "bookings" },
  { href: "/reviews ", label: "reviews" },
  { href: "/rentals/create ", label: "create rental" },
  { href: "/rentals", label: "my rentals" },
  { href: "/profile ", label: "profile" },
];

export const footer_links: FooterLinks[] = [
  { href: "/", label: "how it works" },
  { href: "/", label: "featured" },
  { href: "/", label: "partnership" },
  { href: "/", label: "investor relations" },
];
