import { Ui } from "./ui.module.js";

export class Ingredient{
    constructor(){
        this.ui= new Ui();
        // this.getIngredient()
        this.loader = document.querySelector("#loader")
    }


    async getIngredient(){
        this.loader.classList.remove('d-none')
        const api= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        const {meals:response} = await api.json();
        this.loader.classList.add('d-none')
        this.ui.displayIngredient(response);
        
    }
}