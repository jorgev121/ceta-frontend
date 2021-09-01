import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { BiSearchAlt2 } from "react-icons/bi";
export default function Filter() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  return (
    <InputGroup>
      <InputGroupButtonDropdown
        addonType="append"
        isOpen={dropdownOpen}
        toggle={toggleDropDown}
      >
        <DropdownToggle caret>All Filters</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </InputGroupButtonDropdown>
      <Input placeholder="Search by Address / Txn Hash / Block / Token" />
      <InputGroupAddon addonType="append">
        <Button color="secondary">
          <BiSearchAlt2 />
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}
