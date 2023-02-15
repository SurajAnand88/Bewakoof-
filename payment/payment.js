var paymentDebitButton = document.getElementById("payment-debit-button");
var paymentWalletButton = document.getElementById("payment-wallet-button");
var paymentUpiButton = document.getElementById("payment-upi-button");
var paymentNetBankingButton = document.getElementById("payment-net-banking-button");
var paymentCodButton = document.getElementById("payment-cod-button");
    
// We have to change debit card button again on clicking second time;
var btn = document.querySelector(".btn");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var btn4 = document.querySelector(".btn4");
var btn5 = document.querySelector(".btn5");

paymentDebitButton.addEventListener("click", ()=>{
    paymentUpiButton.style.backgroundColor = "whitesmoke";
    paymentUpiButton.style.border = "none";

    paymentNetBankingButton.style.backgroundColor = "whitesmoke";
    paymentNetBankingButton.style.border = "none";

    paymentWalletButton.style.backgroundColor = "whitesmoke";
    paymentWalletButton.style.borderLeft = "none";

    paymentCodButton.style.backgroundColor = "whitesmoke";
    paymentCodButton.style.borderLeft = "none";

    paymentDebitButton.style.backgroundColor = "white";
    btn.style.backgroundColor = "white";
    paymentDebitButton.style.borderLeft = "5px solid #42a2a2";
    btn.style.fontWeight = "700";
    btn2.style.fontWeight = "300";
    btn3.style.fontWeight = "300";
    btn4.style.fontWeight = "300";
    btn5.style.fontWeight = "300";
  

    btn2.style.backgroundColor = "whitesmoke";
    btn3.style.backgroundColor = "whitesmoke";
    btn4.style.backgroundColor = "whitesmoke";
    btn5.style.backgroundColor = "whitesmoke";
    document.getElementById("payment-debit").style.display = "block";
    document.getElementById("payment-upi").style.display = "none";
    document.getElementById("payment-wallet").style.display = "none";
    document.getElementById("payment-net-banking").style.display = "none";
    document.getElementById("payment-COD").style.display = "none";

})


paymentWalletButton.addEventListener("click", ()=>{
    // left div changed
    paymentWalletButton.style.backgroundColor = "white";
    paymentWalletButton.style.borderLeft = "5px solid #42a2a2";
    
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";
    
    paymentUpiButton.style.backgroundColor = "whitesmoke";
    paymentUpiButton.style.border = "none";
    
    paymentCodButton.style.backgroundColor = "whitesmoke";
    paymentCodButton.style.borderLeft = "none";

    btn2.style.fontWeight = "700";
    btn.style.fontWeight = "300";
    btn3.style.fontWeight = "300";
    btn4.style.fontWeight = "300";
    btn5.style.fontWeight = "300";
    

    btn2.style.backgroundColor = "white";
    btn.style.backgroundColor = "whitesmoke";
    btn3.style.backgroundColor = "whitesmoke";
    btn4.style.backgroundColor = "whitesmoke";
    btn5.style.backgroundColor = "whitesmoke";
    paymentNetBankingButton.style.backgroundColor = "whitesmoke";
    paymentNetBankingButton.style.border = "none";
    // right div changed
    // btn2.style.backgroundColor = "whitesmoke";
    document.getElementById("payment-wallet").style.display = "block";
    document.getElementById("payment-debit").style.display = "none";
    document.getElementById("payment-upi").style.display = "none";
    document.getElementById("payment-net-banking").style.display = "none";
    document.getElementById("payment-COD").style.display = "none";
});



paymentUpiButton.addEventListener("click", ()=>{
paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";

    paymentNetBankingButton.style.backgroundColor = "whitesmoke";
    paymentNetBankingButton.style.border = "none";

    paymentWalletButton.style.backgroundColor = "whitesmoke";
    paymentWalletButton.style.borderLeft = "none";

    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";

    paymentCodButton.style.backgroundColor = "whitesmoke";
    paymentCodButton.style.borderLeft = "none";

    paymentUpiButton.style.backgroundColor = "white";
    paymentUpiButton.style.borderLeft = "5px solid #42a2a2";

    btn3.style.fontWeight = "700";
    btn2.style.fontWeight = "300";
    btn.style.fontWeight = "300";
    btn4.style.fontWeight = "300";
    btn5.style.fontWeight = "300";


    btn3.style.backgroundColor = "white";
    btn.style.backgroundColor = "whitesmoke";
    btn2.style.backgroundColor = "whitesmoke";
    btn4.style.backgroundColor = "whitesmoke";
    btn5.style.backgroundColor = "whitesmoke";
    // paymentUpiButton.style.border = "none";
    document.getElementById("payment-upi").style.display = "block";
    document.getElementById("payment-debit").style.display = "none";
    document.getElementById("payment-wallet").style.display = "none";
    document.getElementById("payment-net-banking").style.display = "none";
    document.getElementById("payment-COD").style.display = "none";
});

paymentNetBankingButton.addEventListener("click", ()=>{
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";

    paymentUpiButton.style.backgroundColor = "whitesmoke";
    paymentUpiButton.style.border = "none";
    
    paymentWalletButton.style.backgroundColor = "whitesmoke";
    paymentWalletButton.style.borderLeft = "none";

    paymentCodButton.style.backgroundColor = "whitesmoke";
    paymentCodButton.style.borderLeft = "none";

    btn4.style.fontWeight = "700";
    btn3.style.fontWeight = "300";
    btn2.style.fontWeight = "300";
    btn.style.fontWeight = "300";
    btn5.style.fontWeight = "300";
    // paymentCodButton
    btn.style.backgroundColor = "whitesmoke";
    btn2.style.backgroundColor = "whitesmoke";
    btn3.style.backgroundColor = "whitesmoke";
    btn5.style.backgroundColor = "whitesmoke";
    btn4.style.backgroundColor = "white";
    paymentNetBankingButton.style.backgroundColor = "white";
    paymentNetBankingButton.style.borderLeft = "5px solid #42a2a2";
    
    document.getElementById("payment-net-banking").style.display = "block";
    document.getElementById("payment-debit").style.display = "none";
    document.getElementById("payment-upi").style.display = "none";
    document.getElementById("payment-wallet").style.display = "none";
    document.getElementById("payment-COD").style.display = "none";
});


paymentCodButton.addEventListener("click", ()=>{
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";

    paymentUpiButton.style.backgroundColor = "whitesmoke";
    paymentUpiButton.style.border = "none";
    
    paymentWalletButton.style.backgroundColor = "whitesmoke";
    paymentWalletButton.style.borderLeft = "none";
    
    paymentDebitButton.style.backgroundColor = "whitesmoke";
    paymentDebitButton.style.border = "none";

    paymentNetBankingButton.style.backgroundColor = "whitesmoke";
    paymentNetBankingButton.style.border = "none";

    btn5.style.fontWeight = "700";
    btn4.style.fontWeight = "300";
    btn3.style.fontWeight = "300";
    btn2.style.fontWeight = "300";
    btn.style.fontWeight = "300";

    btn5.style.backgroundColor = "white";
    btn.style.backgroundColor = "whitesmoke";
    btn2.style.backgroundColor = "whitesmoke";
    btn3.style.backgroundColor = "whitesmoke";
    btn4.style.backgroundColor = "whitesmoke";

    paymentCodButton.style.backgroundColor = "white";
    paymentCodButton.style.borderLeft = "5px solid #42a2a2";
    
    document.getElementById("payment-COD").style.display = "block";
    document.getElementById("payment-debit").style.display = "none";
    document.getElementById("payment-upi").style.display = "none";
    document.getElementById("payment-net-banking").style.display = "none";
    document.getElementById("payment-wallet").style.display = "none";
});

document.querySelector("#card-pay-now-button").addEventListener("click" , detailsSubmit)
function detailsSubmit(){
    let userCardDetails = {
        cardNumber : 1234567891,
        cardpassword: 123
    }
    let cardnumber = document.querySelector("#card-number").value;
    let cardname = document.querySelector("#card-name").value;
    let cardexpiry = document.querySelector("#card-expiry").value;
    let cardpassword = document.querySelector("#card-password").value;
     
    let tag1 =document.querySelector("#tag")
    let tag2 =document.querySelector("#tag2")

    if(Number(cardnumber) == userCardDetails.cardNumber || cardnumber == ""){
      console.log("correct");
      tag1.innerText = ""
      
    }else if(Number(cardnumber) != userCardDetails.cardNumber){
        tag1.innerText = "wrong card number"
        tag1.style.color = "red"
        
    }
    
    if(Number( cardpassword) == userCardDetails.cardpassword){
        tag2.innerText = ""
        console.log("wromg");
        
    }else if(Number(cardpassword) != userCardDetails.cardpassword){
        tag2.innerText = "wrong cvv number"
        tag2.style.color = "red"

    }
    // console.log(typeof cardnumber);

    if(cardnumber.length < 10){
        alert("Please enter 9 degit number")
        return false
    }
    

}

document.querySelector("#price-btn").addEventListener("click", continueShopping);

function continueShopping(){
    window.open("./continueShopping.html", "_self")
}