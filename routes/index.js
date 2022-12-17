// we make this middleware all router will be access form here

const userRoutes= require('./userRoutes');
const adminRoutes= require('./adminRoutes');
const clientRoutes= require('./clientRoutes');

module.exports ={
  userRoutes,
  adminRoutes,
  clientRoutes
}