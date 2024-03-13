import { UserModel } from 'src/app/models/user.model';
import { ROL_ADMIN, ROL_DELIVER } from './roles.const';

export const USERS: UserModel[] = [
  {
    id: 1,
    name: 'Usuario de Prueba',
    lastName: 'de desarrollo',
    functionalities: ROL_ADMIN,
    user: 'prueba',
    password: '123',
    rol: 'DEV',
  },
  {
    id: 1,
    name: 'Juan Miguel',
    lastName: 'Piedrahaita',
    functionalities: ROL_ADMIN,
    user: 'jmpiedra',
    password: '123dev',
    rol: 'DEV',
  },
  {
    id: 2,
    name: 'Juliana',
    lastName: 'Montoya Ramirez',
    functionalities: ROL_ADMIN,
    user: 'jumon',
    password: 'B4sF2',
    rol: 'ADMIN',
  },
  {
    id: 3,
    name: 'Miriam',
    lastName: 'Aguilar',
    functionalities: ROL_ADMIN,
    user: 'maguilar',
    password: '7g8V9',
    rol: 'DELIVER',
  },
  {
    id: 4,
    name: 'Maria Camila',
    lastName: 'Mina',
    functionalities: ROL_ADMIN,
    user: 'marmina',
    password: 'h9L8k',
    rol: 'DELIVER',
  },
  {
    id: 5,
    name: 'Cristian Leandro',
    lastName: 'Aristizabal Giraldo',
    functionalities: ROL_DELIVER,
    user: 'claristizabal',
    password: 'v6B7n',
    rol: 'DELIVER',
  },
  {
    id: 6,
    name: 'Contingencia',
    lastName: 'PLAN B',
    functionalities: ROL_DELIVER,
    user: 'contingencia',
    password: 'v8B12',
    rol: 'DELIVER',
  },
  {
    id: 1,
    name: 'Valentina',
    lastName: 'Castro',
    functionalities: ROL_DELIVER,
    user: 'vacas',
    password: 'FJ45K',
    rol: 'DELIVER',
  },
  {
    id: 2,
    name: 'Javier',
    lastName: 'Romero',
    functionalities: ROL_DELIVER,
    user: 'javiromero',
    password: '32G8N',
    rol: 'DELIVER',
  },
  {
    id: 3,
    name: 'Jaime',
    lastName: 'Olaya',
    functionalities: ROL_DELIVER,
    user: 'jaimeolaya',
    password: 'D9B7V',
    rol: 'DELIVER',
  },
  {
    id: 4,
    name: 'Wilson',
    lastName: 'Galindo',
    functionalities: ROL_DELIVER,
    user: 'wilga',
    password: '6H4M3',
    rol: 'DELIVER',
  },
  {
    id: 5,
    name: 'Fredy',
    lastName: 'Hoyos',
    functionalities: ROL_DELIVER,
    user: 'freho',
    password: 'L78P2',
    rol: 'DELIVER',
  },
  {
    id: 6,
    name: 'Yesenia',
    lastName: 'Alvarez',
    functionalities: ROL_DELIVER,
    user: 'yesal',
    password: 'Q90C1',
    rol: 'DELIVER',
  },
  {
    id: 7,
    name: 'Lilian',
    lastName: 'Aguilar',
    functionalities: ROL_DELIVER,
    user: 'liliaguilar',
    password: 'B7Y65',
    rol: 'DELIVER',
  },
  {
    id: 8,
    name: 'Elizabeth',
    lastName: 'Flores',
    functionalities: ROL_DELIVER,
    user: 'elizaflo',
    password: 'N8M90',
    rol: 'DELIVER',
  },
  {
    id: 9,
    name: 'Andres',
    lastName: 'Navas',
    functionalities: ROL_DELIVER,
    user: 'andresnavas',
    password: 'V4C32',
    rol: 'DELIVER',
  },
  {
    id: 10,
    name: 'Ariana',
    lastName: 'Martinez',
    functionalities: ROL_DELIVER,
    user: 'arianamar',
    password: 'M3Z89',
    rol: 'DELIVER',
  },
  {
    id: 11,
    name: 'Camila',
    lastName: 'Oyola',
    functionalities: ROL_DELIVER,
    user: 'camilao',
    password: 'P2L71',
    rol: 'DELIVER',
  },
  {
    id: 12,
    name: 'Catherine',
    lastName: 'Gonzalez',
    functionalities: ROL_DELIVER,
    user: 'cathego',
    password: 'C1Q06',
    rol: 'DELIVER',
  },
  {
    id: 13,
    name: 'Lucia',
    lastName: 'Catano',
    functionalities: ROL_DELIVER,
    user: 'lucata',
    password: '5Y432',
    rol: 'DELIVER',
  },
  {
    id: 14,
    name: 'Lina',
    lastName: 'Suarez',
    functionalities: ROL_DELIVER,
    user: 'lisuarez',
    password: '09N87',
    rol: 'DELIVER',
  },
  {
    id: 15,
    name: 'Andrea',
    lastName: 'Gomez',
    functionalities: ROL_DELIVER,
    user: 'agomez',
    password: '2C1V4',
    rol: 'DELIVER',
  },
  {
    id: 16,
    name: 'Ivan',
    lastName: 'Morales',
    functionalities: ROL_DELIVER,
    user: 'ivamora',
    password: 'Z8X93',
    rol: 'DELIVER',
  },
  {
    id: 17,
    name: 'Bertha',
    lastName: 'Rendon',
    functionalities: ROL_DELIVER,
    user: 'beruren',
    password: '1L0P2',
    rol: 'DELIVER',
  },
  {
    id: 18,
    name: 'Josué',
    lastName: 'Fonseca',
    functionalities: ROL_DELIVER,
    user: 'jofonse',
    password: '6Q5W7',
    rol: 'DELIVER',
  },
  {
    id: 19,
    name: 'Julian',
    lastName: 'Soto',
    functionalities: ROL_DELIVER,
    user: 'julsoto',
    password: '4X3Z2',
    rol: 'DELIVER',
  },
  {
    id: 20,
    name: 'Sebastian',
    lastName: 'Pardo',
    functionalities: ROL_DELIVER,
    user: 'separdo',
    password: '987M6',
    rol: 'DELIVER',
  },
  {
    id: 21,
    name: 'Daniel',
    lastName: 'Serrano',
    functionalities: ROL_DELIVER,
    user: 'danielse',
    password: '1C0V9',
    rol: 'DELIVER',
  },
  {
    id: 22,
    name: 'Rodes',
    lastName: 'Briñez',
    functionalities: ROL_DELIVER,
    user: 'robriñez',
    password: 'X7Z84',
    rol: 'DELIVER',
  },
  {
    id: 23,
    name: 'Wilson',
    lastName: 'Cardenas',
    functionalities: ROL_DELIVER,
    user: 'wilcar',
    password: '0P1L5',
    rol: 'DELIVER',
  },
  {
    id: 24,
    name: 'Jeffrey',
    lastName: 'Cardenas',
    functionalities: ROL_DELIVER,
    user: 'jecarde',
    password: '5W6Q9',
    rol: 'DELIVER',
  },
  {
    id: 25,
    name: 'Carolina',
    lastName: 'Rodriguez',
    functionalities: ROL_DELIVER,
    user: 'caroro',
    password: '8W7Qq',
    rol: 'DELIVER',
  },
  {
    id: 26,
    name: 'Martin',
    lastName: 'Mortaro',
    functionalities: ROL_DELIVER,
    user: 'marmor',
    password: '1S5Qp',
    rol: 'DELIVER',
  },
];
