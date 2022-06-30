import { FC, useRef } from "react";
import { Link } from "react-router-dom";
// chakra components and icons
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Sidebar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <>
      <button
        ref={btnRef}
        onClick={onOpen}
        className="order-first block text-xl text-teal-600"
      >
        <FaBars className="hover:text-teal-700 hover:scale-110" />
      </button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <div className="h-full py-12 text-white bg-gradient-to-br from-slate-700 to-slate-900">
            <DrawerCloseButton className="hover:text-teal-600 hover:scale-110" />
            <DrawerBody>
              <nav className="flex flex-col items-start justify-between font-bold leading-loose tracking-wider uppercase lg:grow gap-y-8">
                <Link
                  to="/"
                  className="hover:text-teal-600 hover:scale-105"
                  onClick={onClose}
                >
                  home
                </Link>
                <Link
                  to="/coffee"
                  className="hover:text-teal-600 hover:scale-105"
                  onClick={onClose}
                >
                  coffee
                </Link>
                <Link
                  to="/plan"
                  className="hover:text-teal-600 hover:scale-105"
                  onClick={onClose}
                >
                  create plan
                </Link>
              </nav>
            </DrawerBody>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
