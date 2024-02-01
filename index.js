// Function to add a new expense
function addNewExpense(e) {
    e.preventDefault();

    const expenseDetails = {
        expenseamount: e.target.expenseamount.value,
        description: e.target.description.value,
        category: e.target.category.value,
    };

    // Displaying expense details for now
    console.log(expenseDetails);

    // Add logic to update UI or local storage as needed
    addNewExpensetoUI(expenseDetails);

    // Clearing the form fields
    e.target.expenseamount.value = '';
    e.target.description.value = '';
}

// Function to add a new expense to the UI
function addNewExpensetoUI(expense) {
    const parentElement = document.getElementById('listOfExpenses');
    const expenseElemId = `expense-${Date.now()}`; // Using timestamp as a unique identifier

    // Appending the new expense to the UI
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

// Function to edit an expense
function editExpense(expenseElemId) {
    // Add logic to handle editing of the expense
    // For example, you can open a modal or update the form with the expense details for editing
    console.log(`Editing expense with ID: ${expenseElemId}`);
}

// Function to delete an expense from the UI
function deleteExpense(expenseElemId) {
    document.getElementById(expenseElemId).remove();
}

// Function to show an error message
function showError(err) {
    document.getElementById('message').innerHTML = `<div class="alert alert-danger">${err}</div>`;
}

// Your existing code...

// Event listener to execute code after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
    // Existing code for checking premium user and loading expenses
    // ...
});
