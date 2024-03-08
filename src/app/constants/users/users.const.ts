import { UserModel } from "src/app/models/user.model";
import { ROL_ADMIN, ROL_DELIVER } from "./roles.const";

export const USERS: UserModel[] = [
    {
        id: 1,
        name: 'Juan Miguel',
        lastName: 'Piedrahaita',
        functionalities: ROL_ADMIN,
        user: 'jmpiedra',
        password: '123dev',
        rol: 'DEV'
    },
    {
        id: 2,
        name: 'Juliana',
        lastName: 'Montoya Ramirez',
        functionalities: ROL_ADMIN,
        user: 'jumon',
        password: 'B4sF2',
        rol: 'ADMIN'
    },
    {
        id: 3,
        name: 'Miriam',
        lastName: 'Aguilar',
        functionalities: ROL_ADMIN,
        user: 'maguilar',
        password: '7g8V9',
        rol: 'DELIVER'
    },
    {
        id: 4,
        name: 'Maria Camila',
        lastName: 'Mina',
        functionalities: ROL_ADMIN,
        user: 'marmina',
        password: 'h9L8k',
        rol: 'DELIVER'
    },
    {
        id: 5,
        name: 'Cristian Leandro',
        lastName: 'Aristizabal Giraldo',
        functionalities: ROL_DELIVER,
        user: 'claristizabal',
        password: 'v6B7n',
        rol: 'COORDINATOR'
    },
    {
        id: 6,
        name: 'Contingencia',
        lastName: 'PLAN B',
        functionalities: ROL_DELIVER,
        user: 'claristizabal',
        password: 'v8B12',
        rol: 'COORDINATOR'
    },
]






