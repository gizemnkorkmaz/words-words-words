interface IconProps {
  color?: string;
  strokeWidth?: number;
}

const Book: React.FC<IconProps> = ({ color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 120 120"
    stroke={color}
    fill="none"
  >
    <path
      d="M63.8 33.8h-22.5v71.2h52.5v-71.3h-30zM97.5 108.8h-63.8c-6.2 0-11.2-5-11.2-11.3v-73.1c0-5.2 4.2-9.4 9.3-9.4h65.7v3.7h-1.9c-3.1 0-5.6 2.5-5.6 5.7 0 3.1 2.5 5.6 5.6 5.6h1.9v78.8zM37.5 105v-71.3h-5.7c-2.1 0-4-0.7-5.5-1.8v65.6c0 4.1 3.3 7.5 7.4 7.5h3.8zM31.9 18.8c-3.1 0-5.6 2.5-5.6 5.6 0 3.1 2.5 5.6 5.6 5.6h56.2c0 0-1.9-3-1.8-5.7s1.9-5.5 1.8-5.5h-56.2z"
      strokeWidth="2.5"
    />
  </svg>
);

export default Book;
