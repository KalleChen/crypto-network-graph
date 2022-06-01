graphs.init(
  "https://graphql.bitquery.io",
  "https://graphql.bitquery.io/ide/api/querytransfer",
  "BQY9Ovm30EC2gALkLCctTCKDAmhUc7cE"
);

const query = new graphs.query(`
query {
  ethereum {
    inbound: coinpath(initialAddress: {is: "0x0681d8db095565fe8a346fa0277bffde9c0edbbf"}, currency: {is: "ETH"}, depth: {lteq: 1}, options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}, date: {since: null, till: null}) {
      sender {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
          }
        }
      }
      receiver {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
          }
        }
      }
      amount
      currency {
        symbol
      }
      depth
      count
    }
    outbound: coinpath(initialAddress: {is: "0x0681d8db095565fe8a346fa0277bffde9c0edbbf"}, currency: {is: "ETH"}, depth: {lteq: 1}, options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}, date: {since: null, till: null}) {
      sender {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
          }
        }
      }
      receiver {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
          }
        }
      }
      amount
      currency {
        symbol
      }
      depth
      count
    }
  }
}
`);

new graphs.address_graph("#graph", query, {
  theme: "light",
});

query.request({});
