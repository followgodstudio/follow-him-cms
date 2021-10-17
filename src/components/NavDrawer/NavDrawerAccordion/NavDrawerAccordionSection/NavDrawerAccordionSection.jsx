import { Flex } from "@chakra-ui/react";
import { IconChevronDown, IconChevronRight, IconPoint } from "@tabler/icons";
import Text from "components/Text/Text";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { switchNav, switchSubNav } from "redux/slices/utilSlice";
import {
  NavDrawerSectionTitle,
  NavDrawerSectionWrapper,
  SubSectionTitle,
  SubSectionWrapper,
} from "./NavDrawerAccordionSection.styles";

const NavDrawerSection = ({
  selected,
  expanded,
  title,
  icon,
  link,
  subNavList,
  handleNavSectionClick,
  ...rest
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { selectedSubNav } = useSelector((state) => state.util);
  const hasSubNav = subNavList && subNavList.length > 0;

  const handleSectionTitleClick = () => {
    handleNavSectionClick();
    if (!hasSubNav) {
      dispatch(switchNav(title));
      dispatch(switchSubNav(null));
      history.push(link);
    }
  };

  const handleSubSectionTitleClick = (link, subTitle) => {
    dispatch(switchNav(title));
    dispatch(switchSubNav(subTitle));
    history.push(link);
  };

  useEffect(() => {
    switchNav("Snowplow");
    switchSubNav("Enrichment");
  }, []);

  return (
    <NavDrawerSectionWrapper {...rest}>
      <NavDrawerSectionTitle
        selected={selected}
        onClick={handleSectionTitleClick}
      >
        <Flex alignItems="center">
          {icon}
          <Text fontWeight={selected ? "500" : "400"} ml="8px">
            {title}
          </Text>
        </Flex>
        {hasSubNav ? (
          selected && expanded ? (
            <IconChevronDown stroke={1} />
          ) : (
            <IconChevronRight stroke={1} />
          )
        ) : null}
      </NavDrawerSectionTitle>
      {hasSubNav && selected && expanded && (
        <SubSectionWrapper>
          {subNavList.map((subNav) => (
            <SubSectionTitle
              key={subNav.title}
              onClick={() =>
                handleSubSectionTitleClick(subNav.link, subNav.title)
              }
              selected={selectedSubNav === subNav.title}
            >
              <IconPoint size="18px" />
              <Text fontSize="14px" ml="4px">
                {subNav.title}
              </Text>
            </SubSectionTitle>
          ))}
        </SubSectionWrapper>
      )}
    </NavDrawerSectionWrapper>
  );
};

NavDrawerSection.propTypes = {
  selected: PropTypes.bool,
  expanded: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.element,
  link: PropTypes.string,
  subNavList: PropTypes.arrayOf(PropTypes.object),
  handleNavSectionClick: PropTypes.func,
};

export default NavDrawerSection;
