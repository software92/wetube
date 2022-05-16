let videos = [
  {
    title: 'a',
    description: 'aa',
    createdAt: 122,
    id: 1,
    views: 334,
  },
  {
    title: 'b',
    description: 'bbbb',
    createdAt: 324,
    id: 2,
    views: 12,
  },
  {
    title: 'c',
    description: 'ccc',
    createdAt: 415,
    id: 3,
    views: 1,
  },
];
export const trending = (req, res) => {
  return res.render('home', { pageTitle: 'Home', videos });
};
export const see = (req, res) => {
  const {
    params: { id },
  } = req;
  const video = videos.find((video) => video.id === parseInt(id));
  return res.render('watch', { pageTitle: `Watch ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const {
    params: { id },
  } = req;
  const video = videos.find((video) => video.id === parseInt(id));
  return res.render('editVideo', { pageTitle: 'Edit', video });
};
export const postEdit = (req, res) => {
  const {
    params: { id },
    body: { title },
  } = req;
  console.log(req.body.title);
  videos.forEach((video) => {
    if (video.id === parseInt(id)) {
      video.title = title;
    }
  });
  return res.redirect(`/videos/${id}`);
};

export const search = (req, res) => res.send('Search');
export const upload = (req, res) => res.send('Upload Video');
export const deleteVideo = (req, res) => {
  console.log(req.params.id);
  return res.send(`Delete Video id: ${req.params.id}`);
};
