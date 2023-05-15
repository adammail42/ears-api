const { addHospitalHandler, getAllHospitalsHandler, getHospitalByIdHandler, editHospitalByIdHandler, deleteHospitalByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/hospitals',
    handler: addHospitalHandler,
  },
  {
    method: 'GET',
    path: '/hospitals',
    handler: getAllHospitalsHandler,
  },
  {
    method: 'GET',
    path: '/hospitals/{id}',
    handler: getHospitalByIdHandler,
  },
  {
    method: 'PUT',
    path: '/hospitals/{id}',
    handler: editHospitalByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/hospitals/{id}',
    handler: deleteHospitalByIdHandler,
  },
];

module.exports = routes;
