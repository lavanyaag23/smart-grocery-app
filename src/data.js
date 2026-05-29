const products = [

  // 🍎 FRUITS
  { id: 1, name: "Apple", price: 120, category: "Fruits", rating: 4.5, badge: "Best Seller", stock: 25, img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=400&fit=crop" },
  { id: 2, name: "Banana", price: 50, category: "Fruits", rating: 4.2, badge: "Fresh", stock: 40, img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop" },
  { id: 3, name: "Orange", price: 80, category: "Fruits", rating: 4.3, badge: "Healthy", stock: 30, img: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop" },
  { id: 4, name: "Mango", price: 150, category: "Fruits", rating: 4.8, badge: "Seasonal", stock: 20, img: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400&h=400&fit=crop" },
  { id: 5, name: "Pineapple", price: 90, category: "Fruits", rating: 4.1, badge: "Fresh", stock: 18, img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=400&fit=crop" },
  { id: 6, name: "Grapes", price: 70, category: "Fruits", rating: 4.4, badge: "Top Rated", stock: 35, img: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=400&fit=crop" },
  { id: 7, name: "Strawberry", price: 200, category: "Fruits", rating: 4.6, badge: "Premium", stock: 15, img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop" },
  { id: 9, name: "Watermelon", price: 100, category: "Fruits", rating: 4.3, badge: "Summer Special", stock: 12, img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400&h=400&fit=crop" },
  { id: 10, name: "Kiwi", price: 180, category: "Fruits", rating: 4.7, badge: "Imported", stock: 10, img: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400&h=400&fit=crop" },

  // 🥛 DAIRY
  { id: 11, name: "Milk", price: 60, category: "Dairy", rating: 4.8, badge: "Top Rated", stock: 50, img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop" },
  { id: 12, name: "Butter", price: 200, category: "Dairy", rating: 4.6, badge: "Premium", stock: 22, img: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop" },
  { id: 13, name: "Cheese", price: 250, category: "Dairy", rating: 4.7, badge: "Best Seller", stock: 18, img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop" },
  { id: 14, name: "Paneer", price: 180, category: "Dairy", rating: 4.5, badge: "Fresh", stock: 20, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop" },
  { id: 15, name: "Curd", price: 80, category: "Dairy", rating: 4.3, badge: "Healthy", stock: 28, img: "https://images.unsplash.com/photo-1570696516188-ade861b84a49?w=400&h=400&fit=crop" },
  { id: 16, name: "Cream", price: 120, category: "Dairy", rating: 4.2, badge: "Fresh", stock: 14, img: "https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=400&h=400&fit=crop" },
  { id: 17, name: "Ice Cream", price: 220, category: "Dairy", rating: 4.9, badge: "Top Rated", stock: 16, img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=400&fit=crop" },
  { id: 20, name: "Buttermilk", price: 50, category: "Dairy", rating: 4.1, badge: "Cool Drink", stock: 40, img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop" },

  // 🍞 BAKERY
  { id: 21, name: "Bread", price: 40, category: "Bakery", rating: 4.2, badge: "Daily Use", stock: 60, img: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400&h=400&fit=crop" },
  { id: 22, name: "Cake", price: 300, category: "Bakery", rating: 4.8, badge: "Best Seller", stock: 12, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop" },
  { id: 23, name: "Cookies", price: 150, category: "Bakery", rating: 4.5, badge: "Snacks", stock: 25, img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop" },
  { id: 24, name: "Croissant", price: 120, category: "Bakery", rating: 4.6, badge: "Premium", stock: 18, img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop" },
  { id: 25, name: "Muffin", price: 100, category: "Bakery", rating: 4.4, badge: "Fresh", stock: 20, img: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=400&fit=crop" },
  { id: 26, name: "Donut", price: 90, category: "Bakery", rating: 4.3, badge: "Sweet", stock: 30, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop" },
  { id: 28, name: "Pastry", price: 110, category: "Bakery", rating: 4.5, badge: "Dessert", stock: 22, img: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=400&h=400&fit=crop" },
  { id: 29, name: "Pizza Base", price: 80, category: "Bakery", rating: 4.2, badge: "Cooking", stock: 35, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop" },

  // 🌾 STAPLES
  { id: 31, name: "Rice", price: 150, category: "Staples", rating: 4.7, badge: "Best Seller", stock: 80, img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop" },
  { id: 32, name: "Wheat Flour", price: 180, category: "Staples", rating: 4.5, badge: "Daily Use", stock: 70, img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop" },
  { id: 34, name: "Salt", price: 20, category: "Staples", rating: 4.1, badge: "Essential", stock: 100, img: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=400&h=400&fit=crop" },
  { id: 35, name: "Cooking Oil", price: 200, category: "Staples", rating: 4.6, badge: "Top Rated", stock: 45, img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop" },
  { id: 36, name: "Dal", price: 120, category: "Staples", rating: 4.4, badge: "Protein Rich", stock: 55, img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop" },
  { id: 37, name: "Spices Mix", price: 90, category: "Staples", rating: 4.5, badge: "Flavor", stock: 60, img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop" },
  { id: 38, name: "Tea", price: 140, category: "Staples", rating: 4.7, badge: "Popular", stock: 65, img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop" },
  { id: 39, name: "Coffee", price: 250, category: "Staples", rating: 4.8, badge: "Premium", stock: 30, img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop" }

];

export default products;