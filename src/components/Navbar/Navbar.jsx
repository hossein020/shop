import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { NavLink, useLocation } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import CartModal from "../CartModal/CartModal";

const navItems = [
  {
    to: "/",
    label: (
      <>
        <HomeOutlinedIcon fontSize="small" sx={{ ml: 0.5 }} /> خانه
      </>
    ),
  },
  {
    to: "/products",
    label: (
      <>
        <AppsOutlinedIcon fontSize="small" sx={{ ml: 0.5 }} /> محصولات
      </>
    ),
  },
  {
    to: "/signup",
    label: (
      <>
        <HowToRegOutlinedIcon fontSize="small" sx={{ ml: 0.5 }} /> ثبت نام
      </>
    ),
  },
  {
    to: "/faq",
    label: (
      <>
        <HelpOutlineOutlinedIcon fontSize="small" sx={{ ml: 0.5 }} /> سوالات
        متداول
      </>
    ),
  },
];

const NavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  fontFamily: "Vazirmatn, sans-serif", // ✔ این خط را اضافه کن
  color: "#aaa",
  fontWeight: 600,
  paddingInline: theme.spacing(2),
  borderRadius: 9999,
  textTransform: "none",
  minWidth: "auto",
  transition: "background-color .3s ease, color .3s ease, transform .3s ease",
  ...(active && {
    backgroundColor: theme.palette.primary.main,
  }),
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    transform: "translateY(-2px)",
  },
}));

const NavbarMUI = ({ paletteScrolled = "#0B1A2D" }) => {
  const { getTotalItems } = useCart();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const theme = useTheme();

  const cartIconSrc = `https://img.icons8.com/?size=100&id=N6UotJJlOhhg&format=png&color=${
    scrolled ? "aaaaaa" : "bbbbbb"
  }`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          bgcolor: scrolled ? paletteScrolled : theme.palette.primary.dark,
          transition: "box-shadow .3s ease, background-color .3s ease",
          direction: "rtl",
          fontFamily: "Vazirmatn, sans-serif",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", minHeight: 70 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            {navItems.map(({ to, label }) => (
              <NavButton
                key={to}
                component={NavLink}
                to={to}
                active={location.pathname === to ? 1 : 0}
              >
                {label}
              </NavButton>
            ))}
          </Box>

          <IconButton
            size="large"
            color="inherit"
            onClick={() => setDrawerVisible(true)}
            sx={{ ml: 2 }}
          >
            <Badge badgeContent={getTotalItems()} max={99} color="error">
              <img
                src={cartIconSrc}
                alt="Cart"
                className="w-9 h-auto"
                style={{ display: "block" }}
              />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Toolbar sx={{ minHeight: 70 }} />

      <CartModal
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      />
    </>
  );
};

NavbarMUI.propTypes = {
  paletteScrolled: PropTypes.string,
};

export default NavbarMUI;