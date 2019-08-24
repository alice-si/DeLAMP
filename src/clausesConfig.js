let conf = {
  clauses: {
    'Funding': [
      {
        id: 'donation',
        title: 'Open Donation',
        legalContent: `This deed is dated {{ max }} and entered into by
{{ max }} incorporated and registered in [England and Wales] with company number [NUMBER] whose registered office is at {{ max }} (Issuer)
BACKGROUND
(A) [FUNDER] (Funder) and the Issuer have entered into an agreement under which the Issuer will undertake certain activities to achieve [PURPOSE] and the Funder will deposit into escrow funds equivalent in amount to £{{ max }}. Such escrowed amounts shall be paid to the Issuer upon successful fulfilment of specific conditions as set out in this instrument.
(B) To provide advance funding sufficient to enable the Issuer to undertake the relevant activities, the Issuer has, by resolution of its board of directors passed on {{ max }}, resolved to create up to a maximum nominal amount of £{{ max }} zero coupon unsecured loan notes [YEAR], to be constituted in the manner set out below. Agreed terms
`,
        arguments: {
          min_donation: null,
          max_donation: null,
        },
        tracking: {
          author: '0xc846b6f1C7E6a9320Eb3Bee7f67fDDC0C48e603b',
          auditor: '0xc846b6f1C7E6a9320Eb3Bee7f67fDDC0C48e603b',
          authorFee: 1,
          auditorFee: 100,
          registryFee: 12,
          price: 100,
          successCount: 0,
          failureCount: 0
        }
      },
      {
        id: 'SingleCommissioner',
        title: 'Single Commissioner',
        legalContent: `
        Validator: 0xc846b6f1C7E6a9320Eb3Bee7f67fDDC0C48e603b, whose Ethereum address is 0xc3827df1C7E6a9320Eb3Bee7f67fDDC0C48e603b.
        1.2 Any reference in this instrument to:

        (a) the assets of any person shall be construed as a reference to all or any part of
        its business, undertaking, property, assets, revenues (including any right to
        receive revenues) and uncalled capital;
        (b) an encumbrance shall be construed as a reference to a mortgage, charge,
        assignment, pledge, lien (save as arising in the ordinary course of business),
        hypothecation, right of set-off (save as arising under the general law for the
        protection of certain classes of creditors) or trust arrangement for the purpose of
        and having a similar effect to the granting of security, or other security interest
        of any kind;
        (c) indebtedness shall be construed as a reference to any obligation for the
        payment or repayment of money, whether as principal or as surety and whether
        present or future, actual or contingent;,`,
        arguments: {
          max: 'number',
          address: 'string',
        },
        tracking: {
          author: '0xc846b6f1C7E6a9320Eb3Bee7f67fDDC0C48e603b',
          auditor: '0xc846b6f1C7E6a9320Eb3Bee7f67fDDC0C48e603b',
          authorFee: 1,
          auditorFee: 100,
          registryFee: 12,
          price: 1000,
          successCount: 0,
          failureCount: 0
        }
      }
    ],
    'Investment': [
      {
        id: 'defaultInvestmentClause',
        title: 'Default Investment Clause',
        legalContent: `
Register {{ min }}, {{ max }}
The Issuer shall, at all times, keep the Register at its registered office (or at such other place as the Issuer may from time to time have appointed for the purpose and have notified to the Noteholders).
The Register shall contain the following details:
the names and addresses of the Noteholders for the time being;
the principal amount of the Notes held by each Noteholder;
the date at which the name of each Noteholder is entered in respect of the Notes registered in their name;
the date of issue of each Note; and
all transfers and changes of ownership of the Notes.
Any change of name or address by any Noteholder that is notified to the Issuer at its registered office address above shall be entered in the Register.
Any Noteholder may at all reasonable times during office hours and on reasonable notice inspect, and take copies of, the Register.]
`,
        arguments: {
          min: 'number',
          max: 'number',
          priceMechanism: 'string',
          denomination: 'number',
        },
        tracking: {
          author: '0xc846b6f1C7E6a9320Eb3Bee7f67fDDC0C48e603b',
          auditor: '0xc846b6f1C7E6a9320Eb3Bee7f67fDDC0C48e603b',
          authorFee: 1,
          auditorFee: 100,
          registryFee: 12,
          price: 5000,
          successCount: 0,
          failureCount: 0
        }
      },
    ],
    'Validation': [
      {
        id: 'AshhurstValidationClause',
        title: 'Ashhurst Validation Clause',
        legalContent: `
Register
The Issuer shall, at all times, keep the Register at its registered office (or at such other place as the Issuer may from time to time have appointed for the purpose and have notified to the Noteholders).
The Register shall contain the following details:
the names and addresses of the Noteholders for the time being;
the principal amount of the Notes held by each Noteholder;
the date at which the name of each Noteholder is entered in respect of the Notes registered in their name;
the date of issue of each Note; and
all transfers and changes of ownership of the Notes.
Any change of name or address by any Noteholder that is notified to the Issuer at its registered office address above shall be entered in the Register.
Any Noteholder may at all reasonable times during office hours and on reasonable notice inspect, and take copies of, the Register.]
`,
        arguments: {
          min: 'number',
          max: 'number',
          priceMechanism: 'string',
          denomination: 'number',
        },
        tracking: {
          author: '0xc846b6f1C7E6a9320Eb3Bee7f67fDDC0C48e603b',
          auditor: '0xc846b6f1C7E6a9320Eb3Bee7f67fDDC0C48e603b',
          authorFee: 1,
          auditorFee: 100,
          registryFee: 12,
          price: 5000,
          successCount: 0,
          failureCount: 0
        }
      },
    ]
  },
  colours: {
    'Funding' : ['#90caf9', '#42a5f5'],//_colors.scss $blue-200
    'Investment' : ['#80cbc4', '#26a69a'], //_colors.scss $teal-200

  },
  icons: {
    'Funding' : 'cloud_upload',
    'Investment' : 'swap_horiz',
    'Validation' : 'check_circle',
    'Redemption' : 'cloud_download',
  }
};

conf.types = Object.keys(conf.clauses);

export default conf;
