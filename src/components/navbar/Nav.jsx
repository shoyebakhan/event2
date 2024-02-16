import React from "react";
import {  Navbar,   NavbarBrand,   NavbarContent, Link, Button,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
    const menuItems = [
      "Home",
      "Services",
      "Our Team",
      "Reviews",
      "Contact Us",
      "Log In",
    ];
  
    return (
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>
  
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <img src="https://i.postimg.cc/N0TckQwm/3-removebg-preview.png" width={100} alt="EasyVents" className="bg-slate-900" />
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
          <img src="https://i.postimg.cc/N0TckQwm/3-removebg-preview.png" width={150} alt="Easyvents" className="bg-slate-900"/>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="#home">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#services" aria-current="page">
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
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
  
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === menuItems.length - 1 ? "primary" : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  }
  