CREATE TABLE Shopper_user(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    roles ENUM('NORMAL', 'ADMIN') DEFAULT "NORMAL"
);
	CREATE TABLE Shopper_products(
		id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price FLOAT NOT NULL,
        qty_stock INT NOT NULL
    );
     CREATE TABLE Shopper_shopping_list(
		id VARCHAR(255) PRIMARY KEY,
        id_product VARCHAR(255),
        user_id VARCHAR(255),
        FOREIGN KEY (id_product) REFERENCES  Shopper_products(id),
        FOREIGN KEY (user_id) REFERENCES Shopper_user(id)
    );
    
    CREATE TABLE Shopper_shopping_Order(
		id VARCHAR(255) PRIMARY KEY,
		name  VARCHAR(255) NOT NULL,
        delivery_date DATE NOT NULL,
        user_id VARCHAR(255),
        FOREIGN KEY (user_id) REFERENCES  Shopper_user(id)     
    );

   
   SELECT * FROM Shopper_products;