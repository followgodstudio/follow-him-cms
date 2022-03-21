import { useSelector } from "react-redux";
import { useNavItems } from "../constants/NavItems";
import { NavDrawerPopoverWrapper } from "./NavDrawerPopover.styles";
import NavDrawerPopoverSection from "./NavDrawerPopoverSection/NavDrawerPopoverSection";

const NavDrawerPopover = () => {
  const { selectedNav } = useSelector((state) => state.util);
  const navItems = useNavItems();
  return (
    <NavDrawerPopoverWrapper>
      {navItems.map((navItem) => (
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
