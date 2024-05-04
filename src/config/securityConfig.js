export const initialRows = [{
    iId: 1,
    profileName: 'Abc',
    createdOn: '2020-01-01',
    modifiedOn: '2020-01-01',
   
    
    
  },{
    iId: 2,
    profileName: 'ghi1231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231abc',
    createdOn: '2020-01-01',
    modifiedOn: '2020-01-01',
  
    
  },{
    iId: 3,
    profileName: 'xyz',
    createdOn: '2020-01-01',
    modifiedOn: '2020-01-01',
  
    
  }];

  export const createProfileTree = [
    {
        id: "1",
        label: "Home",
        children: [
          { id: "9", label: "Company" ,
          children: [
            { id: "10", label: "Open Company" },
            {
                id: "11",
                label: "New Company",
                children: [
                    { id: "12", label: "Create Company" },
                    
                ],
            },
            { id: "13", label: "Edit Company" },
            { id: "14", label: "Delete Company" },
          ],
          },
          {
              id: "15",
              label: "Security",
              children: [
                { id: "16", label: "Create Profile" },
                { id: "17", label: "Create Role" },
                { id: "18", label: "Create User" },
              ],
              
              
          },
          {
            id: "19",
            label: "Masters",
            children: [
              { id: "20", label: "Account" ,children: [
                { id: "21", label: "Account Master" },
                { id: "22", label: "Customer/vendor Master" },
                
              ],},
              { id: "23", label: "Currency" ,children: [
                { id: "24", label: "Currency Master" },
                { id: "25", label: "Exchange Rate" },
                { id: "26", label: "Exchange Rate History" },
                
              ],},
              { id: "27", label: "Product" ,children: [
                { id: "28", label: "Product" },
                { id: "29", label: "Unit" },
                { id: "30", label: "Unit Conversion" },
                { id: "31", label: "Seller Price Book" },
                { id: "32", label: "Buyer Price Book" },
                { id: "33", label: "Barcode Definition" },
                
              ],},
              { id: "34", label: "warehouse" }

              
            ],
            
            
        },
      ],
    },
    {
        id: "2",
        label: "Financials",
        // children: [
        //     { id: "9", label: "Direct Expenses" },
        //     {
        //         id: "10", label: "Indirect Expenses",
        //         children: [
        //             { id: "21", label: "Administrative Expenses" },
        //             {
        //                 id: "22",
        //                 label: "Employee Benefits",
        //             },
        //             { id: "23", label: "Financial Charges" },
        //             { id: "24", label: "Gain and Loss" },
        //         ],
        //     },
        // ],
    },
    {
        id: "3",
        label: "Inventory",
        // children: [{ id: "11", label: "Sales" }],
    },
    {
        id: "4",
        label: "Fixed Asset",
        // children: [{ id: "12", label: "Captial" }],
    },
    {
        id: "5",
        label: "Production",
        // children: [
        //     {
        //         id: "13", label: "Loans & Borrowings",
        //         children: [
        //             { id: "25", label: "Loans" }]
        //     },
        //     { id: "14", label: "Accrued Liabilities" },
        //     { id: "15", label: "Trade Payable" },
        //     { id: "16", label: "Provisions" },
        // ],
    },
    {
        id: "6",
        label: "Point of Sale",
    },
    {
      id: "7",
      label: "Quality Control",
      // children: [
      //     {
      //         id: "13", label: "Loans & Borrowings",
      //         children: [
      //             { id: "25", label: "Loans" }]
      //     },
      //     { id: "14", label: "Accrued Liabilities" },
      //     { id: "15", label: "Trade Payable" },
      //     { id: "16", label: "Provisions" },
      // ],
  },
  {
    id: "8",
    label: "Settings",
    children: [
        {
            id: "35", label: "Main Settings",
            children: [
                { id: "36", label: "Tag Settings" },
                { id: "37", label: "Account Settings" }
            ]
        },
        { id: "38", label: "Voucher Settings" },
        { id: "39", label: "Master Settings" },
        
    ],
},
];   
export const restrictionItems = [
  "Access", "Add", "Edit", "Copy", "Search", "Delete", "Print", "Export",
  "Customize View", "Sort", "Mass Update", "Authorize", "Transfer",
  "Properties", "Ledger", "Back Track", "Budgets", "Help", "Create Tree",
  "Delete Tree", "Create View", "Edit View", "Delete View", "Select View",
  "Select Tree", "Clone", "Add Group", "Group Master", "Set Type", "Delete All",
  "Move Up", "Move Down", "Credit Management", "Department Appropriation",
  "Customize Tree", "Customize Master", "Can Change Group", "Can Navigate",
  "Add Info Panel", "Edit Info Panel", "View Info Panel", "Reject", "Import",
  "Show home page", "Delete Info Panel", "Stop", "Save Revision", "Set Default Tree",
  "Modifier", "Edit Tree", "Authorization Info", "Alternate", "Related",
  "Open Close", "Close Product", "Adv Master Import/Export", "General", "Setting",
  "Details", "Print Layout", "VAT Settings", "TabNew", "Department"
];

export const historyProfile  = [
  { id: 1, profileName: "Portal", date: "15-04-2024", time: "13:56:07", loginName: "SU" },
  { id: 2, profileName: "", date: "", time: "", loginName: "" },
  { id: 3, profileName: "", date: "", time: "", loginName: "" },
  { id: 4, profileName: "", date: "", time: "", loginName: "" },
  { id: 5, profileName: "", date: "", time: "", loginName: "" }
];