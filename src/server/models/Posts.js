const mongoose = require('mongoose');


const { Schema } = mongoose;
const PostsSchema = new Schema({
  title: { type: String, required: true },
  text: String,
  date: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  },
  author: { type: String, ref: 'Users' },
  visitors: { type: Number, default: 0 }
});

/* PostsSchema.statics.newVisitor = (post_id) => {
  this.findById(post_id)
    .then((result) => {
      result.visitors += 1;
    });
}; */

mongoose.model('Posts', PostsSchema);
