const hospitals = [
  {
    id: 'RH91DLas12hgf',
    name: 'RSUD Dr. Soetomo',
    price: 200000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.288923,
      longitude: 112.723967,
    },
  },
  {
    id: 'AH87SDi2jkl5',
    name: 'RSU Dr. Sutomo',
    price: 180000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.274889,
      longitude: 112.736609,
    },
  },
  {
    id: 'RK34HJm7Opq1',
    name: 'RSU Husada Utama',
    price: 220000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.294432,
      longitude: 112.713586,
    },
  },
  {
    id: 'KP21NVb5Ghju9',
    name: 'RSIA Manarul Iman',
    price: 250000,
    room_capacity: 6,
    coordinate: {
      latitude: -7.302355,
      longitude: 112.730275,
    },
  },
  {
    id: 'LM98BDn2Kl56s',
    name: 'RSU Siaga Raya',
    price: 190000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.288165,
      longitude: 112.737865,
    },
  },
  {
    id: 'PL78TRx9Zdcs4',
    name: 'RSU Royal Surabaya',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.295793,
      longitude: 112.719376,
    },
  },
  {
    id: 'YH45GFb3Xsw12',
    name: 'RSIA Bhakti Dharma Husada',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.303412,
      longitude: 112.735506,
    },
  },
  {
    id: 'DE67KLo1Pqwe3',
    name: 'RSU Darmo',
    price: 200000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.279342,
      longitude: 112.735599,
    },
  },
  {
    id: 'UI56HYb8Jkl21',
    name: 'RSUD Bhayangkara',
    price: 180000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.274197,
      longitude: 112.74717,
    },
  },
  {
    id: 'QW34TRn9Asd10',
    name: 'RSIA Puri Medika',
    price: 220000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.285417,
      longitude: 112.993475,
    },
  },
  {
    id: 'ZX12CVm3Bn56u',
    name: 'RSI Ibnu Sina',
    price: 190000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.291234,
      longitude: 112.718934,
    },
  },
  {
    id: 'PO90MNb6Vc43f',
    name: 'RSIA Arifin Achmad',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.289157,
      longitude: 112.736502,
    },
  },
  {
    id: 'YU09BNm8Lk65d',
    name: 'RSIA Kendangsari',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.295813,
      longitude: 112.744122,
    },
  },
  {
    id: 'TR67FGn2Jh76s',
    name: 'RSU Haji',
    price: 200000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.283496,
      longitude: 112.729171,
    },
  },
  {
    id: 'IO45JKm1Hg23d',
    name: 'RSU Putra Bahagia',
    price: 180000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.301672,
      longitude: 112.721913,
    },
  },
  {
    id: 'ED23RTb4Kl89s',
    name: 'RSU Hayam Wuruk',
    price: 220000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.296943,
      longitude: 112.73182,
    },
  },
  {
    id: 'VB56XCn3Mj21k',
    name: 'RSU Delta Surya',
    price: 250000,
    room_capacity: 6,
    coordinate: {
      latitude: -7.290789,
      longitude: 112.726571,
    },
  },
  {
    id: 'KJ78FGm2Lq12w',
    name: 'RSU Petrokimia Gresik',
    price: 190000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.305427,
      longitude: 112.735642,
    },
  },
  {
    id: 'MN90DFg5Jk34a',
    name: 'RSIA Buah Hati',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.307619,
      longitude: 112.728786,
    },
  },
  {
    id: 'ZQ34XCb7Nj56s',
    name: 'RSIA Andini',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.285993,
      longitude: 112.738261,
    },
  },
  {
    id: 'FD23RTy5Kl89s',
    name: 'RSI Putra Sehat',
    price: 220000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.302112,
      longitude: 112.715234,
    },
  },
  {
    id: 'VB45XCn3Jm21k',
    name: 'RSU Puri Medika',
    price: 250000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.286734,
      longitude: 112.729682,
    },
  },
  {
    id: 'KJ78FGm2Rq12w',
    name: 'RSIA Bunda Hati',
    price: 190000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.299516,
      longitude: 112.742529,
    },
  },
  {
    id: 'MN90DFg5Nk34a',
    name: 'RSU Bakti Dharma',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.291835,
      longitude: 112.737889,
    },
  },
  {
    id: 'ZQ34XCb7Aj56s',
    name: 'RSU Hayati',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.297671,
      longitude: 112.722446,
    },
  },
  {
    id: 'PL56TRx9Zdcs4',
    name: 'RSIA Permata Medika',
    price: 200000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.283518,
      longitude: 112.740315,
    },
  },
  {
    id: 'YH12GFb3Xsw45',
    name: 'RSU Permata Husada',
    price: 180000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.275994,
      longitude: 112.725677,
    },
  },
  {
    id: 'DE34KLo1Pqwe6',
    name: 'RSU Mitra Keluarga',
    price: 220000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.305269,
      longitude: 112.727583,
    },
  },
  {
    id: 'UI67HYb8Jkl21',
    name: 'RSIA Bumi Sehat',
    price: 250000,
    room_capacity: 6,
    coordinate: {
      latitude: -7.278416,
      longitude: 112.743998,
    },
  },
  {
    id: 'QW12TRn9Asd10',
    name: 'RSU Mitra Surabaya',
    price: 190000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.28882,
      longitude: 112.724215,
    },
  },
  {
    id: 'PL56TRx9Zdcs4',
    name: 'RSIA Permata Medika',
    price: 200000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.283518,
      longitude: 112.740315,
    },
  },
  {
    id: 'YH12GFb3Xsw45',
    name: 'RSU Permata Husada',
    price: 180000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.275994,
      longitude: 112.725677,
    },
  },
  {
    id: 'DE34KLo1Pqwe6',
    name: 'RSU Mitra Keluarga',
    price: 220000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.305269,
      longitude: 112.727583,
    },
  },
  {
    id: 'UI67HYb8Jkl21',
    name: 'RSIA Bumi Sehat',
    price: 250000,
    room_capacity: 6,
    coordinate: {
      latitude: -7.278416,
      longitude: 112.743998,
    },
  },
  {
    id: 'AB12CD34Ef56g',
    name: 'RSUD Dr. Wahidin',
    price: 250000,
    room_capacity: 6,
    coordinate: {
      latitude: -7.280987,
      longitude: 112.751256,
    },
  },
  {
    id: 'DE34FG56Hi78j',
    name: 'RSU Airlangga',
    price: 220000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.271893,
      longitude: 112.745748,
    },
  },
  {
    id: 'KL56MN78Op90q',
    name: 'RSIA Permata Sehat',
    price: 190000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.273605,
      longitude: 112.764239,
    },
  },
  {
    id: 'RS12TU34VW56x',
    name: 'RSIA Puri Medika',
    price: 230000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.281389,
      longitude: 112.759542,
    },
  },
  {
    id: 'YZ67AB89Cd01e',
    name: 'RSU Harapan Kita',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.286515,
      longitude: 112.755317,
    },
  },
  {
    id: 'WX23EF45Gh67i',
    name: 'RSIA Brawijaya',
    price: 180000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.287182,
      longitude: 112.76992,
    },
  },
  {
    id: 'UV89IJ12Kl34m',
    name: 'RSIA Hermina',
    price: 200000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.277446,
      longitude: 112.775643,
    },
  },
  {
    id: 'OP56QR78St90u',
    name: 'RSU Griya Husada',
    price: 220000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.279891,
      longitude: 112.784872,
    },
  },
  {
    id: 'MN12CD34Ef56g',
    name: 'RSU Citra Medika',
    price: 240000,
    room_capacity: 6,
    coordinate: {
      latitude: -7.264809,
      longitude: 112.790291,
    },
  },
  {
    id: 'AB34FG56Hi78j',
    name: 'RSU Permata Medika',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.255784,
      longitude: 112.777403,
    },
  },
  {
    id: 'RS12TU34VW56x',
    name: 'RSU Al-Irsyad',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.286104,
      longitude: 112.800615,
    },
  },
  {
    id: 'YZ67AB89Cd01e',
    name: 'RSIA Family Medika',
    price: 190000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.289752,
      longitude: 112.807327,
    },
  },
  {
    id: 'WX23EF45Gh67i',
    name: 'RSU Puri Husada',
    price: 220000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.294632,
      longitude: 112.814244,
    },
  },
  {
    id: 'UV89IJ12Kl34m',
    name: 'RSIA Citra Medika',
    price: 200000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.278419,
      longitude: 112.810678,
    },
  },
  {
    id: 'OP56QR78St90u',
    name: 'RSU Puri Medika',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.273927,
      longitude: 112.805144,
    },
  },
  {
    id: 'MN12CD34Ef56g',
    name: 'RSU Permata Husada',
    price: 240000,
    room_capacity: 6,
    coordinate: {
      latitude: -7.265673,
      longitude: 112.817071,
    },
  },
  {
    id: 'AB34FG56Hi78j',
    name: 'RSU Bumi Sehat',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.257983,
      longitude: 112.810935,
    },
  },
  {
    id: 'KL56MN78Op90q',
    name: 'RSU Permata Sari',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.276583,
      longitude: 112.799065,
    },
  },
  {
    id: 'RS12TU34VW56x',
    name: 'RSIA Aria Medika',
    price: 190000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.266915,
      longitude: 112.798422,
    },
  },
  {
    id: 'YZ67AB89Cd01e',
    name: 'RSU Cipto Mangunkusumo',
    price: 220000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.273067,
      longitude: 112.803421,
    },
  },
  {
    id: 'WX23EF45Gh67i',
    name: 'RSIA Medika Husada',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.269603,
      longitude: 112.794389,
    },
  },
  {
    id: 'UV89IJ12Kl34m',
    name: 'RSU Bunda Husada',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.283912,
      longitude: 112.800692,
    },
  },
  {
    id: 'OP56QR78St90u',
    name: 'RSU Bumi Husada',
    price: 220000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.275943,
      longitude: 112.806628,
    },
  },
  {
    id: 'MN12CD34Ef56g',
    name: 'RSIA Aulia Medika',
    price: 240000,
    room_capacity: 6,
    coordinate: {
      latitude: -7.262871,
      longitude: 112.812349,
    },
  },
  {
    id: 'AB34FG56Hi78j',
    name: 'RSU Adi Husada',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.275162,
      longitude: 112.819288,
    },
  },
  {
    id: 'KL56MN78Op90q',
    name: 'RSU Bhakti Husada',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.28657,
      longitude: 112.818409,
    },
  },
  {
    id: 'RS12TU34VW56x',
    name: 'RSU Aisyiyah Husada',
    price: 200000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.269149,
      longitude: 112.806901,
    },
  },
  {
    id: 'YZ67AB89Cd01e',
    name: 'RSIA Medikus',
    price: 190000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.273419,
      longitude: 112.815556,
    },
  },
  {
    id: 'WX23EF45Gh67i',
    name: 'RSU Sentosa',
    price: 220000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.269021,
      longitude: 112.805715,
    },
  },
  {
    id: 'UV89IJ12Kl34m',
    name: 'RSIA Serasi',
    price: 200000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.282573,
      longitude: 112.803709,
    },
  },
  {
    id: 'OP56QR78St90u',
    name: 'RSU Prima Medika',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.276372,
      longitude: 112.800086,
    },
  },
  {
    id: 'MN12CD34Ef56g',
    name: 'RSU Medika Sehat',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.287126,
      longitude: 112.809355,
    },
  },
  {
    id: 'AB34FG56Hi78j',
    name: 'RSIA Teratai',
    price: 240000,
    room_capacity: 6,
    coordinate: {
      latitude: -7.278944,
      longitude: 112.814686,
    },
  },
  {
    id: 'KL56MN78Op90q',
    name: 'RSU Surya Husada',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.271512,
      longitude: 112.802528,
    },
  },
  {
    id: 'RS34UV56WX78y',
    name: 'RSIA Mediflora',
    price: 200000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.279536,
      longitude: 112.818925,
    },
  },
  {
    id: 'RS90AB12CD34e',
    name: 'RSU Sehati Medika',
    price: 220000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.27362,
      longitude: 112.812512,
    },
  },
  {
    id: 'RS56EF78GH90i',
    name: 'RSIA Husada Cemerlang',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.2783,
      longitude: 112.809754,
    },
  },
  {
    id: 'RS12IJ34KL56m',
    name: 'RSU Sejahtera Medika',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.284901,
      longitude: 112.803371,
    },
  },
  {
    id: 'RS78MN90OP12q',
    name: 'RSIA Husada Mandiri',
    price: 190000,
    room_capacity: 3,
    coordinate: {
      latitude: -7.270418,
      longitude: 112.80187,
    },
  },
  {
    id: 'RS34QR56ST78u',
    name: 'RSU Sakti Medika',
    price: 220000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.265721,
      longitude: 112.796485,
    },
  },
  {
    id: 'RS90UV12WX34y',
    name: 'RSIA Medika Husada',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.282817,
      longitude: 112.793601,
    },
  },
  {
    id: 'RS56AB78CD90e',
    name: 'RSU Sehat Husada',
    price: 200000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.288132,
      longitude: 112.790952,
    },
  },
  {
    id: 'RS12EF34GH56i',
    name: 'RSIA Husada Mediflora',
    price: 220000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.2785,
      longitude: 112.797329,
    },
  },
  {
    id: 'RS78IJ90KL12m',
    name: 'RSU Sejahtera Husada',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.272668,
      longitude: 112.792928,
    },
  },
  {
    id: 'RS78OP90QR12',
    name: 'Rumah Sakit Gunung Sinai',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.267453,
      longitude: 112.799727,
    },
  },
  {
    id: 'RS34ST56UV78',
    name: 'Klinik Mayo',
    price: 240000,
    room_capacity: 6,
    coordinate: {
      latitude: -7.283755,
      longitude: 112.808032,
    },
  },
  {
    id: 'RS90WX12YZ34',
    name: 'Rumah Sakit Johns Hopkins',
    price: 250000,
    room_capacity: 7,
    coordinate: {
      latitude: -7.271159,
      longitude: 112.816118,
    },
  },
  {
    id: 'RS56AB78CD90',
    name: 'Rumah Sakit Massachusetts General',
    price: 220000,
    room_capacity: 8,
    coordinate: {
      latitude: -7.275678,
      longitude: 112.810899,
    },
  },
  {
    id: 'RS12EF34GH56',
    name: 'Rumah Sakit Karolinska',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.269781,
      longitude: 112.798776,
    },
  },
  {
    id: 'RS78IJ90KL12',
    name: 'Rumah Sakit Toronto General',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.285216,
      longitude: 112.805667,
    },
  },
  {
    id: 'RS34MN56OP78',
    name: 'Rumah Sakit Mayo Clinic',
    price: 220000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.278312,
      longitude: 112.80298,
    },
  },
  {
    id: 'RS90QR12ST34',
    name: 'Rumah Sakit Cedars-Sinai',
    price: 240000,
    room_capacity: 6,
    coordinate: {
      latitude: -7.273041,
      longitude: 112.7974,
    },
  },
  {
    id: 'RS56UV78WX90',
    name: 'Rumah Sakit Saint Thomas',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.288409,
      longitude: 112.810038,
    },
  },
  {
    id: 'RS34CD56EF78',
    name: 'Rumah Sakit Cleveland Clinic',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.271875,
      longitude: 112.808346,
    },
  },
  {
    id: 'RS90GH12IJ34',
    name: 'Rumah Sakit St. Jude',
    price: 240000,
    room_capacity: 6,
    coordinate: {
      latitude: -7.28052,
      longitude: 112.8045,
    },
  },
  {
    id: 'RS56KL78MN90',
    name: 'Rumah Sakit Mount Sinai',
    price: 250000,
    room_capacity: 7,
    coordinate: {
      latitude: -7.276241,
      longitude: 112.80362,
    },
  },
  {
    id: 'RS12OP34QR56',
    name: 'Rumah Sakit Mayo',
    price: 220000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.27575,
      longitude: 112.801238,
    },
  },
  {
    id: 'RS78ST90UV12',
    name: 'Rumah Sakit Johns Hopkins',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.28559,
      longitude: 112.799894,
    },
  },
  {
    id: 'RS34WX56YZ78',
    name: 'Rumah Sakit Karolinska Institute',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.268995,
      longitude: 112.797726,
    },
  },
  {
    id: 'RS90AB12CD34',
    name: 'Rumah Sakit Cedars-Sinai',
    price: 220000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.286012,
      longitude: 112.796497,
    },
  },
  {
    id: 'RS56EF78GH90',
    name: 'Rumah Sakit Saint Theodore',
    price: 210000,
    room_capacity: 4,
    coordinate: {
      latitude: -7.276962,
      longitude: 112.795193,
    },
  },
  {
    id: 'RS12IJ34KL56',
    name: 'Rumah Sakit Massachusetts General',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.287709,
      longitude: 112.813004,
    },
  },
  {
    id: 'RS78MN90OP12',
    name: "Rumah Sakit Children's Hospital",
    price: 240000,
    room_capacity: 6,
    coordinate: {
      latitude: -7.272471,
      longitude: 112.802888,
    },
  },
  {
    id: 'RS34EF56GH78',
    name: 'Rumah Sakit Mount Elizabeth',
    price: 240000,
    room_capacity: 6,
    coordinate: {
      latitude: -7.285763,
      longitude: 112.798728,
    },
  },
  {
    id: 'RS90IJ12KL34',
    name: 'Rumah Sakit Bumrungrad',
    price: 250000,
    room_capacity: 7,
    coordinate: {
      latitude: -7.27296,
      longitude: 112.795421,
    },
  },
  {
    id: 'RS56MN78OP90',
    name: 'Rumah Sakit Gleneagles',
    price: 230000,
    room_capacity: 5,
    coordinate: {
      latitude: -7.268457,
      longitude: 112.804111,
    },
  },
];

module.exports = hospitals;
