const mysql = require("mysql2");
const express = require("express");

require("dotenv").config();

const body_parser = require("body-parser");

const app = express();


// Use  express parser as middle ware
app.use(express.urlencoded({ extended: true }));

var mysqlConnection = mysql.createConnection({
  
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});

mysqlConnection.connect((err) => {
  if (err) console.log(err);
  else console.log("Connected to server");
});

// Install: Create the tables necessary
app.get("/install", (req, res) => {
  const productTable = `CREATE TABLE if not exists Products (
        product_id INT AUTO_INCREMENT,
        product_url VARCHAR(255) NOT NULL,
        product_name VARCHAR(255) NOT NULL,
        PRIMARY KEY(product_id)
    )`;

  const createProductDescription = `CREATE TABLE if not exists ProductDescription (
        description_id int auto_increment,
        product_id int(11) not null,
        product_brief_description varchar(255) not null,
        product_description varchar(255) not null,
        product_img varchar(255) not null,
        product_link varchar(255) not null,
        PRIMARY KEY (description_id),
        FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;

  const createProductPrice = `CREATE TABLE if not exists ProductPrice (
        price_id int auto_increment,
        product_id int(11) not null,
        starting_price varchar(255) not null,
        price_range varchar(255) not null,
        PRIMARY KEY (price_id),
        FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;
  let userTable = `CREATE TABLE if not exists userTable(
        user_id int auto_increment,
        user_name varchar(255) not null,    
        user_password int(11) not null,
        PRIMARY KEY (user_id)
      )`;

  let orderTable = `CREATE TABLE if not exists OrderTable(
      order_id int auto_increment,
      product_id int(11) not null,    
      user_id int(11) not null,

      PRIMARY KEY (order_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES userTable(user_id)
    )`;

  mysqlConnection.query(productTable, (error, result) => {
    if (error) throw error;
  });
  mysqlConnection.query(createProductDescription, (error, result) => {
    if (error) throw error;
  });
  mysqlConnection.query(createProductPrice, (error, result) => {
    if (error) throw error;
  });
  mysqlConnection.query(userTable, (error, result) => {
    if (error) throw error;
  });
  mysqlConnection.query(orderTable, (error, result) => {
    if (error) throw error;
  });

  res.send("Tables created");
});

app.post("/addiphones", (req, res) => {
  const {
    product_name,
    product_url,
    product_brief_description,
    product_description,
    product_img,
    product_link,
    starting_price,
    price_range,
    username,
    password,
  } = req.body;

  // Insert into Products table
  const insertProduct = `INSERT INTO Products (product_url, product_name) VALUES (?, ?)`;

  mysqlConnection.query(
    insertProduct,
    [product_url, product_name],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.end(err);
      }
      console.log(result);
      // Get the product ID of the newly inserted product
      const productId = result.insertId;
      // console.log(res);

      // Insert into userTable
      const insertUser = `INSERT INTO userTable (user_name, user_password) VALUES (?, ?)`;
      mysqlConnection.query(insertUser, [username, password], (err, result) => {
        if (err) {
          console.log(err);
          return res.end(err);
        }

        // Get the user ID of the newly inserted user
        const userId = result.insertId;

        // Insert into ProductDescription table
        const insertProductDescription = `INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES (?, ?, ?, ?, ?)`;
        mysqlConnection.query(
          insertProductDescription,
          [
            productId,
            product_brief_description,
            product_description,
            product_img,
            product_link,
          ],
          (err) => {
            if (err) {
              console.log(err);
              return res.end(err);
            }

            // Insert into ProductPrice table
            const insertProductPrice = `INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES (?, ?, ?)`;
            mysqlConnection.query(
              insertProductPrice,
              [productId, starting_price, price_range],
              (err) => {
                if (err) {
                  console.log(err);
                  return res.end(err);
                }

                // Insert into OrderTable
                const insertOrder = `INSERT INTO OrderTable (product_id, user_id) VALUES (?, ?)`;
                mysqlConnection.query(
                  insertOrder,
                  [productId, userId],
                  (err) => {
                    if (err) {
                      console.log(err);
                      return res.end(err);
                    }

                    res.send("Product data inserted successfully");
                  }
                );
              }
            );
          }
        );
      });
    }
  );
});

//To Retrive data from databse 
app.get("/iphone",(req,res)=>{

  const query =
    `SELECT * FROM product JOIN ProductDescription JOIN ProductPrice ON product.product_id= ProductDescription.product_id AND product.product_id=ProductPrice.product_id  `;
    mysqlConnection.query(query,(err, results)=>{
      if(err){
        console.error('Error retriving products:',err);
        res.status(500).send({message: "error retrieving products"});
      }else{
        res.status(200).json(results);
      }
    })
});



app.listen(4003, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening to : 4003");
  }
});