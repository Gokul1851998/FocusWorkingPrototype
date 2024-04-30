export const userName = "test"
export const loginPassword = 'test'
export const userId = 617
export const imageIcon = "/images/sangsolution.png";
export const primaryColor= "#2460A7"
export const secondryColor= "#1E8FD8"
export const thirdColor= "#85B3D1"
export const primaryButtonColor = "#ffff"
export const activePrimaryColor = "#1D4D86"

export const SideBarIcons = [
    { id: 1,parent:0, iconName: "Home", icon: await import("@mui/icons-material/Home"), child:true },
    { id: 2,parent:0, iconName: "Financials", icon: await import("@mui/icons-material/LocalAtm"), child:false  },
    { id: 3,parent:0, iconName: "Inventory", icon: await import("@mui/icons-material/Inventory"), child:false  },
    { id: 4,parent:0, iconName: "Fixed Asset", icon: await import("@mui/icons-material/AccountBalance"), child:false  },
    { id: 5,parent:0, iconName: "Production", icon: await import("@mui/icons-material/Warehouse"), child:false  },
    { id: 6,parent:0, iconName: "Point of Sale", icon: await import("@mui/icons-material/PointOfSale"), child:false  },
    { id: 7,parent:0, iconName: "Quality Control", icon: await import("@mui/icons-material/PlaylistAddCheck"), child:false },
    { id: 8,parent:0, iconName: "Settings", icon: await import("@mui/icons-material/Settings"), child:true  },
    { id: 9, parent:1, iconName: "Company", icon: await import("@mui/icons-material/Home"),child:true },
    { id: 10, parent:1, iconName: "Security", icon: await import("@mui/icons-material/LocalAtm"),child:true },
    { id: 11, parent:1, iconName: "Master", icon: await import("@mui/icons-material/Inventory"),child:true },
    { id: 12,parent:10, iconName: "Create Profile", icon: await import("@mui/icons-material/Warehouse"), url:"/CreateProfile" },
    { id: 13,parent:10, iconName: "Create Role", icon: await import("@mui/icons-material/PointOfSale"), url:"/CreateRole" },
    { id: 14,parent:10, iconName: "Create User", icon: await import("@mui/icons-material/PlaylistAddCheck"),url:"/CreateUser" },
    { id: 15, parent:11, iconName: "Account", icon: await import("@mui/icons-material/Home"),child:true },
    { id: 16, parent:11, iconName: "Currency", icon: await import("@mui/icons-material/LocalAtm"),child:true },
    { id: 17, parent:11, iconName: "Product", icon: await import("@mui/icons-material/Inventory"),child:true },
    { id: 18,parent:11, iconName: "Warehouse", icon: await import("@mui/icons-material/PointOfSale") ,url:"/Master" },
    { id: 19, parent:15, iconName: "Account Master", icon: await import("@mui/icons-material/Inventory"),url:"/Master" },
    { id: 20,parent:15, iconName: "Customer/Vendor master", icon: await import("@mui/icons-material/PointOfSale") ,url:"/Master" },
    { id: 21, parent:16, iconName: "Currency Master", icon: await import("@mui/icons-material/Inventory"),url:"/Master" },
    { id: 22,parent:16, iconName: "Exchange Rate", icon: await import("@mui/icons-material/PointOfSale") ,url:"/Master" },
    { id: 23, parent:16, iconName: "Exchange Rate History", icon: await import("@mui/icons-material/Inventory"),url:"/Master" },
    { id: 24, parent:17, iconName: "Product", icon: await import("@mui/icons-material/Inventory"),url:"/Master" },
    { id: 25,parent:17, iconName: "Unit", icon: await import("@mui/icons-material/PointOfSale") ,url:"/Master" },
    { id: 26, parent:17, iconName: "Unit Conversion", icon: await import("@mui/icons-material/Inventory"),url:"/Master" },
    { id: 27, parent:17, iconName: "Seller Price Book", icon: await import("@mui/icons-material/Inventory"),url:"/Master" },
    { id: 28,parent:17, iconName: "Buyer Price Book", icon: await import("@mui/icons-material/PointOfSale") ,url:"/Master" },
    { id: 29, parent:17, iconName: "Barcode Definition", icon: await import("@mui/icons-material/Inventory"),url:"/Master" },
    { id: 30, parent:8, iconName: "Main Settings", icon: await import("@mui/icons-material/Inventory"),child:true },
    { id: 31,parent:8, iconName: "Voucher Settings", icon: await import("@mui/icons-material/PointOfSale") ,url:"/VoucherSettings" },
    { id: 32, parent:8, iconName: "Master Settings", icon: await import("@mui/icons-material/Inventory"),url:"/MasterSettings" },
    { id: 33,parent:30, iconName: "Tag Settings", icon: await import("@mui/icons-material/PointOfSale") ,url:"/TagSettings" },
    { id: 34, parent:30, iconName: "Account Settings", icon: await import("@mui/icons-material/Inventory"),url:"/AccountSettings" },
    { id: 35, parent:9, iconName: "Open Company", icon: await import("@mui/icons-material/Home"),url:"/OpenCompany" },
    { id: 36, parent:9, iconName: "Create Company", icon: await import("@mui/icons-material/Home"),url:"/CreateCompany" },
    { id: 37, parent:9, iconName: "Edit Company", icon: await import("@mui/icons-material/Home"),url:"/EditCompany" },
    { id: 38, parent:9, iconName: "Delete Company", icon: await import("@mui/icons-material/Home"),url:"/DeleteCompany" },
    

  ];