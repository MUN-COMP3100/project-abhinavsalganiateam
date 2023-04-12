import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export let navLinks = [
  {
    title: "Up Coming",
    // path: "/",
    scrollTo: "upcoming",
    offset: -80,
    scroll: true,
    isDynamic: false,
    smooth: true,
    duration: 1000,
  },
  { title: "Popular", scrollTo: "popular", offset: -80, scroll: true, isDynamic: false, smooth: true, duration: 1000 },
  { title: "TV Shows", path: "/tv" },
  { title: "Movies", path: "/movies" },
  { title: "Login/SginUp", path: "/auth" },
];

export const socialLinks = [
  { title: "Twitter", path: "https://twitter.com/yourusername", icon: FaTwitter },
  { title: "Instagram", path: "https://instagram.com/bandumanamperi", icon: FaInstagram },
  { title: "Facebook", path: "https://facebook.com/bandumanamperi", icon: FaFacebook },
];
