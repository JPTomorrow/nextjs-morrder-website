function ScrollLink({
  onClick,
  icon,
  tooltip = "tooltip",
}: {
  onClick: () => void;
  icon: React.ReactNode;
  tooltip?: string;
}) {
  return (
    <>
      <div className="nav-link group" onClick={onClick}>
        {icon}
        <span className="nav-link-tooltip group-hover:scale-100">
          {tooltip}
        </span>
      </div>
    </>
  );
}

export default ScrollLink;
