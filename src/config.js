
export const imageIcon = "/images/sangsolution.png";
export const primaryColor= "#00405E"
export const secondryColor= "#1E8FD8"
export const thirdColor= "0073AA"
export const primaryButtonColor = "#ffff"
export const activePrimaryColor = "#1D4D86"

export const SideBarIcons = [
    { id: 1,parent:0, iconName: "Home", icon:  import("@mui/icons-material/Home"), child:true },
    { id: 2,parent:0, iconName: "Financials", icon:  import("@mui/icons-material/LocalAtm"), child:false  },
    { id: 3,parent:0, iconName: "Inventory", icon:  import("@mui/icons-material/Inventory"), child:false  },
    { id: 4,parent:0, iconName: "Fixed Asset", icon:  import("@mui/icons-material/AccountBalance"), child:false  },
    { id: 5,parent:0, iconName: "Production", icon:  import("@mui/icons-material/Warehouse"), child:false  },
    { id: 6,parent:0, iconName: "Point of Sale", icon:  import("@mui/icons-material/PointOfSale"), child:false  },
    { id: 7,parent:0, iconName: "Quality Control", icon:  import("@mui/icons-material/PlaylistAddCheck"), child:false },
    { id: 8,parent:0, iconName: "Settings", icon:  import("@mui/icons-material/Settings"), child:true  },
    { id: 9, parent:1, iconName: "Company", icon:  import("@mui/icons-material/Home"),child:true },
    { id: 10, parent:1, iconName: "Security", icon:  import("@mui/icons-material/LocalAtm"),child:true },
    { id: 11, parent:1, iconName: "Master", icon:  import("@mui/icons-material/Inventory"),child:true },
    { id: 12,parent:10, iconName: "Create Profile", icon:  import("@mui/icons-material/Warehouse"), url:"/security" },
    { id: 13,parent:10, iconName: "Create Role", icon:  import("@mui/icons-material/PointOfSale"), url:"/security" },
    { id: 14,parent:10, iconName: "Create User", icon:  import("@mui/icons-material/PlaylistAddCheck"),url:"/security" },
    { id: 15, parent:11, iconName: "Account", icon:  import("@mui/icons-material/Home"),child:true },
    { id: 16, parent:11, iconName: "Currency", icon:  import("@mui/icons-material/LocalAtm"),child:true },
    { id: 17, parent:11, iconName: "Product", icon:  import("@mui/icons-material/Inventory"),child:true },
    { id: 18,parent:11, iconName: "Warehouse", icon:  import("@mui/icons-material/PointOfSale") ,url:"/Master" },
    { id: 19, parent:15, iconName: "Account Master", icon:  import("@mui/icons-material/Inventory"),url:"/Master" },
    { id: 20,parent:15, iconName: "Customer/Vendor master", icon:  import("@mui/icons-material/PointOfSale") ,url:"/Master" },
    { id: 21, parent:16, iconName: "Currency Master", icon:  import("@mui/icons-material/Inventory"),url:"/Master" },
    { id: 22,parent:16, iconName: "Exchange Rate", icon:  import("@mui/icons-material/PointOfSale") ,url:"/Master" },
    { id: 23, parent:16, iconName: "Exchange Rate History", icon:  import("@mui/icons-material/Inventory"),url:"/Master" },
    { id: 24, parent:17, iconName: "Product", icon:  import("@mui/icons-material/Inventory"),url:"/Master" },
    { id: 25,parent:17, iconName: "Unit", icon:  import("@mui/icons-material/PointOfSale") ,url:"/Master" },
    { id: 26, parent:17, iconName: "Unit Conversion", icon:  import("@mui/icons-material/Inventory"),url:"/Master" },
    { id: 27, parent:17, iconName: "Seller Price Book", icon:  import("@mui/icons-material/Inventory"),url:"/Master" },
    { id: 28,parent:17, iconName: "Buyer Price Book", icon:  import("@mui/icons-material/PointOfSale") ,url:"/Master" },
    // { id: 29, parent:17, iconName: "Barcode Definition", icon:  import("@mui/icons-material/Inventory"),url:"/Master" },
    { id: 30, parent:8, iconName: "General Settings", icon:  import("@mui/icons-material/Inventory"),child:true },
    { id: 31,parent:8, iconName: "Voucher Settings", icon:  import("@mui/icons-material/PointOfSale") ,url:"/VoucherSettings" },
    { id: 32, parent:8, iconName: "Master Settings", icon:  import("@mui/icons-material/Inventory"),url:"/MasterSettings" },
    { id: 33,parent:30, iconName: "Tag Settings", icon:  import("@mui/icons-material/PointOfSale") ,url:"/MainSettings" },
    { id: 34, parent:30, iconName: "Account tag Management", icon:  import("@mui/icons-material/Inventory"),url:"/MainSettings" },
    { id: 35, parent:9, iconName: "Open Company", icon:  import("@mui/icons-material/Home"),url:"/" },
    // { id: 36, parent:9, iconName: "Create Company", icon:  import("@mui/icons-material/Home"),url:"/Company" },
    { id: 37, parent:9, iconName: "Update Company", icon:  import("@mui/icons-material/Home"),url:"/Company" },
    // { id: 38, parent:9, iconName: "Delete Company", icon:  import("@mui/icons-material/Home"),url:"/DeleteCompany" },
    { id: 38,parent:30, iconName: "Inventory Tags Management", icon:  import("@mui/icons-material/PointOfSale") ,url:"/MainSettings" },
    { id: 39, parent:30, iconName: "Fixed Asset Tags Management", icon:  import("@mui/icons-material/Inventory"),url:"/MainSettings" },
    { id: 40, parent:8, iconName: "Entity Settings", icon:  import("@mui/icons-material/Inventory"),url:"/MainSettings" },

  ];