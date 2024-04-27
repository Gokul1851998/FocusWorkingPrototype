export const userName = "test"
export const loginPassword = 'test'
export const userId = 619
export const imageIcon = "/images/sangsolution.png";
export const primaryColor= "#2460A7"
export const primaryButtonColor = "#ffff"

export const SideBarIcons = [
    { id: 1, iconName: "Home", icon: await import("@mui/icons-material/Home"), child:true },
    { id: 2, iconName: "Financials", icon: await import("@mui/icons-material/LocalAtm"), child:false  },
    { id: 3, iconName: "Inventory", icon: await import("@mui/icons-material/Inventory"), child:false  },
    { id: 4, iconName: "Fixed Asset", icon: await import("@mui/icons-material/AccountBalance"), child:false  },
    { id: 5, iconName: "Production", icon: await import("@mui/icons-material/Warehouse"), child:false  },
    { id: 6, iconName: "Point of Sale", icon: await import("@mui/icons-material/PointOfSale"), child:false  },
    { id: 7, iconName: "Quality Control", icon: await import("@mui/icons-material/PlaylistAddCheck"), child:false },
    { id: 8, iconName: "Settings", icon: await import("@mui/icons-material/Settings"), child:true  },
  ];

  export const SideBarSub = [
    { id: 9, parent:1, iconName: "Home", icon: await import("@mui/icons-material/Home") },
    { id: 10, iconName: "Financials", icon: await import("@mui/icons-material/LocalAtm") },
    { id: 11, iconName: "Inventory", icon: await import("@mui/icons-material/Inventory") },
    { id: 12, iconName: "Fixed Asset", icon: await import("@mui/icons-material/AccountBalance") },
    { id: 13, iconName: "Production", icon: await import("@mui/icons-material/Warehouse") },
    { id: 14, iconName: "Point of Sale", icon: await import("@mui/icons-material/PointOfSale") },
    { id: 15, iconName: "Quality Control", icon: await import("@mui/icons-material/PlaylistAddCheck") },
    { id: 16, iconName: "Settings", icon: await import("@mui/icons-material/Settings") },
  ];