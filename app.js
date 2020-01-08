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
       if(displayedNum === '0' || previousKeyType === 'operator'){
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
      calculator.dataset.previousKeyType = 'number';
      console.log('number key!');
    }

    //operator keys
    if(action === 'add' || action === 'subtract' ||action === 'multiply' || action === 'divide') {
      key.classList.add('is-depressed')
      calculator.dataset.previousKeyType = 'operator';
      console.log('operator key!')
    }
    


    //decimal key
    if(action === 'decimal'){
      display.textContent = displayedNum + '.';
      console.log('decimal key!');
    }


    //clear key
    if(action === 'clear'){
      console.log('clear key!');
      
    }


    //equals key!
    if(action === 'calculate'){
      console.log('equal key!');
      
    }
  }
 })
