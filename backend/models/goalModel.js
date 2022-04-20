const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: [true, 'User is required'],
    ref: 'User',
  },
  text: {
    type: String,
    required: [true, 'Please add some text'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Goal', goalSchema);
