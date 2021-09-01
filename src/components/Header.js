import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import TopAccounts from "../pages/topaccounts/TopAccounts";
import ContractInternalTxns from "../pages/contractInternaltxns/ContractInternalTxns";
import Blocks from "../pages/blocks/Blocks";
import Txns from "../pages/txns/Txns";
import PendingTxns from "../pages/pendingtxns/PendingTxns";
import PlasmaDepositTransactions from "../pages/plasmaDeposittransactions/PlasmaDepositTransactions";
import ForkedBlocks from "../pages/forkedblocks/ForkedBlocks";
import Contracts from "../pages/contracts/Contracts";
import Filter from "../components/Filter";
import BlockDetails from "../pages/blocksdet/block-details";
import AddressDetails from "../pages/addressdet/address-details";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [disabledFilter, setDisabledFilter] = useState(false);
  const togleDisabledFilter = (value) => {
    setDisabledFilter(value);
  };
  return (
    <Router>
      <div>
        <Navbar color="bg-primary" light expand="md">
          <div className="navbar-container">
            <div>
              <div className="top-item">{!disabledFilter && <Filter />}</div>
              <div className="bottom-item">
                <NavbarBrand>
                  <Link to="/">Ceta Token</Link>{" "}
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="nav-item dropdown ml-auto custom-nav" navbar>
                    <NavItem>
                      <NavLink>
                        <Link to="/">Home</Link>
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        BlockChain
                      </DropdownToggle>
                      <DropdownMenu right>
                        <Link to="/accounts">
                          <DropdownItem>Top Accounts</DropdownItem>
                        </Link>
                        <DropdownItem divider />
                        <Link to="/txs">
                          <DropdownItem>View Txns</DropdownItem>
                        </Link>
                        <Link to="/txsPending">
                          <DropdownItem>View Pending Txns</DropdownItem>
                        </Link>
                        <Link to="/txsInternal">
                          <DropdownItem>
                            View Contract Internal Txns
                          </DropdownItem>
                        </Link>
                        <DropdownItem divider />
                        <Link to="/txnbridge">
                          <DropdownItem>View Plasma Deposit Txns</DropdownItem>
                        </Link>

                        <DropdownItem divider />
                        <Link to="/blocks">
                          <DropdownItem>View Blocks</DropdownItem>
                        </Link>
                        <Link to="/blocks_forked">
                          <DropdownItem>Forked Blocks (Reorgs)</DropdownItem>
                        </Link>
                        <DropdownItem divider />
                        <Link to="/contractsVerified">
                          <DropdownItem>Verified Contracts</DropdownItem>
                        </Link>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Tokens
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Reset</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Misc
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Reset</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <div className="u-header nav-separator ml-3"></div>
                    <NavItem>
                      <NavLink href="https://github.com/reactstrap/reactstrap">
                        GitHub
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </div>
            </div>
          </div>
        </Navbar>

        <Switch>
          <Route path="/blockdetail">
            <BlockDetails />
          </Route>
          <Route path="/addressdetail">
            <AddressDetails />
          </Route>
          <Route path="/accounts">
            <TopAccounts togleDisabledFilter={togleDisabledFilter} />
          </Route>
          <Route path="/txs">
            <Txns togleDisabledFilter={togleDisabledFilter} />
          </Route>
          <Route path="/txsPending">
            <PendingTxns togleDisabledFilter={togleDisabledFilter} />
          </Route>
          <Route path="/txsInternal">
            <ContractInternalTxns togleDisabledFilter={togleDisabledFilter} />
          </Route>
          <Route path="/txnbridge">
            <PlasmaDepositTransactions
              togleDisabledFilter={togleDisabledFilter}
            />
          </Route>
          <Route path="/blocks">
            <Blocks togleDisabledFilter={togleDisabledFilter} />
          </Route>
          <Route path="/blocks_forked">
            <ForkedBlocks togleDisabledFilter={togleDisabledFilter} />
          </Route>
          <Route path="/contractsVerified">
            <Contracts />
          </Route>
          <Route path="/">
            <HomePage togleDisabledFilter={togleDisabledFilter} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Header;
