import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/FoodItems"
import ErrorMessage from "./components/ErrorMessage"
import Container from "./components/Container"
import FoodInput from "./components/FoodInput"

function App() {

  let foodItems = ["Dal", "Green Vegetables", "Ghee", "Roti", "Salad", "Milk"];

  const handleOnChange = (e) => {
    console.log(e.target.value);
    //textToShow = e.target.value;
  };



  return (
    <>
      <Container>
        <h1 className="food-heading">Healty Food</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput handleOnChange={handleOnChange} />


        <FoodItems items={foodItems} />
      </Container>

      {/*<Container>
        <p>Above is the list of healthy foods that are good for your health and well being.</p>
      </Container>*/}
    </>
  )
}

export default App
