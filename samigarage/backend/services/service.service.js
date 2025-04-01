// Import the query function from the query module
const conn = require("../config/db.config");
const bcrypt = require("bcrypt");

// A function to check if service exists in the database
async function checkIfServiceExists(service_name) {
  const query = "SELECT * FROM common_services WHERE service_name = ? ";
  const [rows] = await conn.query(query, [service_name]);
  console.log(rows);
  return rows.length > 0;
}

// A function to create a new service
async function createService(service) {
  try {
    const query =
      "INSERT INTO common_services (service_name, service_description) VALUES (?, ?)";

    const [result] = await conn.query(query, [
      service.service_name,
      service.service_description,
    ]);

    if (result.affectedRows === 0) {
      return false;
    }

    return {
      service_id: result.insertId,
      service_name: service.service_name,
      service_description: service.service_description,
    };
  } catch (err) {
    console.error("Error creating service:", err);
    return false;
  }
}





// A function to get all services from the database
async function getAllServices() {
  try {
    const query = "SELECT * FROM common_services";
    const rows = await conn.query(query);
    console.log("Fetched Services:", rows); // Log the fetched data for debugging
    return rows;
  } catch (error) {
    console.error("Error fetching services:", error);
    return []; // Return an empty array if there is an error
  }
}



// A function to get service by id from the database
async function getServiceById(service_id) {
  try {
    const id = parseInt(service_id, 10);
    if (isNaN(id) || id <= 0) {
      console.error("Invalid service_id received:", service_id);
      return null;
    }

    const query = "SELECT * FROM common_services WHERE service_id = ?";
    const rows = await conn.query(query, [id]); // ✅ Fix: Remove array destructuring

    console.log("🔹 Query result for ID", service_id, ":", rows);

    if (!Array.isArray(rows) || rows.length === 0) {
      console.log("No service found in DB for ID:", service_id);
      return null;
    }

    return rows[0]; // ✅ Return the correct object
  } catch (error) {
    console.error(" Error fetching service:", error.message);
    return null;
  }
}





// A function to update service by id in the database
async function updateService(service_id, service) {
  try {
    // Validate inputs
    if (!service_id || !service.service_name || !service.service_description) {
      console.error("Missing parameters:", { service_id, ...service });
      return null;
    }

    const query =
      "UPDATE common_services SET service_name = ?, service_description = ? WHERE service_id = ?";

    const result = await conn.query(query, [
      service.service_name,
      service.service_description,
      service_id,
    ]);

    console.log(" Update Query Raw Result:", result);


    if (result.affectedRows === 0) {
      return null; // No rows updated
    }

    return {
      service_id: service_id,
      service_name: service.service_name,
      service_description: service.service_description,
    };
  } catch (error) {
    console.error("Error updating service:", error);
    return null;
  }
}




// Export the functions
module.exports = {
  checkIfServiceExists,
  createService,
  getAllServices,
  getServiceById,
  updateService,
};
