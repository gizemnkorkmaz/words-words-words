interface IconProps {
  color?: string;
  strokeWidth?: number;
}

const CircleArrow: React.FC<IconProps> = ({ color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 120 120"
    stroke={color}
    fill="none"
    strokeWidth="4"
  >
    <path d="M63.9 40.4c-1.3-0.3-2.6-0.4-3.9-0.4-12.3 0-22.1 11.1-19.7 23.9 1.5 7.8 7.9 14.2 15.8 15.7 1.3 0.3 2.6 0.4 3.9 0.4 12.3 0 22.1-11.1 19.6-23.9-1.5-7.8-7.9-14.2-15.7-15.7zM65.1 64.2c-1.3 1.5-3.2 2.4-5.1 2.5-0.5 0-1 0-1.4-0.2-2.4-0.5-4.6-2.7-5.1-5.1-0.5-2.7 0.5-4.6 1.3-5.6 1.3-1.5 3.2-2.4 5.2-2.5 0.5 0 0.9 0 1.4 0.2 2.4 0.5 4.6 2.7 5.1 5.1 0.5 2.7-0.5 4.6-1.4 5.6z" />
    <path d="M113.4 66.7h-13.4c-3.7 0-6.6-3-6.6-6.7v0c0-3.7 3-6.6 6.6-6.7h13.4c3.7 0 6.6 3 6.7 6.7v0c0 3.7-3 6.6-6.7 6.7z" />
    <path d="M60 93.3h0c-3.7 0-6.6 3-6.7 6.7v13.4c0 3.7 3 6.6 6.7 6.6h0c3.7 0 6.6-3 6.7-6.6v-13.4c0-3.7-3-6.6-6.7-6.7z" />
    <path d="M60 26.7h0c3.7 0 6.6-3 6.7-6.7v-13.4c0-3.7-3-6.6-6.7-6.6h0c-3.7 0-6.6 3-6.7 6.6v13.4c0 3.7 3 6.6 6.7 6.7z" />
    <path d="M26.6 60v0c0-3.7-3-6.6-6.6-6.7h-13.4c-3.7 0-6.7 3-6.7 6.7v0c0 3.7 3 6.6 6.7 6.7h13.4c3.7 0 6.7-3 6.6-6.7z" />
    <path d="M97.4 31.5l7.5-7.5c2.5-2.5 2.5-6.4 0-8.8s-6.4-2.5-8.9 0l-7.5 7.4c-2.5 2.5-2.5 6.4 0 8.9 2.5 2.5 6.4 2.5 8.9 0z" />
    <path d="M24 15.2c-2.5-2.5-6.4-2.5-8.9 0-2.5 2.5-2.5 6.4 0 8.8l7.5 7.5c2.5 2.5 6.4 2.5 8.9 0 2.5-2.5 2.5-6.4 0-8.9l-7.5-7.4z" />
    <path d="M22.6 88.5l-7.5 7.5c-2.5 2.5-2.5 6.4 0 8.8 2.5 2.5 6.4 2.5 8.9 0l7.5-7.4c2.5-2.5 2.5-6.4 0-8.9-2.5-2.5-6.4-2.5-8.9 0z" />
    <path d="M97.4 88.5c-2.5-2.5-6.4-2.5-8.9 0-2.5 2.5-2.5 6.4 0 8.9l7.5 7.4c2.5 2.5 6.4 2.5 8.9 0 2.5-2.5 2.5-6.4 0-8.8l-7.5-7.5z" />
  </svg>
);

export default CircleArrow;
