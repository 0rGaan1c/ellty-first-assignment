const CheckmarkIcon = ({ state = "default" }) => {
  const strokeColor = {
    hold: "#878787",
    hover: "#E3E3E3",
    selected: "white",
    default: "transparent"
  }[state];

  return (
    <svg width="17" height="13" viewBox="0 0 17 13" fill="none">
      <path
        d="M0.68 6.592L6.22879 11.5272C6.24925 11.5454 6.28055 11.5437 6.29899 11.5235L16.32 0.52"
        stroke={strokeColor}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CheckmarkIcon;
