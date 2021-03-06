
export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    isAdmin: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  });

  User.associate = (models) => {
    // 1 to many
    User.hasMany(models.Board, {
      foreignKey: 'owner'
    });
    // 1 to many
    User.hasMany(models.Suggestion, {
      foreignKey: 'creatorId'
    });
  }
  return User;
};