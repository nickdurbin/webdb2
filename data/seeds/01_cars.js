exports.seed = async function(knex) {
  await knex("cars").truncate()
  await knex('cars').insert([
   { id: 1, VIN: "AWJDNLAME347NDkm012", make: "Honda", model: "CRV", mileage: 165000, trasmissionType: "Automatic", titleStatus: 'Good Standing' },
   { id: 2, VIN: "W3MDLPE789ZPPLKOWA83", make: "Tesla", model: "Cyber Truck", mileage: 000000, trasmissionType: "Automatic", titleStatus: 'Good Standing' },
  ])
};
