/* budget tracker */
let income=document.querySelector('.incomeType')
let expense=document.querySelector('.expenseType')
let total=parseFloat(income)-parseFloat(expense)


document.querySelector('.pickValue').addEventListener('click', chooseValue)

function chooseValue(){
    document.querySelector('.incomeType').classList.toggle('hide')
    document.querySelector('.expenseType').classList.toggle('hide')
}

document.addEventListener('keypress', function(event){
    if (event.key === 'g') {
        document.querySelector('.overall').classList.remove('hideAll')
        document.querySelector('.topPart').classList.add('hide')
    }
})
//second event listener (click) and 
document.querySelector('.add').addEventListener('click', tabulate)
function tabulate(e) {
    let money=parseFloat(document.querySelector('.monetary').value)
    let income=parseFloat(document.querySelector('.income').innerText)
    let expense=parseFloat(document.querySelector('.expense').innerText)
    let total=parseFloat(document.querySelector('.total').innerText)
    let current=document.querySelector('.pickValue').innerText
    let currItem=document.querySelector('#item').value
    let totalItem=document.querySelector('.itemDisplay').innerText
    if (current==='income') {
        income+=money
        total+=money
        document.querySelector('.income').innerText=income
        document.querySelector('.total').innerText=total
    } else if (current==='expense') {
        expense+=money
        console.log(expense)
        total-=money
        document.querySelector('.expense').innerText=expense
        document.querySelector('.total').innerText=total
    }
    let concater=totalItem + '\n' +' item:' +' ' + currItem +' ' + current +': ' + String(money)
    //let concater=`${totalItem} \n item: ${currItem}     ${current}: ${String(money)}`
    document.querySelector('.itemDisplay').innerText=concater
}


//allow the dropdown to show/hide
document.querySelector('.incomeType').addEventListener('click', ()=> {
   // ticket='incomeTime';  was gonna do a state machine with the ticket variable but went with the current variable 
    document.querySelector('.pickValue').innerText='income';
    document.querySelector('.incomeType').classList.toggle('hide');
    document.querySelector('.expenseType').classList.toggle('hide');
})
document.querySelector('.expenseType').addEventListener('click', ()=> {
    //ticket='expenseTime';
    document.querySelector('.pickValue').innerText='expense';
    document.querySelector('.incomeType').classList.toggle('hide');
    document.querySelector('.expenseType').classList.toggle('hide');
})

//third event listener: mouseover with colors
document.querySelector('.incomeStyle').addEventListener('mouseover', function(){
    document.querySelector('.incomeStyle').classList.add('green')
})
document.querySelector('.expenseStyle').addEventListener('mouseover', function(){
    document.querySelector('.expenseStyle').classList.add('red')
})
document.querySelector('.totalStyle').addEventListener('mouseover', function(){
    document.querySelector('.totalStyle').classList.add('yellow')
})
