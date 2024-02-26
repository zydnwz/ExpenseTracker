function addNewExpense(event) {
    event.preventDefault();

    const amountInput = document.querySelector('input[name="expenseamount"]');
    const descriptionInput = document.querySelector('input[name="description"]');
    const categoryInput = document.querySelector('select[name="category"]');

    const amount = parseFloat(amountInput.value);
    const description = descriptionInput.value;
    const category = categoryInput.value;

    if (isNaN(amount) || amount <= 0) {
        return;
    }

    const expense = {
        amount: amount,
        description: description,
        category: category
    };

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));

    amountInput.value = '';
    descriptionInput.value = '';
    categoryInput.value = '';
    displayExpenses();
}

function displayExpenses() {
    const expenseList = document.getElementById('listOfExpenses');
    expenseList.innerHTML = '';

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    if (expenses.length === 0) {
        expenseList.innerHTML = '<li class="list-group-item">No expenses added yet</li>';
        return;
    }

    expenses.forEach((expense, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerHTML = `
            <strong>Amount:</strong> $${expense.amount.toFixed(2)} |
            <strong>Description:</strong> ${expense.description} |
            <strong>Category:</strong> ${expense.category}
            <button class="btn btn-danger btn-sm float-right mr-2" onclick="deleteExpense(${index})">Delete</button>
            <button class="btn btn-secondary btn-sm float-right" onclick="editExpense(${index})">Edit</button>
        `;
        expenseList.appendChild(listItem);
    });
}

function deleteExpense(index) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}

function editExpense(index) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const editedExpense = expenses[index];
    const newAmount = prompt('Enter new amount:', editedExpense.amount);
    const newDescription = prompt('Enter new description:', editedExpense.description);
    const newCategory = prompt('Enter new category:', editedExpense.category);

    if (newAmount !== null && newDescription !== null && newCategory !== null) {
        expenses[index] = {
            amount: parseFloat(newAmount),
            description: newDescription,
            category: newCategory
        };
        localStorage.setItem('expenses', JSON.stringify(expenses));
        displayExpenses();
    }
}

displayExpenses();
