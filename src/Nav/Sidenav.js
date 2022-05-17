import React, { useState } from "react";
import "./Sidenavstyle.css";
import { NavLink, Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

// icons
import { BsFillBarChartLineFill } from "react-icons/bs";
import {
  MdSwitchAccount,
  MdDirectionsBusFilled,
  MdElectricRickshaw,
  MdDirectionsCarFilled,
  MdOutlineBuildCircle,
  MdOutlineLocalGroceryStore,
  MdOutlineStorefront,
  MdReduceCapacity,
  MdVolunteerActivism,
} from "react-icons/md";
import { GiFuelTank, GiHamburgerMenu } from "react-icons/gi";
import { SiSalesforce } from "react-icons/si";

function Sidenav() {
  const [open, setClose] = useState(true);
  const showSidebar = () => setClose(!open);

  return (
    <>
      <div className="side-nav">
        <GiHamburgerMenu
          className="hambaricon m-3"
          onClick={showSidebar}
          size={27}
        />

        <nav className={open ? "nav" : "nav nav1"}>
          <ul>
            <NavLink exact={true} to="/">
              <li className="px-2" onClick={showSidebar}>
                <BsFillBarChartLineFill
                  className="icons pt-1"
                  size={46}
                ></BsFillBarChartLineFill>
                <div className="menu-text normalnav">Dashboard</div>
              </li>
            </NavLink>

            <li className="px-2">
              <MdSwitchAccount
                className="icons pt-1"
                size={47}
                onClick={showSidebar}
              ></MdSwitchAccount>
              <div className="menu-text">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Driver"
                  menuVariant="dark"
                >
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/AddDiverDetails"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      Add Diver Details
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/ViewDiverDetails"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      View Diver Details
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/UpdateDiverDetails"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      Update Diver Details
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </li>

            <li className="px-2">
              <MdDirectionsBusFilled
                className="icons pt-1"
                size={47}
                onClick={showSidebar}
              ></MdDirectionsBusFilled>
              <div className="menu-text">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Vehicle"
                  menuVariant="dark"
                >
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/AddVehicleDetails"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      Add Vehicle Details
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/ViewVehicleDetails"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      View Vehicle Details
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/UpdateVehicleDetails"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      Update Vehicle Details
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </li>

            <li className="px-2">
              <MdElectricRickshaw
                className="icons pt-1"
                size={47}
                onClick={showSidebar}
              ></MdElectricRickshaw>
              <div className="menu-text">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Trip Details"
                  menuVariant="dark"
                >
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/AddTrip"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      Add Trip
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/UpdateTrip"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      Update Trip
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/ViewTrip"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      View Trip
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/TripExpenses"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      Trip Expenses
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/TripIncome"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      Trip Income
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </li>

            <li className="px-2">
              <MdDirectionsCarFilled
                className="icons pt-1"
                size={47}
                onClick={showSidebar}
              ></MdDirectionsCarFilled>
              <div className="menu-text">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Vehicle Details"
                  menuVariant="dark"
                >
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/FuelDetails"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      Fuel Details
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/BlueOilDetails"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      BlueOil Details
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/ServiceDetails"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      Service Details
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/TyreDetails"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      Tyre Details
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </li>

            <NavLink to="/Repair&Maintensance">
              <li className="px-1" onClick={showSidebar}>
                <MdOutlineBuildCircle
                  className="icons pt-1"
                  size={47}
                ></MdOutlineBuildCircle>
                <div className="menu-text normalnav">Repair&Maintensance</div>
              </li>
            </NavLink>

            <li className="px-2">
              <MdOutlineLocalGroceryStore
                className="icons pt-1"
                size={47}
                onClick={showSidebar}
              ></MdOutlineLocalGroceryStore>
              <div className="menu-text">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Purchase"
                  menuVariant="dark"
                >
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/AddProducts"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      Add Products
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/AddVendor"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      Add Vendor
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/ViewVendor"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      View Vendor
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </li>

            <NavLink to="/OverallReports">
              <li className="px-2" onClick={showSidebar}>
                <MdOutlineStorefront
                  className="icons"
                  size={43}
                ></MdOutlineStorefront>
                <div className="menu-text normalnav">Overall Reports</div>
              </li>
            </NavLink>

            <li className="px-2">
              <MdReduceCapacity
                className="icons"
                size={43}
                onClick={showSidebar}
              ></MdReduceCapacity>
              <div className="menu-text">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Fleet Managment"
                  menuVariant="dark"
                >
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/FleetTripManagment"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      Trip Managment
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-center">
                    <Link
                      to="/FleetViewTrip"
                      className="text-light"
                      onClick={showSidebar}
                    >
                      View Trip
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </li>

            <NavLink to="/Signup">
              <li className="px-2" onClick={showSidebar}>
                <GiFuelTank className="icons" size={43}></GiFuelTank>
                <div className="menu-text normalnav">Fuel Managment</div>
              </li>
            </NavLink>

            <NavLink to="/Loginpage">
              <li className="px-2" onClick={showSidebar}>
                <MdVolunteerActivism
                  className="icons"
                  size={43}
                ></MdVolunteerActivism>
                <div className="menu-text normalnav">Salary Managment</div>
              </li>
            </NavLink>

            <NavLink to="/Sales" onClick={showSidebar}>
              <li className="px-2">
                <SiSalesforce className="icons" size={43}></SiSalesforce>
                <div className="menu-text normalnav">Sales</div>
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidenav;
