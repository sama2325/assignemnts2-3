const db = require("./orders-db");

async function loadOrders() {
  return await db.findAllOrders();
}

function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Alexandria" && order.status === "pending"
  );
}

function summarize(orders) {
  return orders.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );
}

async function describeOrder(id) {
  try {
    const order = await db.findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch (error) {
    return `No order with id ${id}`;
  }
}

function toJsonLines(orders) {
  const result = orders.map((order) => ({
    item: order.item,
    quantity: order.quantity,
  }));

  return JSON.stringify(result);
}

module.exports = {
  loadOrders,
  myOrders,
  summarize,
  describeOrder,
  toJsonLines,
};