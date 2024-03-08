import { UserModel } from "src/app/models/user.model";

export const USERS: UserModel[] = [
    {
        id: 1,
        name: 'Juan Miguel',
        lastName: 'Piedrahaita',
        rol: 'DEV',
        user: 'jmpiedra',
        password: '123'
    },
    {
        id: 2,
        name: 'Juliana',
        lastName: 'Montoya',
        rol: 'ADMIN',
        user: 'jmontoya',
        password: 'viz10'
    },
    {
        id: 3,
        name: 'Pepito',
        lastName: 'Perez',
        rol: 'DELIVER',
        user: 'pepito',
        password: 'viz10'
    },
]