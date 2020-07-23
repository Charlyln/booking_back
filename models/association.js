const User = require("./user.model");
const Travel = require("./travel.model");
const Likes = require("./like.model")
const Booking = require("./booking.model")

User.hasMany(Travel, { foreignKey: { allowNull: false } });
Travel.belongsTo(User);

Travel.hasMany(Likes, { foreignKey: { allowNull: false } });
Likes.belongsTo(Travel);

User.hasMany(Likes, { foreignKey: { allowNull: false } });
Likes.belongsTo(User);

Travel.hasMany(Booking, { foreignKey: { allowNull: false } });
Booking.belongsTo(Travel);

User.hasMany(Booking, { foreignKey: { allowNull: false } });
Booking.belongsTo(User);
