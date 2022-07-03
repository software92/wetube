import Video from '../models/Video';

export const home = (req, res) => {
  Video.find({}, (err, videos) => {
    return res.render('home', { pageTitle: 'Home', videos });
  });
};
export const see = (req, res) => {
  const {
    params: { id },
  } = req;
  // const video = videos.find((video) => video.id === parseInt(id));
  return res.render('watch', { pageTitle: `Watch ${video.title}` });
};
export const getEdit = (req, res) => {
  const {
    params: { id },
  } = req;
  // const video = videos.find((video) => video.id === parseInt(id));
  return res.render('editVideo', { pageTitle: 'Edit' });
};
export const postEdit = (req, res) => {
  const {
    params: { id },
    body: { title },
  } = req;
  console.log(req.body.title);
  // videos.forEach((video) => {
  //   if (video.id === parseInt(id)) {
  //     video.title = title;
  //   }
  // });
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render('upload', { pageTitle: 'Upload Video' });
};
export const postUpload = (req, res) => {
  // const newVideo = {
  //   title: req.body.title,
  //   description: '',
  //   createdAt: '2 minutes ago',
  //   id: videos.length + 1,
  //   views: 0,
  // };
  // videos.push(newVideo);
  return res.redirect('/');
};

export const search = (req, res) => res.send('Search');
export const deleteVideo = (req, res) => {
  console.log(req.params.id);
  return res.send(`Delete Video id: ${req.params.id}`);
};
