import { MenuIcon, User } from "lucide-react";
import MainMenu from "../components/organisms/siderbar/MainMenu";
import PageStatics from "../components/pages/PageStatics";
import { RouteType } from "./route";


const AppRouter: RouteType[] = [
  {
    path: "/home",
    sidebarProps: {
      displayText: "Menu",
    
    },
    children: [
      {
        path: "home",
        element: <MainMenu />,
        sidebarProps: {
          displayText: "Registro de Usuario",
          icon : MenuIcon
         
        },
      },
      {
        path: "home",
        element: <PageStatics />,
        sidebarProps: {
          displayText: "hola",
          icon : User
        },
      },
     
    ],
  },
  {
    path: "/home",
    sidebarProps: {
      displayText: "Menu",
    
    },
  },
];

export default AppRouter;