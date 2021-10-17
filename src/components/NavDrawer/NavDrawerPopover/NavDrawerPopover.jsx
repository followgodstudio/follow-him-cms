import { useSelector } from "react-redux";
import { NAV_ITEMS } from "../constants/NavItems";
import { NavDrawerPopoverWrapper } from "./NavDrawerPopover.styles";
import NavDrawerPopoverSection from "./NavDrawerPopoverSection/NavDrawerPopoverSection";

const NavDrawerPopover = () => {
  const { selectedNav } = useSelector((state) => state.util);
  return (
    <NavDrawerPopoverWrapper>
      {NAV_ITEMS.map((navItem) => (
        <NavDrawerPopoverSection
          key={navItem.title}
          selected={navItem.title === selectedNav}
          icon={navItem.icon}
          link={navItem.link}
          subNavList={navItem.subNavList}
        />
      ))}
    </NavDrawerPopoverWrapper>
  );
};
export default NavDrawerPopover;
