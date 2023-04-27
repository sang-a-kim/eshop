import User from '../models/user.js'

export const getAllUserList = async (req, res) => {
  const userList = await User.find({});

  if (!userList) {
    res.status(500).json({
      success: false
    })
  }

  res.send(userList)
}

