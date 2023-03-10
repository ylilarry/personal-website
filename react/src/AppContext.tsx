import { Theme } from "@mui/material";
import React from "react";
import { Location, NavigateFunction, Params } from "react-router-dom";

export const mediaQuery = {
  sm: false,
  md: false,
  xs: false,
};

export const defaultAppContext = {
  mediaQuery: mediaQuery,
  specialThemeWithConstantSpacing: null as Theme | null,
  routes: null as {
    location: Location;
    navigate: NavigateFunction;
    params: Params<string>;
    search: URLSearchParams;
    updateSearch: (search: URLSearchParams) => void;
  } | null,
};

export const AppContextType = React.createContext(defaultAppContext);
export type AppContext = typeof defaultAppContext;
