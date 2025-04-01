// Import the database connection
const conn = require("../config/db.config");

// Function to create a new order
async function createOrder(orderData) {
  try {
    const query = `
      INSERT INTO orders (employee_id, customer_id, vehicle_id, order_description, estimated_completion_date, order_completed)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const rows = await conn.query(query, [
      orderData.employee_id,
      orderData.customer_id,
      orderData.vehicle_id,
      orderData.order_description,
      orderData.estimated_completion_date,
      orderData.order_completed,
    ]);
    const order_id = rows.insertId;

    // Now add order services
    for (let service of orderData.order_services) {
      const query2 = `
        INSERT INTO order_services (order_id, service_id)
        VALUES (?, ?)
      `;
      await conn.query(query2, [order_id, service.service_id]);
    }

    return { success: true, message: "Order created successfully!" };
  } catch (error) {
    console.error("Error creating order:", error);
    return {
      success: false,
      message: "Internal server error: " + error.message,
    };
  }
}


// Function to retrieve all orders
async function getAllOrders() {
  try {
    const query = `
      SELECT * FROM orders 
      LEFT JOIN order_info ON orders.order_id = order_info.order_id
      LEFT JOIN order_status ON orders.order_id = order_status.order_id
      ORDER BY orders.order_date DESC;
    `;
    
    // Correct query execution
    const [orders] = await conn.query(query); 

    return orders; // This should return an array
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
}


// Function to get order by ID
async function getOrderById(order_id) {
  try {
    const query = `
      SELECT * FROM orders 
      INNER JOIN order_info ON orders.order_id = order_info.order_id
      INNER JOIN order_status ON orders.order_id = order_status.order_id
      WHERE orders.order_id = ?;
    `;
    const order = await conn.query(query, [order_id]);
    if (order.length === 0) {
      throw new Error("Order not found");
    }
    return order[0];
  } catch (error) {
    console.error("Error fetching order:", error);
    return { success: false, message: error.message };
  }
}

// Function to update order details
async function updateOrder(order_id, updatedData) {
  try {
    const {
      order_total_price,
      estimated_completion_date,
      completion_date,
      additional_request,
      notes_for_internal_use,
      notes_for_customer,
      additional_requests_completed,
    } = updatedData;

    const query = `
      UPDATE order_info SET 
        order_total_price = ?, 
        estimated_completion_date = ?, 
        completion_date = ?, 
        additional_request = ?, 
        notes_for_internal_use = ?, 
        notes_for_customer = ?, 
        additional_requests_completed = ?
      WHERE order_id = ?;
    `;
    await conn.query(query, [
      order_total_price,
      estimated_completion_date,
      completion_date,
      additional_request,
      notes_for_internal_use,
      notes_for_customer,
      additional_requests_completed,
      order_id,
    ]);

    return { success: true, message: "Order updated successfully!" };
  } catch (error) {
    console.error("Error updating order:", error);
    return { success: false, message: error.message };
  }
}

// Function to delete an order
async function deleteOrder(order_id) {
  try {
    // Delete related data from order_status, order_services, and order_info first
    await conn.query("DELETE FROM order_status WHERE order_id = ?", [order_id]);
    await conn.query("DELETE FROM order_services WHERE order_id = ?", [
      order_id,
    ]);
    await conn.query("DELETE FROM order_info WHERE order_id = ?", [order_id]);

    // Delete the order from orders table
    const orderDeleteQuery = "DELETE FROM orders WHERE order_id = ?";
    const orderDeleteResult = await conn.query(orderDeleteQuery, [order_id]);
    if (orderDeleteResult.affectedRows === 0) {
      throw new Error("Order not found");
    }

    return { success: true, message: "Order deleted successfully!" };
  } catch (error) {
    console.error("Error deleting order:", error);
    return { success: false, message: error.message };
  }
}

// Export the functions for use in the controller
module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
