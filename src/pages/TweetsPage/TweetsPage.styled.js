import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Back = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 4px;
`;

export const CardGrid = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-gap: 16px;
  padding: 0;
  margin: 20px auto;
`;

export const NoResults = styled.h2`
  font-size: 50px;
  color: var(--secondary-color);
`;
