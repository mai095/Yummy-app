import { Ui } from "./ui.module.js";

export class FilterCategory{
    constructor(){
        this.ui = new Ui();

    }
    async getFilterCategory(cat) {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
        const {meals:response} = await api.json();
        // console.log(response);
        this.ui.displayFilterCategory(response)
    }
}