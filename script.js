const amountInput = document.getElementById("amount");
const result = document.getElementById("result");
const rateElement = document.getElementById("rate");
const dateElement = document.getElementById("date");
const conversionLabel = document.getElementById("conversion-label");
const fromSymbol = document.getElementById("from-symbol");

const fromCurrencySelect =
    document.getElementById("from-currency");

const toCurrencySelect =
    document.getElementById("to-currency");

const fromFlag =
    document.getElementById("from-flag");

const toFlag =
    document.getElementById("to-flag");

const swapButton =
    document.getElementById("swap");

const flags = {
    USD: "https://flagcdn.com/w40/us.png",
    BRL: "https://flagcdn.com/w40/br.png",
    EUR: "https://flagcdn.com/w40/eu.png",
    GBP: "https://flagcdn.com/w40/gb.png",
    JPY: "https://flagcdn.com/w40/jp.png"
};

const flagNames = {
    USD: "Estados Unidos",
    BRL: "Brasil",
    EUR: "União Europeia",
    GBP: "Reino Unido",
    JPY: "Japão"
};

const currencySymbols = {
    USD: "US$",
    BRL: "R$",
    EUR: "€",
    GBP: "£",
    JPY: "¥"
};

function parseAmount(value) {
    if (!value.trim()) return 0;

    const normalized = value
        .replace(/\./g, "")
        .replace(",", ".");

    return Number(normalized);
}

function formatCurrency(value, currency) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency
    });
}

function formatDate(date) {
    const [year, month, day] = date.split("-");

    return `${day}/${month}/${year}`;
}

function updateFlags() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    fromFlag.src = flags[fromCurrency];
    fromFlag.alt = flagNames[fromCurrency];

    toFlag.src = flags[toCurrency];
    toFlag.alt = flagNames[toCurrency];

    fromSymbol.textContent = fromCurrency;
}

function updateConversionText(
    amount,
    fromCurrency,
    toCurrency
) {
    const formattedAmount =
        amount.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

    conversionLabel.textContent =
        `${currencySymbols[fromCurrency]} ${formattedAmount} para ${toCurrency}`;
}

async function convertCurrency() {
    const amount = parseAmount(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (amountInput.value.trim() === "") {
        updateConversionText(0, fromCurrency, toCurrency);
        result.textContent = "R$ 0,00";
        rateElement.textContent = `1 ${fromCurrency} = ... ${toCurrency}`;
        dateElement.textContent = "Digite um valor";
        return;
    }

    if (isNaN(amount) || amount < 0) {
        result.textContent = "Valor inválido";
        return;
    }

    updateConversionText(
        amount,
        fromCurrency,
        toCurrency
    );

    if (fromCurrency === toCurrency) {
        result.textContent =
            formatCurrency(amount, toCurrency);

        rateElement.textContent =
            `1 ${fromCurrency} = 1,0000 ${toCurrency}`;

        dateElement.textContent =
            "Mesma moeda";

        return;
    }

    result.textContent = "Carregando...";
    rateElement.textContent = "Buscando cotação...";
    dateElement.textContent = "Atualizando";

    try {
        const response = await fetch(
            `https://api.frankfurter.dev/v2/rate/${fromCurrency.toLowerCase()}/${toCurrency.toLowerCase()}`
        );

        if (!response.ok) {
            throw new Error("Erro ao buscar cotação");
        }

        const data = await response.json();

        const rate = data.rate;
        const converted = amount * rate;

        result.textContent =
            formatCurrency(
                converted,
                toCurrency
            );

        rateElement.textContent =
            `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;

        dateElement.textContent =
            `cotação ${formatDate(data.date)} · BCE`;

    } catch (error) {
        console.error(error);

        result.textContent =
            "Não foi possível obter a cotação.";

        rateElement.textContent = "";

        dateElement.textContent =
            "Verifique sua conexão e tente novamente.";
    }
}

fromCurrencySelect.addEventListener(
    "change",
    () => {
        updateFlags();
        convertCurrency();
    }
);

toCurrencySelect.addEventListener(
    "change",
    () => {
        updateFlags();
        convertCurrency();
    }
);

swapButton.addEventListener(
    "click",
    () => {
        const currentFrom =
            fromCurrencySelect.value;

        fromCurrencySelect.value =
            toCurrencySelect.value;

        toCurrencySelect.value =
            currentFrom;

        updateFlags();
        convertCurrency();
    }
);

amountInput.addEventListener(
    "input",
    convertCurrency
);

updateFlags();
convertCurrency();
