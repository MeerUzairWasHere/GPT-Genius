import Link from "next/link";
const links = [
  { href: "/chat", label: "chat" },
  { href: "/tours", label: "tours" },
  { href: "/tours/new-tour", label: "new tour" },
  { href: "/profile", label: "profile" },
];

const Navlinks = () => {
  return (
    <ul className="menu text-base-content">
      {links.map((link) => {
        return (
          <li key={link.label}>
            <Link className=" capitalize" href={link.href}>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Navlinks;
