import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Bar = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 100%;
`;

export const Link = styled(NavLink)`
  font-weight: 600;

  &.active {
    color: var(--active-color);
  }
`;
