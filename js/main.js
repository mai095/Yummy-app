import { Category } from "./category.module.js";
import { Area } from "./area.module.js";
import { Ingredient } from "./ingredient.module.js";
import { FilterCategory } from "./filterCategory.module.js";
// import { MealInstructions } from "./mealInstructions.module.js";
import { SearchByName } from "./searchByName.module.js";


const category = new Category()
const area = new Area()
const ingredient = new Ingredient();
const filterCategory = new FilterCategory();
// const mealInstructions = new MealInstructions();
const searchByName = new SearchByName();



// ^ ============== SearchByName ===========
let user =document.getElementById("userInputName")
user.addEventListener("input",function(){
        searchByName.getSearchByName(user.value)
})

// ^ ============== Copy Right ===========
let date = new Date();
$("#copyRight").html(`Copyright Â© ${date.getFullYear()} All Rights
Reserved.`)

// ^============== Close Side Bar Function ===========
closeBar()
function closeBar() {
    let sideBarPosition = $(".sideBarLinks").innerWidth()
    $(".sideBar").animate({ left: -sideBarPosition }, 1000)
    document.getElementById('closeSideBar').classList.add("d-none")
    document.getElementById('openSideBar').classList.remove("d-none")
}

category.getCategory()

// ^============== Close Side Bar ===========
$("#closeSideBar").click(function () {
    closeBar()
})

// ^============== Open Side Bar ===========
$("#openSideBar").click(function () {
    $(".sideBar").animate({ left: '0' }, 1000)
    document.getElementById('closeSideBar').classList.remove("d-none")
    document.getElementById('openSideBar').classList.add("d-none")
})

let showSearch =document.getElementById("showSearch")
$("#search").click(function(){
   
    $("#detailsCategory").hide();
    form.classList.replace('d-flex', 'd-none')
    $("#meal").hide();
    $("#area").show();
    showSearch.classList.replace('d-none','d-flex')
    closeBar()

})
$("#categoryData").click(function () {
    $("#area").hide();
   
    $("#ingredient").hide();
    form.classList.replace('d-flex','d-none')
    showSearch.classList.replace('d-flex','d-none')

    $("#meal").show();

    category.getCategory()
    closeBar()
})


$("#areaData").click(function () {
    $("#ingredient").hide();
   

    form.classList.replace('d-flex', 'd-none')
    showSearch.classList.replace('d-flex','d-none')

    $("#meal").hide();
    $("#area").show();
    area.getArea();
    closeBar()
})

$("#ingredientData").click(function () {
    $("#area").hide();
    $("#ingredient").show();
    form.classList.replace('d-flex', 'd-none')
    showSearch.classList.replace('d-flex','d-none')

    $("#meal").hide();
    ingredient.getIngredient();
    closeBar()
})

// ^==============  Dispaly Form ============== 
let form = document.querySelector("#contactForm");
$("#contactUs").click(function () {
    $("#area").hide();
    $("#ingredient").hide();
    $("#meal").hide();
    form.classList.replace('d-none', 'd-flex')
    showSearch.classList.replace('d-flex','d-none')
    closeBar()

})
