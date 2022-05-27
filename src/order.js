function takeOrder(order, orderTypeList) {
  if (orderTypeList.length < 3) {
    return orderTypeList.push(order);
  }
}

function refundOrder(orderNumber, orderTypeList) {
  let index = orderTypeList.findIndex((order) => {
    return order.orderNumber === orderNumber;
  });
  return orderTypeList.splice(index, 1);
}

function listItems(orderTypeList) {
  let list = "";
  for (let i = 0; i < orderTypeList.length; i++) {
    let element = orderTypeList[i];
    if (
      orderTypeList.length === 1 ||
      element === orderTypeList[orderTypeList.length - 1]
    ) {
      list += element["item"];
    } else {
      list += `${element["item"]}, `;
    }
  }
  return list;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
};
