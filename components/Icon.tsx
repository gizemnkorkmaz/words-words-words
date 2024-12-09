import * as Icons from "./icons";

type IconNames = keyof typeof Icons;

type IconProps = {
  name: IconNames;
  size: "xs" | "sm" | "md" | "lg" | "xl" | number | string;
  color: string;
  className?: string; 
  onClick?: () => void;
};

const Icon: React.FC<IconProps> = ({
  name,
  color,
  size,
  className, 
  onClick
}) => {
  const CurrentIcon = Icons[name];

  const getSize = () => {
    switch (size) {
      case "xs":
        return 16;
      case "sm":
        return 24;
      case "md":
        return 32;
      case "lg":
        return 48;
      case "xl":
        return 64;
      default:
        return typeof size === "number" ? size : 24;
    }
  };

  return (
    <div className={className} onClick={onClick}>
      <svg
        version="1.1"
        role="presentation"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-labelledby={name}
        width={getSize()}
        height={getSize()}
        data-test={name}
        color={color}
      >
        <CurrentIcon color={color} />
      </svg>
    </div>
  );
};

export default Icon;
