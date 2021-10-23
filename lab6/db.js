// to use mongoDB
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/airQualityDB", { useNewUrlParser: true, useUnifiedTopology:true });


module.exports = mongoose;
