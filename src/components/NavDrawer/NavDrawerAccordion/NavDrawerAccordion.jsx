import { useState } from "react";
import { useSelector } from "react-redux";
import { NAV_ITEMS } from "../constants/NavItems";
import { NavDrawerAccordionWrapper } from "./NavDrawerAccordion.styles";
import NavDrawerAccordionSection from "./NavDrawerAccordionSection/NavDrawerAccordionSection";

const NavDrawerAccordion = () => {
  const { selectedNav } = useSelector((state) => state.util);

  const [tempSelectedNav, setTempSelectedNav] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleNavSectionClick = (title) => {
    setTempSelectedNav(title === tempSelectedNav ? null : title);
    setExpanded(tempSelectedNav === title ? !expanded : true);
  };

  return (
    <NavDrawerAccordionWrapper>
      {NAV_ITEMS.map((navItem) => (
        <NavDrawerAccordionSection
          selected={
            navItem.title === selectedNav || navItem.title === tempSelectedNav
          }
          expanded={expanded}
          title={navItem.title}
          key={navItem.title}
          icon={navItem.icon}
          link={navItem.link}
          subNavList={navItem.subNavList}
          handleNavSectionClick={() => handleNavSectionClick(navItem.title)}
        />
      ))}
    </NavDrawerAccordionWrapper>
  );
};

export default NavDrawerAccordion;