import mongoose, { Schema } from 'mongoose';

const orderSchema = new Schema({

})

orderSchema.virtual("id").get(function () {
	return this._id.toHexString();
});
orderSchema.set("toJson", { virtuals: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;