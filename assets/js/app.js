var pizzaElement = document.getElementsByName('pizza');
var sizeElement = document.getElementsByName('size');
var priceElement = document.getElementById('price');
var pizzaPrice = 0;
var sizePrice = 0;
var toppingsPrice = 0;
var totalPrice = 0;

window.onload = function() {
	//set default price when window onload
	setTotalPrice();
}

//selector for pizza
pizzaElement.forEach(pizza => {
	pizza.addEventListener('change', function() {
		//reset all to defaults when changing pizzas
		enableSizeRadioButton();
		resetToppings();
		resetSize();
		resetTotalPrice();

		//determine right toppings and price depends on choosen pizza
		switch(pizza.value) {
			case '8':
				let pizzaOnePrice = parseInt(pizza.value);
				let toppingPizzaOne = ['avocado', 'broccoli', 'onions', 'zucchini', 'tuna', 'ham'];

				pizzaToppings(toppingPizzaOne);
				pizzaPrice = pizzaOnePrice;
				setTotalPrice();
			break;

			case '10':
				let pizzaTwoPrice = parseInt(pizza.value);
				let toppingPizzaTwo = [
					'broccoli', 
					'onions', 
					'zucchini', 
					'lobster', 
					'oyster', 
					'salmon', 
					'bacon', 
					'ham'
				];

				pizzaToppings(toppingPizzaTwo);
				pizzaPrice = pizzaTwoPrice;
				setTotalPrice();
			break;

			case '12':
				let pizzaThreePrice = parseInt(pizza.value);
				let toppingPizzaThree = [
					'broccoli', 
					'onions', 
					'zucchini', 
					'tuna', 
					'bacon', 
					'duck', 
					'ham', 
					'sausage'
				];

				pizzaToppings(toppingPizzaThree);
				pizzaPrice = pizzaThreePrice;
				setTotalPrice();
			break;
		}
	})
});

//selector for sizes
sizeElement.forEach(size => {
	size.onclick = function() {
		switch(size.value){
			case 'small':
				sizePrice = -1;
				setTotalPrice();
			break;

			case 'medium':
				sizePrice = 0;
				setTotalPrice();
			break;

			case 'large':
				sizePrice = 2;
				setTotalPrice();
			break;
		}
	}
})

//func for enabling food size section
function enableSizeRadioButton() {
	sizeElement.forEach(size => {
		size.removeAttribute('disabled');
	});
}

//func for selecting pizza toppings
function pizzaToppings(toppingArrays) {
	let toppingElement = document.getElementsByName('toppings');
	toppingElement.forEach(topping => {
		if(toppingArrays.includes(topping.id)){
			topping.removeAttribute('disabled');
			topping.onclick = function() {
				if(this.checked){
					toppingsPrice = toppingsPrice + parseInt(topping.value);
					setTotalPrice();
				}else{
					toppingsPrice = toppingsPrice - 1;
					setTotalPrice();
				}
			}
		}
	})
}

//func to reset all toppings to disabled
function resetToppings() {
	let toppingElement = document.getElementsByName('toppings');
	toppingElement.forEach(topping => {
		topping.checked = false;
		topping.setAttribute('disabled', true);
	})
}

//func to reset all sizes to default
function resetSize() {
	sizeElement.forEach(size => {
		if (size.value != 'medium') {
			size.checked = false;
		}else{
			size.checked = true;
		}
	})
}

//func to update the total price
function setTotalPrice() {
	totalPrice = pizzaPrice + sizePrice + toppingsPrice;
	priceElement.innerHTML = totalPrice;
}

//func to reset total price
function resetTotalPrice() {
	pizzaPrice = 0;
	sizePrice = 0;
	toppingsPrice = 0;
	totalPrice = 0;
	priceElement.innerHTML = totalPrice;
}