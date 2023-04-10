import { FaFacebook, FaPhoneAlt, FaInstagram, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const navLinks = [
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
  { title: "TV Shows", scrollTo: "About", offset: 0, scroll: false, isDynamic: false, smooth: true, duration: 1000 },
  { title: "Movies", scrollTo: "Skills", offset: 0, scroll: false, isDynamic: false, smooth: true, duration: 1000 },
  { title: "Login/SginUp", path: "/auth" },
];

export const socialLinks = [
  { title: "Twitter", path: "https://twitter.com/yourusername", icon: FaTwitter },
  { title: "Instagram", path: "https://instagram.com/bandumanamperi", icon: FaInstagram },
  { title: "Facebook", path: "https://facebook.com/bandumanamperi", icon: FaFacebook },
];

export const contacts = [
  {
    title: "Email",
    class: "px-0 pb-1 gap-1 flex items-center",
    path: "mailto:bandumanamperi@yahoo.com",
    icon: HiOutlineMail,
    iconSize: 15,
    desc: "bandumanamperi@yahoo.com",
  },
  {
    title: "Phone",
    class: "px-0 pb-1 gap-1 flex items-center",
    path: "tel:+94773672789",
    icon: FaPhoneAlt,
    iconSize: 15,
    desc: "+94773672789",
  },
  {
    title: "Address",
    class: "px-0 pb-1 gap-1 flex items-center",
    path: "https://goo.gl/maps/1Q9Z9Z9Z9Z9Z9Z9Z9",
    icon: FaMapMarkerAlt,
    iconSize: 25,
    desc: "67A1,Ihalawatta Delgaswatta Temple Road , Weedagama, Bandaragama , Western Province , Sri Lanka",
  },
];
