window.addEventListener("DOMContentLoaded",init);

function init(){
bindEvents();
fillWithZeroes();
}

function computeSalary(){
    var salary=document.querySelector("#salary").value;
    console.log("Salary is:", salary);
    salaryOperations.takeSalary(parseFloat(salary));
    printDetails();
}

function bindEvents(){
    document.querySelector("#compute").addEventListener("click",computeSalary);
}

function fillWithZeroes(){
    var spans=document.querySelectorAll("span");
    for(let span of spans){
        span.innerText='0';
    }
}

function printDetails(){
    for(let key in  salaryOperations){
        if(typeof salaryOperations[key]==="function"){
            if(key=="takeSalary"){
                continue;
            }
            document.querySelector("#"+key).innerHTML=salaryOperations[key]();
        }
    }
}