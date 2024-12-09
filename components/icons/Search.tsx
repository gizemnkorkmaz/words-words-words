interface IconProps {
  color?: string;
  strokeWidth?: number;
}

const Search: React.FC<IconProps> = ({ color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 120 120"
    stroke={color}
    fill={color}
  >
    <path d="M93.3 88l14.6 14.6a3.8 3.8 0 0 1-5.3 5.3L88 93.3a48.8 48.8 0 1 1 5.3-5.3zM56.3 97.5a41.3 41.3 0 1 0 0-82.5 41.3 41.3 0 0 0 0 82.5z" />
  </svg>
);

export default Search;
