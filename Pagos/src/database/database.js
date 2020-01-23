import Sequelize from 'sequelize';

export const sequelize = new Sequelize (
    'pagose',       // Nombre DB
    'postgres',     // Usuario
    '1q2w3e4r',     // Contraseña
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)
