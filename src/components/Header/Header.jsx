import React, { useContext, useState } from "react";
import { MainContext } from "../../Context/MainContext";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Menu icons
import "./Header.css"

export default function Header() {
  const { user, logoutUser, headerData, landingHeaderLinks } =
    useContext(MainContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-red-600">
          {headerData?.title || "IELTSMOCKPREPPro"}
        </Link>

        {/* Toggle for mobile menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-700 focus:outline-none text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu */}
        <div
          className={`flex-col lg:flex-row lg:flex items-center w-full lg:w-auto ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center my-2 lg:mt-0">
            {landingHeaderLinks ? (
              landingHeaderLinks.map((llItem) => (
                <li key={llItem.title}>
                  <Link
                    to={llItem.path}
                    className="text-gray-700 hover:text-red-600 font-medium"
                  >
                    {llItem.title}
                  </Link>
                </li>
              ))
            ) : (
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-red-600 font-medium"
                >
                  Home
                </Link>
              </li>
            )}
          </ul>

          {/* Right Section */}
          <div className=" lg:mt-0 lg:ml-6 flex items-center gap-3">
            {user && user.email ? (
              <>
                <div class="dropdown">
                  <button
                    className="dropdown-toggle no-caret"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img className="rounded-2xl" src={user?.photoURL} alt="" style={{width: "30px", height: "30px", marginTop: "2px"}} />
                  </button>
                  <ul class="dropdown-menu dropdown-menu-dark headerProfileDropItems">
                    <li className="headerProfileDropItem">
                      <Link 
                        id="menu-item-0"
                        role="menuitem"
                        to="/user/dashboard"
                        tabindex="-1"
                        class="headerProfileDropItemLink dropdown-item text-light block px-4 py-2 text-sm text-gray-700"
                      >
                       Dashboard
                      </Link>
                    </li>
                    <li className="headerProfileDropItem">
                      <Link
                        id="menu-item-1"
                        role="menuitem"
                        to="/user/profile"
                        tabindex="-1"
                        class="headerProfileDropItemLink dropdown-item text-light block px-4 py-2 text-sm text-gray-700"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li className="headerProfileDropItem">
                      <Link
                      onClick={ () => logoutUser()}
                        id="menu-item-3"
                        role="menuitem"
                        tabindex="-1"
                        class="headerProfileDropItemLink dropdown-item text-light block px-4 py-2 text-sm text-gray-700"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="border border-red-600 text-red-600 px-4 py-1.5 rounded-full font-medium hover:bg-red-100 transition"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-red-600 text-white px-4 py-1.5 rounded-full font-medium hover:bg-red-700 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>

    // <Navbar onMenuOpenChange={setIsMenuOpen}>
    //   <NavbarContent>
    //     <NavbarMenuToggle
    //       aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    //       className="sm:hidden"
    //     />
    //     <NavbarBrand>
    //       <Link to="/"><h1 className=""><strong>{headerData?.title || "IELTSMOCKPREPPro"}</strong></h1></Link>
    //     </NavbarBrand>
    //   </NavbarContent>

    //   <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //     <NavbarItem>
    //       <Link color="foreground" href="#">
    //         Features
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem isActive>
    //       <Link aria-current="page" href="#">
    //         Customers
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link color="foreground" href="#">
    //         Integrations
    //       </Link>
    //     </NavbarItem>
    //   </NavbarContent>
    //   <NavbarContent justify="end">
    //     <NavbarItem className="hidden lg:flex">
    //       <Link href="#">Login</Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Button as={Link} color="primary" href="#" variant="flat">
    //         Sign Up
    //       </Button>
    //     </NavbarItem>
    //   </NavbarContent>
    //   <NavbarMenu>
    //     {menuItems.map((item, index) => (
    //       <NavbarMenuItem key={`${item}-${index}`}>
    //         <Link
    //           className="w-full"
    //           color={
    //             index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
    //           }
    //           href="#"
    //           size="lg"
    //         >
    //           {item}
    //         </Link>
    //       </NavbarMenuItem>
    //     ))}
    //   </NavbarMenu>
    // </Navbar>
  );
}
