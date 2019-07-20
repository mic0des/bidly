exports.seed = function(knex, Promise) {
  
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    return knex('categories').del()
  })
  .then(function () {
    return knex('auctions').del()
  })
  .then(function () {
    return knex('bids').del()
  })
  .then(function () {
    return knex('notifications').del()
  }) 
  .then(function () {
    return Promise.all([

    // Inserts seed entries
    knex('categories').insert({name: 'Food'}),
    knex('categories').insert({name: 'Beauty'}),
    knex('categories').insert({name: 'Home stuff'}),

    knex('notifications').insert({auction_id: 1, type: 'auction-end'}),
    knex('notifications').insert({auction_id: 1, type: 'winning-auction'}),

    knex('auctions').insert({category_id: 1, name: 'snickers ice cream', description: 'lots of chocolate and tasty', min_bid: '100', start_time: '2019-05-04 10:10:10', end_time: '2019-05-04 15:10:10' , image: 'https://i.imgur.com/EZjcSmV.jpg', user_id: 1}),
    knex('auctions').insert({category_id: 1, name: 'oreo ice cream', description: 'creamy and tasty', min_bid: '300', start_time: '2019-07-19 10:10:10', end_time: '2019-08-20 10:10:10', image: 'https://i.imgur.com/vDhRudd.jpg', user_id: 2}),

    knex('users').insert({first_name: 'Anna', last_name:'Tykhomyrova', email: 'anna@gmail.com', password:'pass123', balance:'1000' }),
    knex('users').insert({first_name: 'Asuka', last_name:'Kuwahara', email: 'asuka@gmail.com', password:'pass123', balance:'20000' }),
    knex('users').insert({first_name: 'Yifei', last_name:'Zhou', email: 'yifei@gmail.com', password:'pass123', balance:'1000' })


    ]);
  })
}