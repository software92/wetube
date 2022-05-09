let user = {
  username: 'jsw',
  isLogin: false,
};
export const trending = (req, res) => {
  let videos = [
    {
      title: 'a',
      description: 'aa',
      createdAt: 122,
    },
    {
      title: 'b',
      description: 'bbbb',
      createdAt: 324,
    },
    {
      title: 'c',
      description: 'ccc',
      createdAt: 415,
    },
  ];
  videos = {};
  return res.render('home', { pageTitle: 'Home', videos, user });
};
export const search = (req, res) => res.send('Search');
export const upload = (req, res) => res.send('Upload Video');
export const see = (req, res) => {
  console.log(req.params.id);
  return res.send(`See Video id: ${req.params.id}`);
};
export const edit = (req, res) => {
  console.log(req.params.id);
  return res.send(`Edit Video id: ${req.params.id}`);
};
export const deleteVideo = (req, res) => {
  console.log(req.params.id);
  return res.send(`Delete Video id: ${req.params.id}`);
};
