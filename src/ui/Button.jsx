import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Button = ({
  label,
  showChevron = false,
  btnbg,
  textColor = "text-black",
  chevronColor = "text-black",
  chevBg = "bg-white",
  to,
  px,
  py,
}) => {
  // Check if the link is external (starts with http/https)
  const isExternalLink =
    to && (to.startsWith("http://") || to.startsWith("https://"));

  // If it's an external link, use a regular anchor tag
  if (isExternalLink) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative overflow-hidden ${btnbg} font-medium ${py} ${px} rounded-xl transition-colors duration-200 group`}
      >
        <span className="transition-transform duration-200 ease-in-out group-hover:translate-x-[200%] flex items-center gap-2">
          {showChevron && (
            <div className={`${chevBg} w-7 h-7 flex justify-center items-center rounded-sm`}>
              <ArrowRight size={16} className={`${chevronColor}`} />
            </div>
          )}
          <div className={`${textColor}`}>{label}</div>
        </span>

        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-in-out -translate-x-full group-hover:translate-x-0 gap-2">
          <div className={`${textColor}`}>{label}</div>

          {showChevron && (
            <div className={`${chevBg} w-7 h-7 flex justify-center items-center rounded-sm`}>
              <ArrowRight size={16} className={`${chevronColor}`} />
            </div>
          )}
        </span>
      </a>
    );
  }

  // For internal links, use React Router Link
  return (
    <Link
      to={to}
      className={`relative overflow-hidden ${btnbg} font-medium ${py} ${px} rounded-xl transition-colors duration-200 group`}
    >
      <span className="transition-transform duration-200 ease-in-out group-hover:translate-x-[200%] flex items-center gap-2">
        {showChevron && (
          <div className={`${chevBg} w-7 h-7 flex justify-center items-center rounded-sm`}>
            <ArrowRight size={16} className={`${chevronColor}`} />
          </div>
        )}
        <div className={`${textColor}`}>{label}</div>
      </span>

      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-in-out -translate-x-full group-hover:translate-x-0 gap-2">
        <div className={`${textColor}`}>{label}</div>

        {showChevron && (
          <div className={`${chevBg} w-7 h-7 flex justify-center items-center rounded-sm`}>
            <ArrowRight size={16} className={`${chevronColor}`} />
          </div>
        )}
      </span>
    </Link>
  );
};

export default Button;
