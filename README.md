# QuickBite - Food Ordering Application

A modern, responsive food ordering web application built with React that allows users to browse menu items, filter by categories, and manage their cart seamlessly.

## 🌐 Live Demo

[View Live Application](https://quickbite-food-delivery-one.vercel.app/)

## 📋 Overview

QuickBite is a full-featured food ordering platform that demonstrates modern React development practices and clean UI/UX design. Users can explore a diverse menu, filter items across 8 different food categories, add items to their cart with quantity controls, and see real-time price calculations.

## ✨ Features

- **Menu Exploration**: Browse through a curated selection of dishes with appealing visuals
- **Category Filtering**: Filter menu items across 8 categories (Salad, Rolls, Desserts, Sandwich, Cake, Pure Veg, Pasta, Noodles)
- **Cart Management**: Add and remove items with dynamic quantity adjustment
- **Real-time Price Calculation**: Automatic cart total updates based on items and quantities
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: Multi-page experience using React Router

## 🛠️ Tech Stack

- **Frontend Framework**: React.js
- **Routing**: React Router DOM
- **State Management**: Context API
- **Styling**: Plain CSS
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Kembarius/quickbite-food-delivery.git
```

2. Navigate to the project directory
```bash
cd quickbite-food-delivery
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## 📁 Project Structure

```
quickbite-food-delivery/
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── context/         # Context API for state management
│   │   ├── assets/          # Images and static data
│   │   ├── pages/           # Page components
│   │   └── App.js           # Main application component
│   └── public/
└── README.md
```

## 🎯 Key Implementation Details

### State Management with Context API

The application uses React Context API for efficient global state management, handling cart operations and menu data across components without prop drilling.

### Cart Functionality

- **Add to Cart**: Increments item quantity or adds new items
- **Remove from Cart**: Decrements quantity or removes items when quantity reaches zero
- **Dynamic Pricing**: Real-time calculation of total cart value
- **Quantity Controls**: Adjust item quantities directly from the home page

### Responsive Design

The application is fully responsive with carefully crafted CSS that adapts to:
- Desktop screens (1024px and above)
- Tablets (768px - 1023px)
- Mobile devices (below 768px)

## 🎓 Learning Outcomes

This project was built to demonstrate:
- Proficiency in React fundamentals (components, hooks, props)
- State management using Context API
- Routing and navigation with React Router
- Clean, maintainable code structure
- Responsive CSS design principles
- Real-world application development

## 🔮 Future Enhancements

- **Backend Integration**: Migrate to a full-stack application using Supabase
- **User Authentication**: Implement sign-up/login functionality with secure authentication
- **Search Functionality**: Enable the search feature for quick menu item discovery
- **Order History**: Track and display past orders for logged-in users
- **Payment Integration**: Add checkout and payment processing
- **User Profiles**: Allow users to save favorite items and delivery addresses
- **Cart Persistence**: Implement localStorage to maintain cart across sessions

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Author

**Kembarius**

- GitHub: [@Kembarius](https://github.com/Kembarius)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this project interesting, please consider giving it a star!
