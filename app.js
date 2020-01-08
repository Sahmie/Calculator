const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');





keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;



    //number keys!
    if(!action){
      console.log('number key!');
      
    }

    //operator keys
    if(action === 'add' || action === 'subtract' ||action === 'multiply' || action === 'divide') {
      console.log('operator key!')
      
    }


    //decimal key
    if(action === 'decimal'){
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
