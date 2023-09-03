import { Ui } from "./ui.module.js";


export class MealOfArea{
    constructor(){
        this.ui = new Ui();
    }
    async getMealOfArea(getArea) {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${getArea}`);
        const {meals:response} = await api.json();
        this.ui.displayMealOfArea(response)
        
    }
}
