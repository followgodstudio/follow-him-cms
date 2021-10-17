import {
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { IconLogout, IconUser } from "@tabler/icons";
import Text from "components/Text/Text";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { logOut } from "redux/slices/userSlice";
import { DropdownItem, RightNavItem } from "./LoginHeaderMenu.styles";

const LoginHeaderMenu = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <>
      {isAuthenticated ? (
        <>
          <Popover trigger="hover" placement="bottom">
            <PopoverTrigger>
              <RightNavItem>
                <IconUser />
                <Text size="small" bold mr="4px">
                  You
                </Text>
              </RightNavItem>
            </PopoverTrigger>
            <PopoverContent
              borderColor="lightgray"
              borderRadius="8px"
              boxShadow="0px 4px 15px -4px rgba(0,0,0,0.15)"
              width="220px"
              marginInline="auto"
            >
              <PopoverArrow />
              <PopoverBody display="flex" flexDirection="column" padding="4px">
                <DropdownItem
                  type="button"
                  onClick={() => {
                    dispatch(logOut());
                  }}
                >
                  <IconLogout />
                  <Text ml="5px">Sign Out</Text>
                </DropdownItem>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </>
      ) : (
        <>
          <RightNavItem
            onClick={() => history.push(`/signin?returnUrl=${pathname}`)}
          >
            <IconUser />
            <Box display={{ base: "none", lg: "initial" }}>
              <Text isTruncated>Sign In</Text>
            </Box>
          </RightNavItem>
        </>
      )}
    </>
  );
};

export default LoginHeaderMenu;
