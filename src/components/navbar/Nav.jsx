// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
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
import Login from "./Login";
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name:"Home",
      href: "#home",
  },
    {
      name:"Services",
      href:"#services",
    },
    {
      name:"Our Team",
      href:"#team",
    },
    {
      name:"Reviews",
      href:"#reviews",
    },
    {
      name:"Contact Us",
      href:"#contactus",
    },
    {
      name: "Login",
    }
  ];

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
            className="dark:brightness-200 iPhone4and4S:max-w-[7rem] iPhone4and4S:-mr-6 iPhone4and4S:dark:brightness-200 iPhone4and4S:dark:contrast-200 iPhone4and4S:dark:saturate-200"
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
        <NavbarItem>
        <Link color="foreground" href="#home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#team">
            Our Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#reviews">
            Reviews
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contactus">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" color="secondary" className="dark:font-semibold">
            <Login/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" href="#" variant="flat" className="dark:font-semibold">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Flowbite>
            <DarkThemeToggle/>
          </Flowbite>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
          
            <Link onClick={() => item.name === <Login/> ? setIsMenuOpen(isMenuOpen): setIsMenuOpen(!isMenuOpen)}
              className="w-full hover:bg-purple-200"
              color={
                index === menuItems.length - 1 ? "secondary" : "foreground"
              }
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
