let conf = {
  clauses: {
    'funding': [
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
    'investment': [
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
  }
};

conf.types = Object.keys(conf.clauses);

export default conf;
