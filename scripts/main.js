class Calculator {
  
  
  add(n1,n2){
    return n1 + n2;
  }
  subtract(n1,n2){
    return n1 - n2;
  }
  multiply(n1,n2){
    return n1 * n2;
  }
  split(n1,n2){
    return n1 / n2
  }
}

class Display{
  constructor(displayOperation, displayResult){
    this.displayOperation = displayOperation;
    this.displayResult = displayResult;
    this.calculator = new Calculator();
    this.operation = "";
    this.result = '';
    this.operationType = undefined;
    this.signs = {
      add: "+",
      subtract: '-',
      multiply: "x",
      split:"÷"
    }
  }
  clear(){
    this.operation = "";
    this.result = '';
    this.operationType = undefined;
    this.printValues();
  }

  addNumber(n){
    if(n == "." && this.operation.includes('.')) return
    this.operation = this.operation.toString() + n.toString();
    this.printValues()
  }

  printValues(){
    this.displayOperation.textContent = this.operation;    
    this.displayResult.textContent = `${this.result} ${this.signs[this.operationType] || ''}`;

  }
  calculate(){
    const operation = parseFloat(this.operation);
    const result = parseFloat(this.result);

    if(isNaN(result) || isNaN(operation)) return
    this.operation = this.calculator[this.operationType](result, operation)
  }

  compute(type){
    this.operationType !== 'equal' && this.calculate();
    this.operationType = type;
    this.result = this.operation || this.result; //! valor anterior es result
    this.operation = '';
    this.printValues();
  }

}


const displayOperation = document.getElementById("operation");
const displayResult = document.getElementById("result");
const btnsNumbers = document.querySelectorAll(".numbers");
const btnsOperators = document.querySelectorAll(".operator");
const calculadora = document.querySelector(".calculator");
const ac = document.getElementById("ac");


const display = new Display(displayOperation,displayResult);



for (let i = 0; i < btnsNumbers.length; i++) {
  btnsNumbers[i].addEventListener("click",()=>{
    display.addNumber(btnsNumbers[i].innerHTML)
    console.log("asd")
  })  
}

calculadora.addEventListener("click",(e)=>{
  if(e.target.className == "number" || e.target.classList == "zero"){
  display.addNumber(e.target.innerText)
  }
})


ac.addEventListener("click",()=>{display.clear()});


for (let i = 0; i < btnsOperators.length; i++) {
  btnsOperators[i].addEventListener("click",()=> display.compute(btnsOperators[i].value))
  
}