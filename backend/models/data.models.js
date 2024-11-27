import mongoose from 'mongoose';

const dateSchema = mongoose.Schema({
  date: Date,
  highlights: String,
  image: {
    type: Buffer,
    contentType: String,
  },
  desc: String,
});

const userDataSchema = mongoose.Schema({
  name: String,
  birthdate: Date,
  inviteCodes: Number,
  dates: [dateSchema],
});

// const Dates = mongoose.model('Dates', dateSchema);
const UserData = mongoose.model('UserData', userDataSchema);

export default UserData;
