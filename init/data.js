let sampleData=[
  
  {
    title: "Chicken Curry",
    owner:'6852bf7dc0bc8e5caf7f0b30',
    description: "A rich, creamy chicken curry made with aromatic spices.",
    ingredients: [
      { name: "Chicken", quantity: "500g diced" },
      { name: "Onion", quantity: "2 chopped" },
      { name: "Tomato", quantity: "2 diced" },
      { name: "Curry powder", quantity: "2 tsp" }
    ],
    instructions: [
      "Saute onion and tomato.",
      "Add chicken and curry powder.",
      "Add water and let it simmer.",
      "Serve with rice."
    ],
    cookingTime: 40,
    servings: 4,
    category: "non-vegetarian",
    image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Pasta Arrabbiata",
    owner:'6852bf7dc0bc8e5caf7f0b30',
    description: "Classic Italian pasta with a spicy tomato sauce.",
    ingredients: [
      { name: "Pasta", quantity: "200g penne" },
      { name: "Garlic", quantity: "2 cloves" },
      { name: "Tomatoes", quantity: "3 diced" },
      { name: "Red chili flakes", quantity: "1/2 tsp" }
    ],
    instructions: [
      "Cook the pasta.",
      "Saute garlic and chili flakes in oil.",
      "Add diced tomatoes.",
      "Toss in the drained pasta."
    ],
    cookingTime: 20,
    servings: 2,
    category: "vegetarian",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Paneer Butter Masala",
    owner:'6852bf7dc0bc8e5caf7f0b30',
    description: "A creamy, rich North-Indian curry with paneer cubes.",
    ingredients: [
      { name: "Paneer", quantity: "200g diced" },
      { name: "Tomato Puree", quantity: "1 cup" },
      { name: "Cashews", quantity: "10 soaked" },
      { name: "Garam Masala", quantity: "1 tsp" }
    ],
    instructions: [
      "Saute diced paneer.",
      "Make tomato-cashew base.",
      "Add garam masala and paneer.",
      "Simmer for 10 minutes."
    ],
    cookingTime: 30,
    servings: 3,
    category: "vegetarian",
    image: "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?q=80&w=1013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Beef Steak",
    owner:'6852bf7dc0bc8e5caf7f0b30',
    description: "Juicy grilled steak seasoned with herbs and garlic.",
    ingredients: [
      { name: "Beef steak", quantity: "250g" },
      { name: "Garlic", quantity: "2 cloves" },
      { name: "Rosemary", quantity: "1 sprig" },
      { name: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Season steak with garlic, rosemary, and salt.",
      "Heat a skillet and sear steak on both sides.",
      "Reduce flame and cook to preferred doneness.",
      "Rest for 5 minutes and serve."
    ],
    cookingTime: 15,
    servings: 1,
    category: "non-vegetarian",
    image: "https://images.unsplash.com/photo-1677027201352-3c3981cb8b5c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Fish Fry",
    owner:'6852bf7dc0bc8e5caf7f0b30',
    description: "Crispy, deep-fried fish seasoned with turmeric and chili.",
    ingredients: [
      { name: "Fish", quantity: "500g" },
      { name: "Turmeric", quantity: "1/2 tsp" },
      { name: "Red chili powder", quantity: "1/2 tsp" },
      { name: "Flour", quantity: "1/4 cup" }
    ],
    instructions: [
      "Wash and cut the fish.",
      "Marinate with turmeric and chili.",
      "Dredge in flour.",
      "Deep-fry until crispy."
    ],
    cookingTime: 25,
    servings: 2,
    category: "non-vegetarian",
    image: "https://images.unsplash.com/photo-1673436977947-0787164a9abc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Chocolate Cake",
    owner:'6852bf7dc0bc8e5caf7f0b30',
    description: "Soft and rich chocolate sponge, perfect for dessert.",
    ingredients: [
      { name: "Flour", quantity: "2 cups" },
      { name: "Cocoa powder", quantity: "1/2 cup" },
      { name: "Baking soda", quantity: "1 tsp" },
      { name: "Sugar", quantity: "1 cup" }
    ],
    instructions: [
      "Mix all ingredients.",
      "Bake at 180°C for 30 minutes.",
      "Cool and serve."
    ],
    cookingTime: 45,
    servings: 6,
    category: "vegetarian",
    image: "https://images.unsplash.com/photo-1623888884968-b5a895f882dc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: " Vegetable Noodles",
    owner:'6852bf7dc0bc8e5caf7f0b30',
    description: "Street-style noodles tossed with veggies and sauces.",
    ingredients: [
      { name: "Noodles", quantity: "200g" },
      { name: "Capsicum", quantity: "1 diced" },
      { name: "Carrot", quantity: "1 diced" },
      { name: "Soy sauce", quantity: "2 tsp" }
    ],
    instructions: [
      "Boil noodles.",
      "Saute chopped veggies.",
      "Add boiled noodles and sauces.",
      "Toss and serve hot."
    ],
    cookingTime: 15,
    servings: 2,
    category: "vegetarian",
    image: "https://images.unsplash.com/photo-1524859880053-f595797051c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Burger",
    owner:'6852bf7dc0bc8e5caf7f0b30',
    description: "Classic grilled burger with veggies and cheese.",
    ingredients: [
      { name: "Burger bun", quantity: "1" },
      { name: "Chicken patty", quantity: "1" },
      { name: "Lettuce", quantity: "1 leaf" },
      { name: "Cheddar cheese", quantity: "1 slice" }
    ],
    instructions: [
      "Toast the bun.",
      "Cook chicken patty.",
      "Assemble with lettuce and cheese.",
      "Serve immediately."
    ],
    cookingTime: 10,
    servings: 1,
    category: "non-vegetarian",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Fruit Salad",
    owner:'6852bf7dc0bc8e5caf7f0b30',
    description: "A fresh mix of seasonal fruits.",
    ingredients: [
      { name: "Apple", quantity: "1 diced" },
      { name: "Mango", quantity: "1 diced" },
      { name: "Grapes", quantity: "1/2 cup" },
      { name: "Banana", quantity: "1 chopped" }
    ],
    instructions: [
      "Wash and cut all fruits.",
      "Combine in a bowl.",
      "Serve chilled."
    ],
    cookingTime: 10,
    servings: 2,
    category: "vegetarian",
    image: "https://plus.unsplash.com/premium_photo-1664478279991-832059d65835?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Classic Vegetable Biryani",
    owner:'6852bf7dc0bc8e5caf7f0b30',
    description: "A rich and aromatic rice dish loaded with veggies.",
    ingredients: [
      { name: "Basmati rice", quantity: "2 cups" },
      { name: "Potato", quantity: "1 diced" },
      { name: "Peas", quantity: "1/2 cup" },
      { name: "Onion", quantity: "1 chopped" }
    ],
    instructions: [
      "Wash and soak the rice.",
      "Saute veggies in oil.",
      "Add rice and water.",
      "Cook for 20 minutes."
    ],
    cookingTime: 30,
    servings: 4,
    category: "vegetarian",
    image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]
module.exports = { data: sampleData };