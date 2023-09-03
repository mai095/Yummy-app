import { Ui } from "./ui.module.js";

export class SearchByName {
    constructor() {
        this.ui = new Ui();
        this.user = document.getElementById("userInputName")


    }

    async getSearchByName(term) {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
        const { meals: response } = await api.json();
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            if(term.toLowerCase() == response[i].strCategory.toLowerCase()){
                this.ui.displaySearchByName(response);
            }else{
                this.ui.displaySearchByName([]);
            }
            
        }
       
        
    }
    // async getSearchByName() {
    //     const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
    //     const { meals: response } = await api.json();
    //     console.log(response);
        
    //     this.ui.displaySearchByName(response);
    // }


}