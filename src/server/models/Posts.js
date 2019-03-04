const mongoose = require('mongoose');

const Users = mongoose.model('Users');
const { Schema } = mongoose;
const PostsSchema = new Schema({
  author: String,
  title: { type: String, required: true },
  text: String,
  visitors: Number
});

PostsSchema.methods.setAuthor = (id) => {
  Users.findOne({ id })
    .then((result) => {
      this.author = result.login;
    });
};
mongoose.model('Posts', PostsSchema);
