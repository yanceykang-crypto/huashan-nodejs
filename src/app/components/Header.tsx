"use client";
import { mobileNavConfig, navConfig } from "@/app/config/nav";
const myFont = localFont({
  src: "../../../public/Benmo Qianghei.ttf",
  variable: "--font-benmo",
});
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  DropdownSection,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import { ChevronDown, Search } from "lucide-react";
import { useCallback, useState } from "react";
import SearchContainer from "./Search";
import localFont from "next/font/local";
export default function Header() {
  const [isOpen, setIsOpen] = useState<string>("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const handleMouseEnter = useCallback((href?: string) => {
    setIsOpen(href || "");
  }, []);
  const handleMouseLeave = useCallback(() => {
    setIsOpen("");
  }, []);
  return (
    <>
      <Navbar
        maxWidth="xl"
        className="h-20 border-b border-gray-200 bg-gray-50"
        classNames={{ wrapper: "px-3" }}
        onMouseLeave={() => handleMouseLeave()}
      >
        <NavbarBrand>
          <Link href="/">
            <Image src="/images/site_logo.png" className="h-16" alt="logo" />
          </Link>
          <span
            className={`text-2xl ml-4 text-primary font-medium hidden sm:block ${myFont.className}`}
          >
            懂工具·更懂你
          </span>
        </NavbarBrand>
        <NavbarContent className="sm:hidden" justify="center">
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarMenu className="mt-3 bg-white">
          {mobileNavConfig.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          {navConfig.map((item, index) => {
            if (item.children?.length) {
              return (
                <Dropdown
                  offset={30}
                  showArrow
                  key={index}
                  isOpen={isOpen === item.href}
                  onMouseLeave={() => handleMouseLeave()}
                  onMouseEnter={() => handleMouseEnter(item.href)}
                >
                  <NavbarItem onMouseEnter={() => handleMouseEnter(item.href)}>
                    <DropdownTrigger trigger="hover">
                      <Link color="foreground">
                        {item.label}
                        <ChevronDown color="#ccc" className="pl-1" size={20} />
                      </Link>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    aria-label="ACME features"
                    className="font-bold gap-1 "
                  >
                    {item.children?.map((child, index) => {
                      if (child.children?.length) {
                        return (
                          <DropdownSection
                            key={index}
                            title={child.label}
                            className="text-stone-400 text-sm font-normal"
                          >
                            {child.children?.map((item, index) => (
                              <DropdownItem
                                key={index}
                                startContent={item.icon}
                                className="my-1 text-black data-[hover=true]:bg-primary data-[hover=true]:text-white"
                              >
                                <Link color="foreground">{item.label}</Link>
                              </DropdownItem>
                            ))}
                          </DropdownSection>
                        );
                      } else {
                        return (
                          <DropdownItem
                            key={index}
                            href={child.href}
                            // className="data-[hover=true]:text-white"
                            variant="flat"
                            color="danger"
                            startContent={child.icon}
                          >
                            <Link color="foreground" href={child.href}>
                              {child.label}
                            </Link>
                          </DropdownItem>
                        );
                      }
                    })}
                  </DropdownMenu>
                </Dropdown>
              );
            } else {
              return (
                <NavbarItem
                  key={index}
                  onMouseLeave={() => handleMouseLeave()}
                  onMouseEnter={() => handleMouseEnter(item.href)}
                >
                  <Link color="foreground" href={item.href}>
                    {item.label}
                  </Link>
                </NavbarItem>
              );
            }
          })}
        </NavbarContent>
        <Button
          variant="light"
          isIconOnly
          onPress={() => setIsSearchOpen(true)}
        >
          <Search />
        </Button>
        <SearchContainer
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </Navbar>
    </>
  );
}
