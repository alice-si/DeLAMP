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
          max: 'number'
        },
        tracking: {
          author: '0xc846b6f1C7E6a9320Eb3Bee7f67fDDC0C48e603b',
          auditor: '0xc846b6f1C7E6a9320Eb3Bee7f67fDDC0C48e603b',
          authorFee: 1,
          auditorFee: 100,
          registryFee: 12,
          price: 100,
          successCount: 123,
          failureCount: 12
        }
      },
      {
        id: 'SingleCommissioner',
        title: 'Single Commissioner',
        legalContent: `
Certificates
Each certificate for Notes shall:
bear a denoting number;
be issued to a Noteholder in digital token form pursuant to the smart contract at address [Ethereum address] and containing the information set out in ‎Schedule 1 and shall be executed by the Issuer in accordance with the UK Companies Act 2006; and
have the Conditions endorsed on or attached to it.
Each Noteholder shall be entitled to receive without charge one physical certificate for the Notes registered in their name.
The Issuer shall not be bound to register more than four persons as the joint holders of any Notes and, in the case of Notes held jointly by several persons, the Issuer shall not be bound to issue more than one certificate. Delivery of a certificate in digital or physical from to the person who is first named in the Register as Noteholder shall be sufficient delivery to all joint holders of the Notes in respect of which such certificate has been delivered.
When a Noteholder transfers or redeems part only of their Notes, the old certificate shall be cancelled and a new certificate for the balance of such Notes shall be issued without charge.
`,
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
          successCount: 123,
          failureCount: 12
        }
      }
    ],
    'Investment': [
      {
        id: 'defaultInvestmentClause',
        title: 'Default Investment Clause',
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
          successCount: 123,
          failureCount: 12
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
