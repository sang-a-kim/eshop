import Category from '../models/category.js';

export const getAllCategoryList = async (req, res) => {
  const categoryList = await Category.find({});

  if (!categoryList) {
    res.status(500).json({
      success: false
    })
  }

  res.send(categoryList)
}