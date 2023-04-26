import styled from "styled-components";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export const DropdownFilter = styled(Dropdown)`
  width: 250px;
  margin: 20px auto;
  .Dropdown-control {
    border: 1px solid var(--secondary-color);
    border-radius: 8px;
    color: var(--secondary-color);
    cursor: pointer;
  }

  .Dropdown-arrow-wrapper {
    position: absolute;
    right: 20px;
    top: 0;
    transform: translateY(50%);
  }
  .Dropdown-menu {
    border-radius: 8px;
    border: 1px solid var(--secondary-color);
  }

  .Dropdown-option {
    color: var(--secondary-color);
    transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

    :hover {
      background-color: var(--primary-color);
    }

    &.is-selected {
      color: var(--primary-color);
      background-color: var(--secondary-color);
    }
  }
`;
