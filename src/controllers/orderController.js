import Order from '../models/order.js';

export const getAllOrderList = async (req, res) => {
  const orderList = await Order.find({});

  if (!orderList) {
    res.status(500).json({
      success: false
    })
  }

  res.send(orderList)
}