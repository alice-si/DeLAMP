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
        popularity: 47,
      },
      {
        id: 'comission',
        title: 'comission',
        legalContent: 'Some other legal text alalalal {{max}} {{address}}',
        arguments: {
          max: 'number',
          address: 'string',
        },
        popularity: 53,
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
        popularity: 88,
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
