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
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { DropdownItem, RightNavItem } from "./LoginHeaderMenu.styles";

const LoginHeaderMenu = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting.
  }, [auth]);

  return (
    <>
      {isAuthenticated ? (
        <>
          <Popover trigger="hover" placement="bottom">
            <PopoverTrigger>
              <RightNavItem>
                <IconUser />
                <Text size="small" bold mr="4px">
                  {/* TODO: currentUser.displayName is null, update it using profile? */}
                  Hello {auth.currentUser.email}
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
                    auth.signOut();
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
