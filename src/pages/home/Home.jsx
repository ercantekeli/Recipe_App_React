
import axios from 'axios'
import React, {useState} from 'react'
import Header from '../../components/header/Header'

const APP_ID = "a966a9a1"
const APP_KEY = "6254f0e04ac1951b03ca93096dc7e57"

const Home = () => {

  const [query, setQuery] = useState("")
  const [food, setFood] = useState()
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"]
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase())
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`

  const getData = async () => {
    if(query){
      const result = await axios.get(url);
      setFood(result.data.hits)
    }else{
      console.log("Please enter a query");
    }
  }

  return (
    <div>
      <Header setQuery={setQuery}
      getData={getData}
      mealTypes={mealTypes}
      setMeal={setMeal}
      />




    </div>
  )
}

export default Home