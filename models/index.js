// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//relationships between tables
Product.belongsTo(Category, {
  foreignKey : 'category_id',
  onDelete : 'CASCADE'
});

Category.hasMany(Product, {
  foreignKey : 'product_id',
  onDelete : 'CASCADE'
})

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'producttag'
})

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'producttag'
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
