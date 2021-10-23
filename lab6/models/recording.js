const db = require("../db");


var Recording = db.model("Recording", {
    zip:      {type: Number},
    airQuality:  {type: Number}
 });

module.exports = Recording;


// references
// https://learn.zybooks.com/zybook/ARIZONAECE413513HongFall2021/chapter/8/section/2
// https://www.geeksforgeeks.org/mongoose-estimateddocumentcount-function/ 
// https://www.geeksforgeeks.org/mongoose-find-function/
// https://www.geeksforgeeks.org/mongoose-findoneandupdate-function/
// https://www.geeksforgeeks.org/mongoose-deleteone-function/
// https://docs.mongodb.com/manual/reference/operator/query/
