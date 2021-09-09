import { useSelector, useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { logOut } from "redux/slices/userSlice";
import { IconUser, IconLogout } from "@tabler/icons";
import {
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from "@chakra-ui/react";
import { RightNavItem, DropdownItem } from "./LoginHeaderMenu.styles";

function LoginHeaderMenu() {
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
                <Text size="small" bold marginRight="4px">
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
            <div>
              <Text size="small" bold isTruncated>
                Sign In
              </Text>
            </div>
          </RightNavItem>
        </>
      )}
    </>
  );
}

export default LoginHeaderMenu;
