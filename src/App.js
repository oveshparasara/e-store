import Directory from './components/directory/directory.component';

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "./assets/images/hats.jpg"
    },
    {
      id: 2,
      title: "Jakets",
      imageUrl: "./assets/images/jackets.jpg"
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "./assets/images/sneakers.jpg"
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "./assets/images/womens.jpg"
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: "./assets/images/mens.jpg"
    }
  ]
  return (
     <Directory categories={categories} />
  );
}

export default App;
