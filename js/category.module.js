import { Ui } from "./ui.module.js";
import { FilterCategory } from "./filterCategory.module.js";


export class Category {
    constructor() {
        this.loader = document.querySelector("#loader")
        // this.filterCategory =new FilterCategory();
        this.detailsCategory = document.getElementById('detailsCategory')
        this.meal = document.getElementById('meal')
        this.ui = new Ui();
       
    }


    async getCategory() {
        this.loader.classList.remove('d-none')
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        const { categories: response } = await api.json();
        this.loader.classList.add('d-none')
        this.ui.displayCategory(response);
       

        document.querySelectorAll("#displayMeal .col-md-3").forEach((meal) => {
            meal.addEventListener('click',  ()=> {
                this.detailsCategory.classList.remove('d-none');
                this.meal.classList.add('d-none');
                // console.log(meal.dataset.category);

                new FilterCategory().getFilterCategory(meal.dataset.category);
            })
        })
        
    }

}
