import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";

export const Tag: React.FC<{
  text: string;
  icon?: IconProp;
  iconImageSrc?: string;
  variant?: "default" | "link";
}> = ({ text, icon, iconImageSrc, variant }) => {
  return (
    <div
      className={`flex-gap-8 ${
        variant === "link" ? "tag-link" : "tag-no-link"
      }`}
    >
      {iconImageSrc && (
        <span
          className="tag-icon-mask"
          role="img"
          aria-label={`${text} logo`}
          style={{
            WebkitMaskImage: `url("${iconImageSrc}")`,
            maskImage: `url("${iconImageSrc}")`,
          }}
        />
      )}
      {icon && <FontAwesomeIcon icon={icon} />}
      <p>{text}</p>
    </div>
  );
};
