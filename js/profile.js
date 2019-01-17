var global_region;
var global_category;

var profile_data = [
{
    img: "images/profiles/s1.jpg",
    name: "Gunjeet",
    region: "Mumbai",
    category: "Tall",
    height: "162cm",
    weight: "80kg",
    BMI: "23"
},
{
    img: "images/profiles/s2.jpg",
    name: "Ankit",
    region: "Marathwada",
    category: "Short",
    height: "140cm",
    weight: "76kg",
    BMI: "22.9"
},
{
    img: "images/profiles/s3.jpg",
    name: "Haadi",
    region: "Thane",
    category: "Tall",
    height: "162cm",
    weight: "88kg",
    BMI: "25"
},
{
    img: "images/profiles/s4.jpg",
    name: "Shubham",
    region: "Navi Mumbai",
    category: "Super Tall",
    height: "190cm",
    weight: "81kg",
    BMI: "24"
},
{
    img: "images/profiles/s5.jpg",
    name: "NewDude",
    region: "Mumbai",
    category: "Tall",
    height: "190cm",
    weight: "91kg",
    BMI: "24.8"
}
]; 

function create()
{
    var ctr = -1;
    var total = count();
    console.log(global_region + " " + global_category)
    
    $("#prep").remove();
    if(document.getElementById("prep") == null){
        for(var i = 0; i < profile_data.length; i++)
        {    
            if(global_region === 'All' && global_category === 'All')
                console.log("1");
            else if(global_region !== profile_data[i].region || global_category !== profile_data[i].category){
                if(global_region === 'All' && global_category === profile_data[i].category)
                    console.log("12");
                else if(global_category === 'All' && global_region === profile_data[i].region)
                    console.log("12");
                else
                    continue;
            }
            else
                console.log("2");
            ctr++;
            var div = document.createElement("div");
            div.setAttribute("id", "prep");
            var space = document.createElement('br');
            if(ctr % 2 === 0){
                div.setAttribute("class", "w3-card w3-col card-prop w3-right w3-padding right-margin top-margin");
                if(i === total - 1){
                    div.setAttribute("class", "w3-card w3-col card-prop w3-center w3-padding right-margin-large top-margin");
                    console.log("Neha is cute");
                }
            }
            else
                div.setAttribute("class", "w3-card card-prop w3-padding left-margin top-margin");
            var img = document.createElement("img");
            img.setAttribute("class", "responsive");
            img.setAttribute("src", profile_data[i].img);

            var name = document.createElement("p");
            var region = document.createElement("p");
            var category = document.createElement("p");
            var height = document.createElement("p");
            var weight = document.createElement("p");
            var BMI = document.createElement("p");

            name.setAttribute("class", "w3-center");
            region.setAttribute("class", "w3-center");
            category.setAttribute("class", "w3-center");
            height.setAttribute("class", "w3-center");
            weight.setAttribute("class", "w3-center");
            BMI.setAttribute("class", "w3-center");

            name.appendChild(document.createTextNode("Name: "+profile_data[i].name));
            region.appendChild(document.createTextNode("Region: "+profile_data[i].region));
            category.appendChild(document.createTextNode("Category: "+profile_data[i].category));
            height.appendChild(document.createTextNode("Height: "+profile_data[i].height));
            weight.appendChild(document.createTextNode("Weight: "+profile_data[i].weight));
            BMI.appendChild(document.createTextNode("BMI: "+profile_data[i].BMI));

            div.appendChild(img);
            div.appendChild(name);
            div.appendChild(region);
            div.appendChild(category);
            div.appendChild(height);
            div.appendChild(weight);
            div.appendChild(BMI);
            div.appendChild(space); 
            document.getElementById("main").appendChild(div);
            //document.getElementById("main").appendChild(document.createElement("br"));
        }
   }
}

function toggling_button() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function toggling_category_button() {
    document.getElementById("myDropdown-category").classList.toggle("show");
}

function toggling(region) {
    document.getElementById("myDropdown").classList.toggle("show");
    global_region = region;
    document.getElementById("region-button").innerHTML = region;
}

function toggling_category(category) {
    document.getElementById("myDropdown-category").classList.toggle("show");
    global_category = category; 
    document.getElementById("category-button").innerHTML = category;
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function filterFunction_category() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput-category");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown-category");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function count()
{
    var ctr = 0;
    for(var i = 0; i < profile_data.length; i++)
    {
        if(global_region !== profile_data[i].region || global_category !== profile_data[i].category)
            continue;
        ctr++;
    }
    return ctr;
}