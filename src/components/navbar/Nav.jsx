// import library
import React, { useState } from "react";

// impot component
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  Input,
  Button,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { ThemeSwitcher } from "../themeSwitcher/ThemeSwitcher";
import { SearchIcon } from "./SearchIcon.jsx";
import { Avatar } from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Our Team",
      href: "#team",
    },
    {
      name: "Reviews",
      href: "#reviews",
    },
    {
      name: "Contact Us",
      href: "#contactus",
    },
    {
      name: "Logout",
    },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
    >
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden bg-red- pr-2" justify="center">
        <NavbarBrand>
          <img
            src="https://i.postimg.cc/65vLNbQz/2.png"
            width={250}
            alt="EasyVents"
            className="iPhone4and4S:max-w-[7rem] iPhone4and4S:-mr-6 iPhone4and4S:dark:contrast-200 iPhone4and4S:dark:saturate-200"
          />
        </NavbarBrand>
      </NavbarContent>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img
            src="https://i.postimg.cc/65vLNbQz/2.png"
            width={220}
            alt="Easyvents"
            className="bg-slate-950 iPhone4and4S:max-w-[7rem] iPhone4and4S:-mr-6 iPhone4and4S:dark:contrast-200 iPhone4and4S:dark:saturate-200"
          />
        </NavbarBrand>
      </NavbarContent> */}
      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarBrand>
          <img
            src="https://i.postimg.cc/65vLNbQz/2.png"
            width={500}
            alt="Easyvents"
            className="iPhone4and4S:max-w-[7rem] iPhone4and4S:-mr-6 iPhone4and4S:dark:contrast-200 iPhone4and4S:dark:saturate-200 -ml-28"
          />
        </NavbarBrand>
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[25rem] h-10",
            mainWrapper: "h-full",
            input: "text-base",
            inputWrapper:
              "h-full font-normal text-default-800 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
          radius="lg"
          className="-ml-[7.5rem]"
        />
        <NavbarItem className="ml-[20rem] flex gap-6">
          <ThemeSwitcher />
          <Avatar
            isBordered
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          />
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent>
        <Avatar
          isBordered
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        />
      </NavbarContent> */}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              onClick={() =>
                item.name === <Login />
                  ? setIsMenuOpen(isMenuOpen)
                  : setIsMenuOpen(!isMenuOpen)
              }
              className="w-full hover:bg-purple-200"
              color={index === menuItems.length - 1 ? "danger" : "foreground"}
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
