import { FC } from "react";
import { Link } from "react-router-dom";
// chakra components and icons
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaUserSlash } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

// MARKUP
const Dropdown: FC = () => {
  return (
    <Menu>
      <MenuButton mr={4} as={Button} rightIcon={<FaArrowDown />}>
        <FaUserAlt className="xl:hidden" />
        <span className="hidden xl:block">user name</span>
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link to="/" className="flex items-center justify-between w-full">
            <span>Account Settings</span> <FaCog />
          </Link>
        </MenuItem>
        <MenuItem
          className="flex items-center justify-between w-full"
          onClick={() => {
            console.log("sign out");
          }}
        >
          <span>Logout</span> <FaUserSlash />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default Dropdown;
