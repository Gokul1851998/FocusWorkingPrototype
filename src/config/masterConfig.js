export const accountTree = [
    {
        id: "1",
        label: "Assets",
        children: [
            { id: "7", label: "Fixed Assets" },
            {
                id: "8",
                label: "Current Assets",
                children: [
                    { id: "17", label: "Cash & bank" },
                    {
                        id: "18",
                        label: "Inventories",
                    },
                    { id: "19", label: "Account Receivable" },
                    { id: "20", label: "Investments" },
                ],
            },
        ],
    },
    {
        id: "2",
        label: "Expenses",
        children: [
            { id: "9", label: "Direct Expenses" },
            {
                id: "10", label: "Indirect Expenses",
                children: [
                    { id: "21", label: "Administrative Expenses" },
                    {
                        id: "22",
                        label: "Employee Benefits",
                    },
                    { id: "23", label: "Financial Charges" },
                    { id: "24", label: "Gain and Loss" },
                ],
            },
        ],
    },
    {
        id: "3",
        label: "Revenue",
        children: [{ id: "11", label: "Sales" }],
    },
    {
        id: "4",
        label: "Equities",
        children: [{ id: "12", label: "Captial" }],
    },
    {
        id: "5",
        label: "Liabilities",
        children: [
            {
                id: "13", label: "Loans & Borrowings",
                children: [
                    { id: "25", label: "Loans" }]
            },
            { id: "14", label: "Accrued Liabilities" },
            { id: "15", label: "Trade Payable" },
            { id: "16", label: "Provisions" },
        ],
    },
    {
        id: "6",
        label: "Control Accounts",
    },
];


export const accountData = [
    {
        MasterId: 1,
        Name: "Example Name 1",
        Code: "ABC123",
        AccountType: "Type A",
        CreatedBy: "User123"
    },
    {
        MasterId: 2,
        Name: "Example Name 2",
        Code: "DEF456",
        AccountType: "Type B",
        CreatedBy: "User456"
    },
    {
        MasterId: 3,
        Name: "Example Name 3",
        Code: "GHI789",
        AccountType: "Type C",
        CreatedBy: "User789"
    },
    {
        MasterId: 4,
        Name: "Example Name 4",
        Code: "JKL012",
        AccountType: "Type D",
        CreatedBy: "User012"
    },
    {
        MasterId: 5,
        Name: "Example Name 5",
        Code: "MNO345",
        AccountType: "Type E",
        CreatedBy: "User345"
    },
    {
        MasterId: 6,
        Name: "Example Name 6",
        Code: "PQR678",
        AccountType: "Type F",
        CreatedBy: "User678"
    },
    {
        MasterId: 7,
        Name: "Example Name 7",
        Code: "STU901",
        AccountType: "Type G",
        CreatedBy: "User901"
    },
    {
        MasterId: 8,
        Name: "Example Name 8",
        Code: "VWX234",
        AccountType: "Type H",
        CreatedBy: "User234"
    },
    {
        MasterId: 9,
        Name: "Example Name 9",
        Code: "YZA567",
        AccountType: "Type I",
        CreatedBy: "User567"
    },
    {
        MasterId: 10,
        Name: "Example Name 10",
        Code: "BCD890",
        AccountType: "Type J",
        CreatedBy: "User890"
    },
    {
        MasterId: 11,
        Name: "Example Name 11",
        Code: "EFG123",
        AccountType: "Type K",
        CreatedBy: "User123"
    },
    {
        MasterId: 12,
        Name: "Example Name 12",
        Code: "HIJ456",
        AccountType: "Type L",
        CreatedBy: "User456"
    },
];

export const exchangeRateData = [
    {
        MasterId: 1,
      "Currency Name": "gtgt",
      "Defined As": "gg",
      "Rate": 96,
      "Description": "gtgtg"
    },
    {
        MasterId: 2,
      "Currency Name": "USD",
      "Defined As": "US Dollar",
      "Rate": 1,
      "Description": "United States Dollar"
    },
    {
        MasterId: 3,
      "Currency Name": "EUR",
      "Defined As": "Euro",
      "Rate": 0.85,
      "Description": "European Currency"
    },
    {
        MasterId: 4,
      "Currency Name": "GBP",
      "Defined As": "British Pound",
      "Rate": 0.73,
      "Description": "Pound Sterling"
    },
  ];
  