
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports.movies = sequelize.define('movies', {
    // attributes
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Genre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
    },
    release:{
        type: Sequelize.DATE,
    },
    Director:{
        type: Sequelize.STRING,
    },

    cast:{
        type: Sequelize.STRING,
    },
    tags:{
        type: Sequelize.STRING,
    },

    img:{
        type: Sequelize.STRING,

    },
    view: {
        type: Sequelize.INTEGER,
    },
     votes:{
         type: Sequelize.INTEGER,
     },
     stars:{
         type: Sequelize.INTEGER,
     },
     trailer:{
         type: Sequelize.STRING,
     }

}, {
    freezeTableName: true,
    timestamps: false

});

