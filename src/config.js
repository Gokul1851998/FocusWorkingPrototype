export const userName = "test"
export const loginPassword = 'test'
export const userId = 619
export const imageIcon = "/images/sangsolution.png";
export const primaryColor= "#2460A7"
export const primaryButtonColor = "#ffff"

export const SideBarIcons = [
    { id: 1,parent:0, iconName: "Home", icon: await import("@mui/icons-material/Home"), child:true },
    { id: 2,parent:0, iconName: "Financials", icon: await import("@mui/icons-material/LocalAtm"), child:false  },
    { id: 3,parent:0, iconName: "Inventory", icon: await import("@mui/icons-material/Inventory"), child:false  },
    { id: 4,parent:0, iconName: "Fixed Asset", icon: await import("@mui/icons-material/AccountBalance"), child:false  },
    { id: 5,parent:0, iconName: "Production", icon: await import("@mui/icons-material/Warehouse"), child:false  },
    { id: 6,parent:0, iconName: "Point of Sale", icon: await import("@mui/icons-material/PointOfSale"), child:false  },
    { id: 7,parent:0, iconName: "Quality Control", icon: await import("@mui/icons-material/PlaylistAddCheck"), child:false },
    { id: 8,parent:0, iconName: "Settings", icon: await import("@mui/icons-material/Settings"), child:true  },
    { id: 9, parent:1, iconName: "Home1", icon: await import("@mui/icons-material/Home") },
    { id: 10, parent:1, iconName: "Home2", icon: await import("@mui/icons-material/LocalAtm") },
    { id: 11, parent:1, iconName: "Home3", icon: await import("@mui/icons-material/Inventory"),url:"/home3" },
    { id: 12,parent:2, iconName: "Financials1", icon: await import("@mui/icons-material/AccountBalance"),url:"/Financials1" },
    { id: 13,parent:2, iconName: "Financials2", icon: await import("@mui/icons-material/Warehouse"), url:"/Financials2" },
    { id: 14,parent:3, iconName: "Inventory1", icon: await import("@mui/icons-material/PointOfSale") },
    { id: 15,parent:4, iconName: "Fixed Asset1", icon: await import("@mui/icons-material/PlaylistAddCheck") },
    { id: 16,parent:5, iconName: "Production1", icon: await import("@mui/icons-material/Settings") },
    { id: 17, parent:6, iconName: "Point of Sale1", icon: await import("@mui/icons-material/Home") },
    { id: 18, parent:7, iconName: "Quality Control1", icon: await import("@mui/icons-material/LocalAtm") },
    { id: 19, parent:8, iconName: "Settings1", icon: await import("@mui/icons-material/Inventory") },
    { id: 20,parent:9, iconName: "Home4", icon: await import("@mui/icons-material/AccountBalance") },
    { id: 21,parent:9, iconName: "Home5", icon: await import("@mui/icons-material/Warehouse"), url:"/home5" },
    { id: 22,parent:20, iconName: "Home6", icon: await import("@mui/icons-material/PointOfSale") , url:"/home6" },
    { id: 23,parent:20, iconName: "Home7", icon: await import("@mui/icons-material/PlaylistAddCheck"),url:"/home7" },
    { id: 24,parent:23, iconName: "Home8", icon: await import("@mui/icons-material/Settings"), url:"/home8" },
    { id: 25,parent:10, iconName: "Home9", icon: await import("@mui/icons-material/PointOfSale") ,url:"/home9"},
    { id: 26,parent:10, iconName: "Home10", icon: await import("@mui/icons-material/PlaylistAddCheck"),url:"/home10" },
    { id: 27,parent:26, iconName: "Home11", icon: await import("@mui/icons-material/Settings"),url:"/home11" },
  ];