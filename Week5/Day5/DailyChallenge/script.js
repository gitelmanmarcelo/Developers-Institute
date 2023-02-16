let currencies;

const getCurrencies = async () => {
    try {
        let result = await fetch('https://v6.exchangerate-api.com/v6/f55b08278ec12ccd16591c3c/codes');
        result = await result.json();
        currencies = JSON.parse(JSON.stringify(result.supported_codes));
        fillCurrDropbox('#fromCurr');
        fillCurrDropbox('#toCurr');
    } catch (err) {
        alert('Error: ' + err);
    }
}

const fillCurrDropbox = (id) => {
    currencies.forEach( el => { 
        const option = document.createElement('option');
        const text = document.createTextNode(el[0] + ' | ' + el[1]);
        option.appendChild(text);
        document.querySelector(id).appendChild(option);
    });
}

const convert = async (evt) => {
    try {
        evt.preventDefault();
        const amount = Number(document.querySelector('#amount').value);
        if (isNaN(amount) || amount === 0 )
            return;
        const from = document.querySelector('#fromCurr').options[document.querySelector('#fromCurr').selectedIndex].text.slice(0,3);      
        const to = document.querySelector('#fromCurr').options[document.querySelector('#toCurr').selectedIndex].text.slice(0,3);      
        let result = await fetch('https://v6.exchangerate-api.com/v6/f55b08278ec12ccd16591c3c/pair/' + from +'/' + to);
        result = await result.json();
        document.querySelector('#total').value = (Number(result.conversion_rate) * 
                                                    Number(document.querySelector('#amount').value)).toFixed(2);
    } catch (err) {
        alert("error: " + err);
    }
}

const validateAmount = (evt) => {
    if (isNaN(evt.target.value)) {
        alert('amount must be a value!');
        evt.target.value = '';
        evt.preventDefault();
    }
}

const switchCurrencies = (evt) => {
    let tmp = document.querySelector('#fromCurr').selectedIndex;      
    document.querySelector('#fromCurr').selectedIndex = document.querySelector('#toCurr').selectedIndex;
    document.querySelector('#toCurr').selectedIndex = tmp;
    convert(evt);
}

document.querySelector('#switchBtn').addEventListener('click',switchCurrencies);
document.querySelector('#convertBtn').addEventListener('click',convert);
document.querySelector('#amount').addEventListener('input',validateAmount);



getCurrencies();


