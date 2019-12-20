const carRoutes = require('./cars/carRouter')
const salesRoutes = require('./sales/salesRouter')

module.exports = server => {
  server.use('/api/cars', carRoutes)
  server.use('/api/sales', salesRoutes)
}