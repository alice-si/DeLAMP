
export const state = {
  conditions: [],
  hgContract: {},
  hgRegistry: {},
  projects: [
    {
      code: "UNEMPLOYMENT",
      name: "Job training and activation program",
      country: "Poland",
      balance: "$5,000",
      interests: "10%"
    },
    {
      code: "CANCER",
      name: "Breast cancer mammography analytics",
      country: "United Kingdom",
      balance: "$10,000",
      interests: "3%"
    },
    {
      code: "WATER",
      name: "Building new wells in sub-saharan Africa",
      country: "Sudan",
      balance: "$2,500",
      interests: "5%"
    }
  ],
  projectDesc: {
    "UNEMPLOYMENT":  "Job training and activation program"
  },
  wallet: {
    active: false,
    address: ''
  },
  balance: {
    value: 0
  }
};
