const Users = require("./users-model");

async function checkUserExists(req, res, next) {
  const existing = await Users.findById(req.params.user_id);
  try {
    if (!existing) {
      next({ status: 404, message: "No user found with that ID." });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
}

module.exports = { checkUserExists };
