const { mongoose, models } = require('mongoose')

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email already exists'],
  },
  userName: {
    type: String,
    required: [true, 'Email is required'],
  },
  image: {
    type: String,
  },
})

const User = models.User || mongoose.model('User', UserSchema)

export default User
