import type { User } from "@supabase/supabase-js";
import { ROUTES } from "app/routes/router";
import { SearchPanel } from "features/search";
import { Link, NavLink } from "react-router-dom";
import { BookstackSvg } from "shared/assets";
import { st, useAppSelector } from "shared/lib";
import { ThemeToggle } from "shared/ui";
import styled, { css } from "styled-components";
import { AuthLinks } from "./AuthLinks";
import { Dropdown } from "./Dropdown";

export const Nav = () => {
  const { user, isLoading }: { user: User | null; isLoading: boolean } =
    useAppSelector((state) => state.user);

  return (
    <Navbar>
      {/* DESKTOP ONLY */}
      <StyledLink to={ROUTES.LINKS.HOME}>
        <BookstackIcon />
      </StyledLink>

      <LinksContainer>
        <Navlink to={ROUTES.LINKS.HOME}>Главная</Navlink>
        <Navlink to={ROUTES.LINKS.CATEGORIES}>Категории</Navlink>
      </LinksContainer>

      <SearchPanel />

      <RightSection>
        <ThemeToggle />
        <LinksContainer>
          <AuthLinks isLoading={isLoading} user={user} />
        </LinksContainer>
      </RightSection>

      {/* MOBILES ONLY */}
      <Dropdown isLoading={isLoading} user={user} />
    </Navbar>
  );
};

const Navbar = styled.nav`
  z-index: ${st("zIndices", "overlay")};
  background: ${st("gradients", "primary")};
  position: sticky;
  top: 0;
  box-shadow: ${st("shadows", "nav")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${st("spacing", "sm")} ${st("spacing", "md")};
  height: min-content;
  gap: 5px;
  transition: ${st("transitions", "colors")};

  @media (max-width: ${st("breakpoints", "sm")}) {
    justify-content: left;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  height: 30px;
  width: 30px;

  @media (max-width: ${st("breakpoints", "sm")}) {
    display: none;
  }
`;

const BookstackIcon = styled(BookstackSvg)`
  height: 100%;
  width: 100%;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${st("breakpoints", "sm")}) {
    display: none;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${st("spacing", "md")};
`;

const LinkTemplate = css`
  color: ${st("colors", "textWhite")};
  white-space: nowrap;
  margin: 0 10px;
  font-weight: ${st("fontWeights", "medium")};
  font-size: ${st("fontSizes", "md")};
  text-decoration: none;
  position: relative;
  transition: ${st("transitions", "colors")};

  @media (max-width: ${st("breakpoints", "lg")}) {
    font-size: ${st("fontSizes", "sm")};
    margin: 0 5px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 0%;
    height: 2px;
    opacity: 0;
    background: ${st("colors", "textWhite")};
    transition: all 0.3s ease;
  }

  &.active {
    &::after {
      width: 80%;
      opacity: 1;
    }
    color: ${st("colors", "textWhite")};
  }

  &:hover {
    opacity: ${st("opacity", "hover")};
  }
`;

export const Navlink = styled(NavLink)`
  ${LinkTemplate}
`;

export const Logout = styled.button`
  ${LinkTemplate}
  cursor: pointer;
  border-style: none;
`;
