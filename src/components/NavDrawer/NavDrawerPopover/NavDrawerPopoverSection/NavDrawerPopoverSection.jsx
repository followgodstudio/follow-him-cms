import Text from "components/Text/Text";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { switchNav, switchSubNav } from "redux/slices/utilSlice";
import {
  IconWrapper,
  NavDrawerPopoverSectionWrapper,
  SubNavItem,
  SubNavWrapper,
} from "./NavDrawerPopoverSection.styles";

const NavDrawerPopoverSection = ({
  selected,
  title,
  icon,
  link,
  subNavList,
  ...rest
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { selectedSubNav } = useSelector((state) => state.util);
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);

  const hasSubNav = subNavList && subNavList.length > 0;

  const handleNavItemClick = () => {
    if (!hasSubNav) {
      dispatch(switchNav(title));
      dispatch(switchSubNav(null));
      history.push(link);
    }
  };

  const handleSubNavItemClick = (link, subTitle) => {
    dispatch(switchNav(title));
    dispatch(switchSubNav(subTitle));
    history.push(link);
  };

  const handleMouseEnter = () => {
    setIsSubNavOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubNavOpen(false);
  };

  return (
    <NavDrawerPopoverSectionWrapper
      {...rest}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleNavItemClick}
    >
      <IconWrapper selected={selected} isMouseHover={isSubNavOpen}>
        {icon}
      </IconWrapper>
      {hasSubNav && isSubNavOpen && (
        <SubNavWrapper>
          {subNavList.map((subNav) => (
            <SubNavItem
              key={subNav.title}
              selected={subNav.title === selectedSubNav}
              onClick={() => handleSubNavItemClick(subNav.link, subNav.title)}
            >
              <Text>{subNav.title}</Text>
            </SubNavItem>
          ))}
        </SubNavWrapper>
      )}
    </NavDrawerPopoverSectionWrapper>
  );
};

NavDrawerPopoverSection.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.element,
  link: PropTypes.string,
  subNavList: PropTypes.arrayOf(PropTypes.object),
};

export default NavDrawerPopoverSection;
