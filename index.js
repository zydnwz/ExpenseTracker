
function addNewExpense(e) {
    e.preventDefault();

    const expenseDetails = {
        expenseamount: e.target.expenseamount.value,
        description: e.target.description.value,
        category: e.target.category.value,
    };

    console.log(expenseDetails);

    addNewExpensetoUI(expenseDetails);

    e.target.expenseamount.value = '';
    e.target.description.value = '';
}

function addNewExpensetoUI(expense) {
    const parentElement = document.getElementById('listOfExpenses');
    const expenseElemId = `expense-${Date.now()}`; 

    
    parentElement.innerHTML += `
        <li id=${expenseElemId} class="list-group-item">
            ${expense.expenseamount} - ${expense.category} - ${expense.description}
            <button onclick='editExpense("${expenseElemId}")' class="btn btn-warning mr-2">
                Edit
            </button>
            <button onclick='deleteExpense("${expenseElemId}")' class="btn btn-danger">
                Delete
            </button>
        </li>`;
}


function editExpense(expenseElemId) {
    console.log(`Editing expense with ID: ${expenseElemId}`);
}

function deleteExpense(expenseElemId) {
    document.getElementById(expenseElemId).remove();
}


function showError(err) {
    document.getElementById('message').innerHTML = `<div class="alert alert-danger">${err}</div>`;
}


document.addEventListener('DOMContentLoaded', () => {
    
});
