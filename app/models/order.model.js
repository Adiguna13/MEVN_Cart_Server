module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    user_id: Number,
    cart_items: [String],
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...Object } = this.toObject();
    Object.id = _id;
    return Object;
  });

  const Order = mongoose.model("orders", schema);
  return Order;
};
