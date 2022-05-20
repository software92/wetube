import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    rating: Number,
    views: Number,
  },
});

const Video = new mongoose.model('Video', videoSchema);

export default Video;
