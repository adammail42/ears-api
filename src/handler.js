const { nanoid } = require('nanoid');
const _ = require('lodash');
const hospitals = require('./hospitals');

const addHospitalHandler = (request, h) => {
  const { name, price, roomCapacity, latitude, longitude } = request.payload;

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newHospital = {
    id,
    name,
    price,
    room_capacity: roomCapacity,
    coordinate: {
      latitude,
      longitude,
    },
    insertedAt,
    updatedAt,
  };

  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan rumah sakit. Mohon isi nama rumah sakit',
    });

    response.code(400);
    return response;
  }

  hospitals.push(newHospital);

  const isSuccess = hospitals.filter((hospital) => hospital.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Rumah sakit berhasil ditambahkan',
      data: {
        hospitalId: id,
      },
    });

    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'Rumah sakit gagal ditambahkan',
  });

  response.code(500);
  return response;
};

const getAllHospitalsHandler = (request) => {
  const { name } = request.query;

  let hospitalsFilter = hospitals;

  if (name) {
    hospitalsFilter = hospitals.filter((n) => n.name.toLowerCase().includes(name.toLowerCase()));
  }

  return {
    status: 'success',
    data: {
      hospitals: hospitalsFilter.map((n) => _.pick(n, ['id', 'name', 'price'])),
    },
  };
};

const getHospitalByIdHandler = (request, h) => {
  const { id } = request.params;

  const hospital = hospitals.filter((n) => n.id === id)[0];

  if (hospital !== undefined) {
    return {
      status: 'success',
      data: {
        hospital,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Rumah sakit tidak ditemukan',
  });

  response.code(404);
  return response;
};

const editHospitalByIdHandler = (request, h) => {
  const { id } = request.params;

  const { name, price, roomCapacity, latitude, longitude } = request.payload;
  const updatedAt = new Date().toISOString();

  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui rumah sakit. Mohon isi nama rumah sakit',
    });

    response.code(400);
    return response;
  }

  const index = hospitals.findIndex((hospital) => hospital.id === id);

  if (index !== -1) {
    hospitals[index] = {
      ...hospitals[index],
      name,
      price,
      room_capacity: roomCapacity,
      coordinate: {
        latitude,
        longitude,
      },
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Rumah sakit berhasil diperbarui',
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui rumah sakit. Id tidak ditemukan',
  });

  response.code(404);
  return response;
};

const deleteHospitalByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = hospitals.findIndex((hospital) => hospital.id === id);

  if (index !== -1) {
    hospitals.splice(index, 1);

    const response = h.response({
      status: 'success',
      message: 'Rumah sakit berhasil dihapus',
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Rumah sakit gagal dihapus. Id tidak ditemukan',
  });

  response.code(404);
  return response;
};

module.exports = {
  addHospitalHandler,
  getAllHospitalsHandler,
  getHospitalByIdHandler,
  editHospitalByIdHandler,
  deleteHospitalByIdHandler,
};
