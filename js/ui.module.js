
export class Ui {
    constructor() {

    }
    // ! =========== displaySearchByName ===========
    displaySearchByName(data){
        let searchName=``
        for (let i = 0; i < data.length; i++) {
            searchName+=`
            <div class="col-md-3">
            <div class="item position-relative overflow-hidden">
                <img src="${data[i].strMealThumb}" class="w-100 alt="">
                <div id="layer" class=" d-flex align-items-center justify-content-center text-black bg-white">
                    <h3>${data[i].strMeal}</h3>
                </div>
            </div>
        </div>
                `    
        }
        $("#searchByName").html(searchName);

    }






    // ! =========== displayCategory ===========
    displayCategory(data) {
        let meal = ``
        for (let i = 0; i < data.length; i++) {
            meal += `<div class="col-md-3" data-category="${data[i].strCategory}">
            <div class="position-relative item overflow-hidden">
                <img src="${data[i].strCategoryThumb}" class="w-100" alt="">
                <div id="layer" class=" d-flex flex-column align-items-center text-center text-black bg-white">
                    <h3>${data[i].strCategory}</h3>
                    <p>${data[i].strCategoryDescription}</p>
                </div>
            </div>
        </div>`

        }
        $("#displayMeal").html(meal);
    }
    // ! =========== displayFilterCategory ===========
    displayFilterCategory(data) {
        let filterMeal = ``
        for (let i = 0; i < data.length; i++) {
            filterMeal += `
        <div class="col-md-3">
            <div class="position-relative item overflow-hidden">
                <img src="${data[i].strMealThumb}" class="w-100" alt="">
                <div id="layer" class=" d-flex align-items-center justify-content-center text-black bg-white">
                    <h3>${data[i].strMeal}</h3>
                </div>
            </div>
        </div>`
        }

        $("#filterCategory").html(filterMeal);
    }

    // ! =========== displayMealInstructions ===========
    // displayMealInstructions(data){
    //     let mealInstructions=``
    //     for (let i = 0; i < data.length; i++) {
    //        mealInstructions+=`
    //        <div class="col-md-4">
    //        <img src="${data[i]}" alt="">
    //    </div>
    //    <div class="col-md-8">
    //        <div class="item">
    //            <h2 class="text-uppercase"></h2>
    //            <p>${data[i].strInstructions}</p>
    //            <h3 class="text-uppercase fw-bolder">Area : ${data[i]}</h3>
    //            <h3 class="text-uppercase fw-bolder">Category : ${data[i]}</h3>
    //            <h3 class="text-uppercase fw-bolder">Recipes : ${data[i]}</h3>
    //            <span></span>
    //            <span></span>
    //        </div>
    //    </div>

    //        `

    //     }
    // }

    // ! =========== displayArea ===========

    displayArea(data) {
        let area = ``
        for (let i = 0; i < data.length; i++) {
            area += `
            <div class="col-md-3" data-city="${data[i].strArea}"> 
                <div class="item text-white">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h3>${data[i].strArea}</h3>
                 </div>
            </div>`


        }
        $("#displayArea").html(area);
    }

    // ! =========== displayMealOfArea ===========

    displayMealOfArea(data) {
        let mealArea = ``;
        for (let i = 0; i < data.length; i++) {
            mealArea += `
        <div class="col-md-3">
            <div class="position-relative item overflow-hidden">
                    <img src="${data[i].strMealThumb}" class="w-100" alt="">
                    <div id="layer" class=" d-flex align-items-center justify-content-center text-black bg-white">
                        <h3>${data[i].strMeal}</h3>
                    </div>
            </div>
               
        </div>
        `
        }
        $("#mealOfArea").html(mealArea);

    }

    // ! =========== displayIngredient ===========

    displayIngredient(data) {
        let ingredient = ``
        for (let i = 0; i < data.length; i++) {
            ingredient += `
            <div class="col-md-3">
            <div class="item text-white">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                <h3>${data[i].strIngredient}</h3>
                <p>${data[i].strDescription}</p>
            </div>
        </div>
            `
        }
        $("#displayIngredient").html(ingredient);

    }
}

