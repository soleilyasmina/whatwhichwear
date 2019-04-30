const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'whatwhichwear_db',
  dialect: 'postgres',
  define: { underscored: true }
});

const Article = sequelize.define('article', {
  brand: Sequelize.STRING,
  color: Sequelize.STRING,
  description: Sequelize.TEXT,
  fit: Sequelize.STRING,
  occasion: Sequelize.STRING,
  season: Sequelize.STRING,
  times_worn: Sequelize.INTEGER,
  type: Sequelize.STRING
});

const Outfit = sequelize.define('article', {
  description: Sequelize.STRING,
  name: Sequelize.STRING,
  occasion: Sequelize.STRING,
  season: Sequelize.STRING,
  times_worn: Sequelize.INTEGER
});

Article.belongsToMany(Outfit, { through: 'garments' });
Outfit.belongsToMany(Article, { through: 'garments' });

module.exports = {
  sequelize,
  Article
}
