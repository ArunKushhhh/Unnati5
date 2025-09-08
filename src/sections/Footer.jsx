import React from "react";
import "./Footer.css";
import Button from "../ui/Button";

function Footer() {
  return (
    <div>
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
              <a href="#" className="footer-logo-link">
                <img
                  src="https://whimsical.com/_next/static/media/logo@110x20.4af50444.svg"
                  alt="Whimsical Logo"
                />
              </a>
              <span className="copyright">© 2025 Whimsical, Inc.</span>
            </div>
            <hr />
            <div className="footer-top">
              <div className="footer-column">
                <h4>TOOLS</h4>
                <ul>
                  <li>
                    <a href="#">Boards</a>
                  </li>
                  <li>
                    <a href="#">Docs</a>
                  </li>
                  <li>
                    <a href="#">Posts</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">Whimsical AI</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>RESOURCES</h4>
                <ul>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Compare</a>
                  </li>
                  <li>
                    <a href="#">Customers</a>
                  </li>
                  <li>
                    <a href="#">Product updates</a>
                  </li>
                  <li>
                    <a href="#">Slack integration</a>
                  </li>
                  <li>
                    <a href="#">Templates</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>SOLUTIONS</h4>
                <ul>
                  <li>
                    <a href="#">Agencies</a>
                  </li>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">Engineering</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">Product</a>
                  </li>
                  <li>
                    <a href="#">Startups</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>GET WHIMSICAL</h4>
                <ul>
                  <li>
                    <a href="#">Contact sales</a>
                  </li>
                  <li>
                    <a href="#">Download</a>
                  </li>
                  <li>
                    <a href="#">Log in</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Sign up</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>SUPPORT</h4>
                <ul>
                  <li>
                    <a href="#">Contact support</a>
                  </li>
                  <li>
                    <a href="#">Help center</a>
                  </li>
                  <li>
                    <a href="#">Status</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="footer-middle">
              <span className="compare-title">COMPARE:</span>
              <div className="compare-links">
                <a href="#">Asana</a> · <a href="#">Basecamp</a> ·{" "}
                <a href="#">ClickUp</a> · <a href="#">Coda</a> ·{" "}
                <a href="#">Confluence</a> · <a href="#">FigJam</a> ·{" "}
                <a href="#">Jira</a> · <a href="#">Linear</a> ·{" "}
                <a href="#">Lucidchart</a> · <a href="#">Lucidspark</a> ·{" "}
                <a href="#">Miro</a> · <a href="#">Monday</a>{" "}
                <a href="#">Mural</a> · <a href="#">Notion</a> ·{" "}
                <a href="#">Shortcut</a> · <a href="#">Trello</a>
              </div>
            </div>
            <hr />
            <div className="footer-bottom">
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 1.25C5.168 1.25 1.25 5.168 1.25 10s3.918 8.75 8.75 8.75 8.75-3.918 8.75-8.75S14.832 1.25 10 1.25zM7.887 6.058a1.13 1.13 0 01-1.13 1.13 1.13 1.13 0 01-1.132-1.13c0-.623.508-1.13 1.13-1.13.624 0 1.132.507 1.132 1.13zM5.78 7.892h2v5.858h-2V7.892zm4.275 3.868c0-2.07 1.02-2.976 2.493-2.976 1.254 0 1.769.706 1.769 1.71v4.113h-2V10.97c0-.472 0-.943-.623-.943-.624 0-.743.471-.743 1.06v2.66h-2V8.643h2v.75h-.002c.324-.412.947-.868 1.947-.868z" />
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="X">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 1c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zM6.294 14.5h.79l2.45-3.495L12.18 14.5h2.327L9.014 10.504 14.5 5.5h-2.328l-3.21 4.29-2.73-4.29H5.5l4.354 5.992L6.294 14.5zm1.5-8.415h1.2l4.83 6.86h-1.2L7.794 6.085z" />
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="YouTube">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 1C5.029 1 1 5.029 1 10s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm3.907 5.665c.43.116.769.457.884.89.209.785.209 2.422.209 2.422s0 1.637-.209 2.422c-.115.433-.454.774-.884.89-.78.21-3.907.21-3.907.21s-3.127 0-3.907-.21c-.43-.116-.769-.457-.884-.89C5 11.615 5 9.977 5 9.977s0-1.637.209-2.422c.115-.433.454-.774.884-.89C6.873 6.455 10 6.455 10 6.455s3.127 0 3.907.21zM8.977 8.49v2.973L11.59 9.977 8.977 8.49z" />
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Threads">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 1c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 8.838c-.5-1.033-1.856-2.96-3.117-3.91-.91-.685-2.384-1.216-2.384 2.89 0 .336.192 2.83.306 3.235.392 1.407 1.823 1.766 3.095 1.55-2.224.38-2.79.638-1.567 1.896 2.32 2.39 3.336-.6 3.595-1.365.048-.142.07-.208.07-.15 0 .058.022.124.07.266.26.765 1.275 3.755 3.595 1.365 1.223-1.258.657-1.516-1.567-1.896 1.272.216 2.703-.143 3.095-1.55.114-.405.306-2.9.306-3.235 0-4.106-1.474-3.575-2.384-2.89-1.26.949-2.617 2.877-3.117 3.91z" />
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Whimsical">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 20 10 20 10-4.477 10-10S15.523 0 10 0zm3.537 8.455c.328-.253.739-.405 1.185-.405v.001c1.074 0 1.945.87 1.945 1.945 0 .775-.454 1.445-1.11 1.757-.061 2.26-2.525 4.078-5.55 4.078-3.027 0-5.487-1.816-5.552-4.074-.662-.31-1.12-.982-1.12-1.76 0-1.075.871-1.946 1.945-1.946.448 0 .86.152 1.189.404.885-.548 2-1.035 3.22-.572v-.008c0-1.154.876-2.106 1.999-2.226.13-.632.689-1.107 1.359-1.107.767 0 1.388.621 1.388 1.388s-.62 1.388-1.388 1.388c-.656 0-1.206-.456-1.35-1.068-.796.113-1.41 1.05-1.41 1.875v.006c1.233.046 2.36.393 3.253 1.03z" />
                  </svg>
                </a>
              </div>
              <div className="footer-links">
                <a href="#">Compliance</a>
                <span>|</span>
                <a href="#">Privacy</a>
                <span>|</span>
                <a href="#">Security</a>
                <span>|</span>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
