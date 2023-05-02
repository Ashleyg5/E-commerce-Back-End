// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category, {
  foreignKey : 'id',
  onDelete : 'CASCADE'
});

Category.hasMany(Product, {
  foreignKey : 'category_id',
  onDelete : 'CASCADE'
})

Product.belongsToMany(Tag, {
  through : Tag
})

Tag.belongsToMany(Product, {
  through : ProductTag
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
