const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');



keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'));



    //number keys!
    if(!action){
      
      if (
        displayedNum === '0' ||
        previousKeyType === 'operator' ||
        previousKeyType === 'calculate'
      ) {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }


       if(displayedNum === '0' || previousKeyType === 'operator'){
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
      calculator.dataset.previousKeyType = 'number';
    }

    //operator keys
    if(action === 'add' || action === 'subtract' ||   action === 'multiply' || action === 'divide') {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      //check for firstValue and operator
      if(firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate'){
        const calcValue = calculate(firstValue, operator, secondValue)
        display.textContent = calcValue;

        //update calculated value as firstValue
        calculator.dataset.firstValue = calcValue;
      }else{
        //if there are no calculations, set displayNum as the firstvalue
        calculator.dataset.firstValue = displayedNum;
      }

      key.classList.add('is-depressed');
      calculator.dataset.previousKeyType = 'operator';
      // calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }
    


    //decimal key
    if(action === 'decimal'){
     //do nothing if string has a dot
      if(!displayedNum.includes('.')){
        display.textContent = displayedNum + '.';
        if(previousKeyType === 'operator' || previousKeyType === 'calculate'){
          display.textContent = '0.';
        }
      }
      calculator.dataset.previousKeyType = 'decimal';
    }


    //clear key
    if(action === 'clear'){
      display.textContent = 0
      calculator.dataset.previousKeyType = 'clear';
    }


    //equals key!
    if(action === 'calculate'){
      let firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      let secondValue = displayedNum;
      
      if(firstValue){
        if(previousKeyType === 'calculate'){
          console.log(secondValue)
          firstValue = displayedNum
          secondValue = calculator.dataset.modValue
        }

        display.textContent = calculate(firstValue, operator, secondValue)
      }
      calculator.dataset.modValue = secondValue
      calculator.dataset.previousKeyType = 'calculate';
    }

    
  }
 })


 const calculate  = (n1, operator, n2) =>{
   let result = '';

  if(operator === 'add'){
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === 'subtract'){
    result = parseFloat(n1) - parseFloat(n2);
  }else if(operator === 'multiply'){
    result = parseFloat(n1) * parseFloat(n2);
  }else if(operator === 'divide'){
    result = parseFloat(n1) / parseFloat(n2);
  }
  return result;
 }

