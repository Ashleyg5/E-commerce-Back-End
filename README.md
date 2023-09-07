# E-commerce-Back-End

## User Story
``
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies``

## Acceptance Criteria
``
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database``

## Description
 
I was tasked with taking given starter code and adding the back-end for an E-commerce business. I used MySQL, Node.js, Express, Sequelize, and Dotenv to create the ecommerce database and stored the seeds for products, categories, and tags. When the user opens the CLI they will create and seed the database using the MySQL shell commands. When the user visits their API client and creates an http request, they will be able to get, delete, post, and update to any of the products, categories, or tags. When the user visits the SQL database, they will see the changes reflected in the tables.

## Usage
[E-Commerce Back-End](https://drive.google.com/file/d/1leN9ttrvKPoV7slFktwmKpmdOI1vI-yg/view)
 
![E-Commerce Back End](https://i.gyazo.com/ad593bc8206c7bc331410a60f0ad5090.png)
![E-Commerce Back End 2](https://i.gyazo.com/07c12bb4b852e5fda85b19b4e64fcebc.png)



## Credits

[Resource 1](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide)

[Resource 2](https://www.npmjs.com/package/mysql2)

[Resource 3](https://www.npmjs.com/package/sequelize)

[Resource 4](https://www.npmjs.com/package/dotenv)

My classmates, instructor, and TA's.

## License

MIT
