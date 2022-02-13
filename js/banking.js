
document.getElementById('deposit-button').addEventListener('click', function (){
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositeAmount = parseFloat(newDepositText);
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const previousText = depositTotal.innerText;
    const previousAmount = parseFloat(previousText);
    const newAmount = previousAmount + newDepositeAmount;
    
    depositTotal.innerText = newAmount;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal;

    depositInput.value = '';
});

document.getElementById('withdraw-button').addEventListener('click', function (){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);
    
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const withdrawTotalAmount = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = withdrawTotalAmount;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = '';

})