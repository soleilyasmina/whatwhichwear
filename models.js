const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'whatwhichwear_db',
  dialect: 'postgres',
  define: { underscored: true }
});

module.exports = {
  sequelize
}
