const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'whatwhichwear_db',
  dialect: 'postgres',
  define: { underscored: true }
});

const Article = sequelize.define('article', {
  color: Sequelize.STRING,
  type: Sequelize.STRING,
  season: Sequelize.STRING,
  brand: Sequelize.STRING,
  occasion: Sequelize.STRING,
  description: Sequelize.TEXT,
  fit: Sequelize.STRING
});

module.exports = {
  sequelize,
  Article
}
