import { Ui } from "./ui.module.js";
import { MealOfArea } from "./mealOfArea.module.js";

export class Area {
    constructor() {
        this.ui = new Ui();
        this.loader = document.querySelector("#loader")
        // this.mealOfArea = new MealOfArea();

        this.area = document.getElementById("area");
        this.areaMeal = document.getElementById("areaMeal");


    }

    async getArea() {
        this.loader.classList.remove('d-none')
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        const { meals: response } = await api.json();
        this.loader.classList.add('d-none')
        this.ui.displayArea(response)

        document.querySelectorAll("#displayArea .col-md-3").forEach((area) => {
            area.addEventListener('click', () => {
                this.area.classList.add('d-none');
                this.areaMeal.classList.remove('d-none');
                new MealOfArea().getMealOfArea(area.dataset.city);
            })
        })
    }




}


