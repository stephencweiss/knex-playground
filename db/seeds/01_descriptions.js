
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('descriptions').del()
    .then(function () {
      // Inserts seed entries
      return knex('descriptions').insert([
        {
          id: 1, 
          product_name: 'Handmade Plastic Bacon', 
          product_id: 1, 
          features: ["Incredible","Gorgeous","Tasty","Rustic","Practical","Handcrafted","Generic","Fantastic","Licensed"], 
          tech_specs: 
            [
              {"type":"eaque","description":"Rustic","measurement":true},
              {"type":"et","description":"Handmade","measurement":false},
              {"type":"rerum","description":"Small","measurement":true},
              {"type":"sequi","description":"Handmade","measurement":true},
              {"type":"error","description":"Incredible","measurement":true}
            ]
          },
        {
          id: 2, 
          product_name: 'Practical Wooden Computer', 
          product_id: 2, 
          features: ["Handmade","Practical","Generic","Tasty","Fantastic","Gorgeous","Refined"], 
          tech_specs: 
          [
            {"type":"assumenda","description":"Awesome","measurement":true},
            {"type":"a","description":"Ergonomic","measurement":true},
            {"type":"et","description":"Tasty","measurement":true}
          ] 
        },
        {
          id: 3, 
          product_name: 'Unbranded Wooden Cheese', 
          product_id: 3, 
          features: ["Refined","Licensed","Practical","Licensed","Handmade","Awesome","Intelligent","Licensed","Intelligent","Unbranded"], 
          tech_specs: 
          [
            {"type":"deleniti","description":"Licensed","measurement":true},
            {"type":"iure","description":"Small","measurement":true},
            {"type":"et","description":"Handmade","measurement":false}
          ]
        },
        {
          id: 4, 
          product_name: 'Unbranded Rubber Towels', 
          product_id: 4, 
          features: ["Sleek","Incredible","Unbranded","Ergonomic","Fantastic","Handcrafted","Incredible"], 
          tech_specs: 
          [
            {"type":"quas","description":"Fantastic","measurement":true},
            {"type":"est","description":"Rustic","measurement":true},
            {"type":"tenetur","description":"Handcrafted","measurement":false},
            {"type":"sequi","description":"Generic","measurement":true}
          ]
        },
      ]);
    });
};


