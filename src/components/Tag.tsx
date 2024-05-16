import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";

export const Tag: React.FC<{
  text: string;
  icon?: IconProp;
  variant?: "default" | "link";
}> = ({ text, icon, variant }) => {
  return (
    <div
      className={`flex-gap-8 ${
        variant === "link" ? "tag-link" : "tag-no-link"
      }`}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      <p>{text}</p>
    </div>
  );
};
