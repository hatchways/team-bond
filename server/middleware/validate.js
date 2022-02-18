const isValidObjectId = require("../utils/mongoObjectIdValidator");

const validateMongoObjectId = (req, res, next) => {

  const recordId = req.params.id;

  if (!isValidObjectId(recordId)) {
    return res.status(400).send(`Invalid Record Id: ${recordId}`);
  }

  next();
}

module.exports = validateMongoObjectId;
