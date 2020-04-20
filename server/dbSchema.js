const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * Users and Addresses table can be linked by the unique user id
 */

const addressSchema = new Schema({
    _id: Schema.Types.ObjectId,
    text: String
});

const addressesSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userId: Number,
    addresses: [addressSchema]
});

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    empId: Number,
    age: Number,
    gender: String
});

export {
  addressesSchema, userSchema
}
