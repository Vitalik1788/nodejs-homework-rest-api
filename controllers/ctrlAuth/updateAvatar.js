const path = require('path');
const fs = require('fs/promises');
const Jimp = require('jimp');

const { User } = require('../../models');
const { HttpError } = require('../../helpers');


const avatarsDir = path.join(__dirname, "../", "../", "public", "avatars");

const onUpdateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;

  await Jimp.read(tempUpload)
    .then((img) => { return img.resize(250, 250).write(tempUpload) })
    .catch(error => { throw new Error(error.message) }); 

  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join('avatars', filename);
  const user = await User.findByIdAndUpdate(_id, { avatarURL });

  if (!user) { throw HttpError(401, 'Not authorized') };

  res.json({ avatarURL });
}


module.exports = onUpdateAvatar;