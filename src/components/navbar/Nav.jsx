// import library
import React, { useState } from "react";

// impot component
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  Button,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import Login from "./login/Login";

//import details
import { menuItems } from "../../_Details";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img
            src="https://i.postimg.cc/65vLNbQz/2.png"
            width={220}
            alt="EasyVents"
            className="dark:brightness-200 class iPhone4and4S:max-w-[7rem] iPhone4and4S:-mr-6 iPhone4and4S:dark:brightness-200 iPhone4and4S:dark:contrast-200 iPhone4and4S:dark:saturate-200"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img
            src="https://i.postimg.cc/65vLNbQz/2.png"
            width={220}
            alt="Easyvents"
            className="dark:brightness-200 iPhone4and4S:max-w-[7rem] iPhone4and4S:-mr-6 iPhone4and4S:dark:brightness-200 iPhone4and4S:dark:contrast-200 iPhone4and4S:dark:saturate-200"
          />
        </NavbarBrand>
        {menuItems.map((navbarItems) => (
          <NavbarItem>
            <Link color="foreground" href={navbarItems.href}>
              {navbarItems.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link color="secondary" className="cursor-pointer">
            <Login />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" variant="flat" className="dark:font-semibold">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Flowbite>
            <DarkThemeToggle />
          </Flowbite>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link onClick={() => item.name === <Login /> ? setIsMenuOpen(isMenuOpen) : setIsMenuOpen(!isMenuOpen)}
              className="w-full hover:bg-purple-200"
              color="foreground"
              // color={
              //   index === menuItems.length - 1 ? "secondary" : "foreground"
              // }
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
