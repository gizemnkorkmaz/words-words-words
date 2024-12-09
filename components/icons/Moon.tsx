interface IconProps {
  color?: string; 
  strokeWidth?: number; 
}

const Moon: React.FC<IconProps> = ({
  color = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 120 120"
    stroke={color}
    fill="none"
    strokeWidth="7.5"
  >
    <path
      d="M37.5 31.9c0-7.2 1.1-14.4 3.8-20.6C23.3 19 11.3 37.3 11.3 58.1c0 28 22.7 50.6 50.6 50.6 20.8 0 39.1-12.1 46.9-30-6.2 2.7-13.5 3.8-20.7 3.8-28 0-50.6-22.7-50.6-50.6Z"
      fill="none"
      strokeWidth="7.5"
    />
  </svg>
);

export default Moon;
