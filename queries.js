export const basicInforamtion = `
    query {
        user {
            attrs
            auditRatio
            id
            login
        }
    }
`;

export const xps = `
  query {
    user {
      xps {
        amount
        originEventId
        path
        userId
      }
    }
  }
`;


export const skills = `
    query {
        transaction{
            type
            amount
        }    
    }
`;
//
export const xpFromTransactionQuery = [`
    {
      transaction(
        where: {_and: [{userId: {_eq: `, `}}, {type: {_eq: "xp"}}]}
        order_by: {createdAt: asc}
      ) {
        amount
        createdAt
        path
      }
    }`
];