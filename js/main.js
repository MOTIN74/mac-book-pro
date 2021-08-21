
const eightGb = document.getElementById('config-eight-gb');
const sixteenGb = document.getElementById('config-sixteen-gb');

const memoryCost = document.getElementById('memory-cost');

const bestPrice = document.getElementById('best-price');

let grandTotal = document.getElementById('grand-total');
// after promo offer
let totalPrice = document.getElementById('total-price');


// Memory cost
eightGb.addEventListener('click', function() {
    memoryCost.innerText = '0';
    updateTotal()
});

sixteenGb.addEventListener('click', function() {
    memoryCost.innerText = '180';
    updateTotal()
});

// Grand total and total price only base value
function updateTotal() {
  let memoryCostTotal = Number(memoryCost.innerText);
   let productCostTotal = Number(bestPrice.innerText);
   let mainTotal = memoryCostTotal + productCostTotal;
   grandTotal.innerText = mainTotal;
  let totalCost = grandTotal.innerText;
  totalPrice.innerText = totalCost;
}

// Storage cost
const storageFirst = document.getElementById('storage-first');
const storageSecond= document.getElementById('storage-second');
const storageThird = document.getElementById('storage-third');

const storageCost = document.getElementById('storage-cost');

storageFirst.addEventListener('click', function() {
    storageCost.innerText = '0';
    updateTotal()
});
storageSecond.addEventListener('click', function() {
    storageCost.innerText = '100';
    updateTotal()
});
storageThird.addEventListener('click', function() {
    storageCost.innerText = '180';
    updateTotal()
});
// Grand total & total price after changing storage cost.
function updateTotal() {
    let memoryCostTotal = Number(memoryCost.innerText);
   let productCostTotal = Number(bestPrice.innerText);
    let storageCostTotal = Number(storageCost.innerText);
     let mainTotal = memoryCostTotal + storageCostTotal + productCostTotal;
     grandTotal.innerText = mainTotal;
    let totalCost = grandTotal.innerText;
    totalPrice.innerText = totalCost;
  }

  // Grand total & total price after changing storage cost & delivery cost.
  const freeCost = document.getElementById('free-cost');
const insertShippingCost= document.getElementById('insert-shipping-cost');
const deliveryCost = document.getElementById('delivery-charge');


freeCost.addEventListener('click', function() {
    deliveryCost.innerText = '0';
    updateTotal()
});
insertShippingCost.addEventListener('click', function() {
    deliveryCost.innerText = '20';
    updateTotal()
});

function updateTotal() {
    let memoryCostTotal = Number(memoryCost.innerText);
   let productCostTotal = Number(bestPrice.innerText);
    let storageCostTotal = Number(storageCost.innerText);
    let shippingCost = Number(deliveryCost.innerText);
     let mainTotal = memoryCostTotal + storageCostTotal + productCostTotal + shippingCost;
     grandTotal.innerText = mainTotal;
    let totalCost = grandTotal.innerText;
    totalPrice.innerText = totalCost;
  }

  // promo code apply


 document.getElementById('code-btn').addEventListener('click', function() {

    const couponCode = document.getElementById('coupon-code');

    const priceTotal = document.getElementById('grand-total').innerText;
    const discount = (parseInt(priceTotal) / 100) * 20;
    const finalTotal = document.getElementById('total-price');

    if (couponCode.value == 'stevekaku') {
       finalTotal.innerText = parseInt(priceTotal) - discount;
    }  else {
        // finalTotal.innerText = parseInt(priceTotal);
        alert('invalid code');
    } 
    couponCode.value = '';

 })
