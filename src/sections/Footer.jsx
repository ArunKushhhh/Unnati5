import React from "react";
import "./Footer.css";
import Button from "../ui/Button";

function Footer() {
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
    <div className="md:w-[80%]">
      <div className="page-wrapper">
        <main className="hero-section">
          <div className="flex flex-col items-center gap-6 hero-content">
            <h1 className="text-white">
              It's time to work <br />
              differently.
            </h1>
            <div className="flex flex-col items-center justify-center md:flex-row gap-4">
              <Button
                label={"Register Now"}
                showChevron={true}
                btnbg={"bg-white"}
                textColor={"text-black"}
                chevronColor="text-white"
                chevBg="bg-black"
                to={"/form"}
                px={"px-2"}
                py={"py-2"}
              />
              <Button
                label={"Download Rulebook"}
                showChevron={true}
                btnbg={"bg-black"}
                textColor={"text-white"}
                to={
                  "https://drive.google.com/drive/folders/1cnk5o6rHvsW_ieuUkV_Wg50rxaT1cCr4?usp=sharing"
                }
                px={"px-2"}
                py={"py-2"}
              />
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-header">
              <p className="font-aquire">Unnati</p>
              <p className="hidden sm:flex">Thrive in Chaos, Lead the Game</p>
            </div>
            <hr />
            <div className="footer-top">
              <div className="footer-column">
                <h4>SECTIONS</h4>
                <ul>
                  <li>
                    <a
                      href="#home"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection("#home");
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#prizes"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection("#prizes");
                      }}
                    >
                      Prizes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#rules"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection("#rules");
                      }}
                    >
                      Rules
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection("#faq");
                      }}
                    >
                      FAQs
                    </a>
                  </li>
                  {/* <li>
                    <a href="#clutter">Escape the clutter</a>
                  </li> */}
                </ul>
              </div>
              <div className="footer-column">
                <h4>SOCIAL MEDIA</h4>
                <ul>
                  <li>
                    <a href="https://www.instagram.com/ecell_ait/">Instagram</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/ecell_aitpune">Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/ecellait/">Facebook</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/innovation-entrepreneurship-cell/mycompany/">
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>WEBSITE</h4>
                <ul>
                  <li>
                    <a href="http://aitecell.in">I&E Cell</a>
                  </li>
                </ul>
              </div>
            </div>

            <hr />
            <div className="w-full items-center flex justify-between">
              <p>~Creating Synergy</p>
              <p>Team I&E Cell❤️</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
