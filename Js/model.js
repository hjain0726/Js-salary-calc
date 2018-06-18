const salaryOperations={
salary:0,
takeSalary(salary){
this.salary=salary;
},
hra(){
return this.salary*0.30;
},
ta(){
return this.salary*0.20;
},
da(){
return this.salary*0.10;
},
pf(){
return this.salary*0.05;
},
gs(){
return this.salary+this.hra()+this.ta()+this.da()-this.pf();
},
tax(){
return this.gs()*0.10
},
ns(){
return this.gs()-this.tax();
}
};