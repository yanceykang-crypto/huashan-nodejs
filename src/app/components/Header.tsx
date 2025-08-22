"use client";
import { mobileNavConfig, navConfig } from "@/app/config/nav";
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
} from "@heroui/react";
import { ChevronDown } from "lucide-react";
export default function Header() {
  return (
    <Navbar
      maxWidth="xl"
      className="h-20 border-b border-gray-200 bg-gray-50"
      classNames={{ wrapper: "px-3" }}
    >
      <NavbarBrand>
        <Link href="/">
          <Image src="/images/site_logo.png" className="h-16" alt="logo" />
        </Link>
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
              <Dropdown offset={30} showArrow key={index}>
                <NavbarItem>
                  <DropdownTrigger>
                    <Link color="foreground" href={item.href}>
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
                              <Link color="foreground" href={item.href}>
                                {item.label}
                              </Link>
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
                          <Link color="foreground" href={item.href}>
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
              <NavbarItem key={index}>
                <Link color="foreground" href={item.href}>
                  {item.label}
                </Link>
              </NavbarItem>
            );
          }
        })}
      </NavbarContent>
    </Navbar>
  );
}
