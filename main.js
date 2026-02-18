
const selectBtn = document.getElementById('select-btn');
const selectRec = document.querySelector('.select-rec');
const keepBtn = document.getElementById('keep-btn');






//get the selected option and create thier various input

selectBtn.addEventListener('click', function getSelectedOption() {
    const selectOption = document.getElementById("selectCategory");
    //const selectedValue = selectOption.value; 
    // To get the text content use:
    const selectedText = selectOption.options[selectOption.selectedIndex].text;
  
  
  
    const inputs = {
      supplies:`
      <input type="text" name="supplies" value="" placeholder="Item supplied" class="js-input"
      />
      <input type="text" name="supplies" value="" placeholder="Qty" class="js-input"
      />
    `,
    transport:`
      <input type="text" name="location" value="" placeholder="Location" class="js-input"
      />
      <input type="number" name="location" value="" placeholder="Amount" class="js-input".inputmode="numeric"
      />
    `,
    utilities:`
      <input type="text" name="utilities" value="" placeholder="Input utilities" class="js-input"
      />

      <input type="text" name="utilities" value="" placeholder=" utilities" class="js-input"
      />
    `,
    }
    
    
    
    
    if (selectedText == 'Transport') {
      selectRec.innerHTML = inputs.transport;
    }
    else if (selectedText == 'Supplies'){
      selectRec.innerHTML = inputs.supplies;
    }
    else if(selectedText == 'Utilities'){
      selectRec.innerHTML = inputs.utilities;
    }
    
    keepBtn.style.display = 'flex';
    
    
    e.preventDefault();
});

//console.log(`${selectBtn}`);

console.log('No BUG');
