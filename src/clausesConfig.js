let conf = {
  clauses: {
    'Funding': [
      {
        id: 'donation',
        title: 'donation',
        legalContent: 'Some legal text alalalalalalal {{max}}',
        arguments: {
          max: 'number'
        },
        tracking: {
          author: '0xc846b6f1C7E6a9320Eb3Bee7f67fDDC0C48e603b',
          auditor: '0xc846b6f1C7E6a9320Eb3Bee7f67fDDC0C48e603b',
          authorFee: 1,
          auditorFee: 100,
          registryFee: 12,
          successCount: 123,
          failureCount: 12
        }
      },
      {
        id: 'comission',
        title: 'comission',
        legalContent: 'Some other legal text alalalal {{max}} {{address}}',
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
          successCount: 123,
          failureCount: 12
        }
      }
    ],
    'Investment': [
      {
        id: 'defaultInvestmentClause',
        title: 'Default Investment Clause',
        legalContent: 'Imvestemt clause ... Min: {{min}}',
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
          successCount: 123,
          failureCount: 12
        }
      },
    ]
  },
  colours: {
    'Funding' : ['#90caf9', '#42a5f5'],//_colors.scss $blue-200
    'Investment' : ['#80cbc4', '#26a69a'], //_colors.scss $teal-200

  }
};

conf.types = Object.keys(conf.clauses);

export default conf;
