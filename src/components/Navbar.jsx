import React from "react";
import Logo from "../ui/Logo";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";
// import Navtab from "../ui/Navtab";

const navItems = [
  {
    name: "Home",
    id: "#home",
  },
  {
    name: "Usual College Routine",
    id: "#routine",
  },
  {
    name: "Escape",
    id: "#clutter",
  },
  {
    name: "Prizes",
    id: "#prizes",
  },
  {
    name: "Rules",
    id: "#rules",
  },
  {
    name: "FAQs",
    id: "#faq",
  },
  // {
  //   name: "Team",
  //   chevron: true,
  //   id: "#team",
  // },
  // {
  //   name: "Gallery",
  //   id: "#gallery",
  // },
];

const Navbar = () => {
  const handleContactUs = () => {
    window.location.href = "mailto:ecellait@gmail.com";
  };

  const handleScrollToSection = (sectionId) => {
    // Remove the # from the id to get the element ID
    const elementId = sectionId.substring(1);
    const element = document.getElementById(elementId);

    if (element) {
      // Calculate offset to account for sticky navbar
      const navbarHeight = 100; // Adjust this value based on your navbar height + desired spacing
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      // Fallback: scroll to top if element not found and id is #home
      if (sectionId === "#home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="w-full lg:w-[70%] md:mx-[15%] flex justify-between items-center px-6 lg:px-1 py-1 bg-white/80 shadow-none hover:shadow-xl transition-all duration-200 rounded-2xl sticky top-8 z-50 text-sm backdrop-blur-md">
      <div className="flex justify-center items-center gap-4">
        <Logo />
        <div className="h-5 w-[1px] bg-black/10"></div>
        <nav className="hidden lg:flex font-medium gap-0 items-center justify-center text-sm text-black/90">
          {navItems.map((item) => (
            <div
              className="flex items-center gap-2 cursor-pointer hover:bg-slate-100 px-4 py-3 rounded-md transition-all duration-300 group"
              key={item.id}
              onClick={() => handleScrollToSection(item.id)}
            >
              {item.name}

              {item.chevron && (
                <ChevronDown
                  className="text-slate-400 group-hover:rotate-180 transition-all duration-300"
                  size={14}
                />
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div
          onClick={handleContactUs}
          className="hidden md:flex bg-none hover:bg-slate-100 px-4 py-3 rounded-md transition-all duration-300 cursor-pointer font-medium"
        >
          Contact Us
        </div>
        <div className="h-5 w-[1px] bg-black/10"></div>
        <Button
          label={"Register"}
          btnbg={"bg-slate-100"}
          to={"/form"}
          px={"px-5"}
          py={"py-3"}
        />
        <Button
          label={"I&E Cell"}
          showChevron={true}
          btnbg={"bg-black"}
          textColor={"text-white"}
          to={"https://www.aitecell.in/"}
          px={"px-2"}
          py={"py-2"}
        />
      </div>
    </header>
  );
};

export default Navbar;
