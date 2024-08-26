import { ElementType, ReactNode } from "react";

export type RouteType = {
  element?: ReactNode; 
  state?: string; 
  index?: boolean; 
  path?: string; 
  children?: RouteType[]; 
  icon?: React.ElementType;
  sidebarProps?: {
    displayText?: string; 
    icon?: React.ElementType;
  };
};
