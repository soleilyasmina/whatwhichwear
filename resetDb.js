const { sequelize } = require('./models');

const resetDb = async () => {
  try {
    sequelize.sync({ force: true });
    console.log('Reset complete! Synced.')
  } catch (e) {
    console.log(e);
  } finally {
    process.exit();
  }
};

resetDb();
