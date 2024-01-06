function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();






//SCRIPT OCULTA QUALQUER ITEM ABAIXO DA DIV "TABS" as

document.addEventListener('DOMContentLoaded', function () {
    // Obtém a referência para a div com a classe "tabs"
    var tabsDiv = document.querySelector('.tabs');

    // Percorre os elementos abaixo da div "tabs"
    var currentElement = tabsDiv.nextElementSibling;
    while (currentElement) {
        // Oculta o elemento
        currentElement.style.display = 'none';

        // Passa para o próximo elemento
        currentElement = currentElement.nextElementSibling;
    }
});




//SCRIPT BOTAO BUSCAR ATIVO
function toggleInput() {
    var input = document.getElementById("inputValor");
    var btnOK = document.getElementById("btnOK");
    var btnAtualizar = document.getElementById("btnAtualizar");

    if (input.style.display === "none") {
        input.style.display = "inline-block";
        btnOK.style.display = "inline-block";
        btnAtualizar.style.display = "none";
    } else {
        input.style.display = "none";
        btnOK.style.display = "none";
        btnAtualizar.style.display = "inline-block";
    }
}

function confirmInput() {
    var input = document.getElementById("inputValor");
    var btnOK = document.getElementById("btnOK");
    var btnAtualizar = document.getElementById("btnAtualizar");

    input.style.display = "none";
    btnOK.style.display = "none";
    btnAtualizar.style.display = "inline-block";
}

function checkEnter(event) {
    if (event.key === "Enter") {
        confirmInput();
    }
}
function toggleInput() {
    var input = document.getElementById("inputValor");
    var btnOK = document.getElementById("btnOK");
    var btnAtualizar = document.getElementById("btnAtualizar");

    if (input.style.display === "none") {
        input.style.display = "inline-block";
        btnOK.style.display = "inline-block";
        btnAtualizar.style.display = "none";
    } else {
        input.style.display = "none";
        btnOK.style.display = "none";
        btnAtualizar.style.display = "inline-block";
    }
}

function confirmInput() {
    var input = document.getElementById("inputValor");
    var btnOK = document.getElementById("btnOK");
    var btnAtualizar = document.getElementById("btnAtualizar");

    input.style.display = "none";
    btnOK.style.display = "none";
    btnAtualizar.style.display = "inline-block";
}

function checkEnter(event) {
    if (event.key === "Enter") {
        confirmInput();
    }
}




// Obtém referências para os elementos do DOM
var inputValor = document.getElementById('inputValor');
var btnAtualizar = document.getElementById('btnAtualizar');
var iframe = document.getElementById('tradingview_29c72-selector');

// Adiciona um ouvinte de evento para a tecla Enter pressionada
inputValor.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        atualizarIframe();
    }
});

// Adiciona um ouvinte de evento para o botão "Atualizar" clicado
btnAtualizar.addEventListener('click', function () {
    atualizarIframe();
});

// Função para atualizar o atributo "src" do iframe
function atualizarIframe() {
    var novoValor = inputValor.value;

    // Atualiza o atributo "src" do iframe com o novo valor
    iframe.src = iframe.src.replace(/symbol=[^&]*/, 'symbol=' + novoValor);
}








//NASDAQ
new TradingView.widget(
    {
        "autosize": true,
        "symbol": "NASDAQ",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "br",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_f9060"
    }
);

//IBOVESPA
new TradingView.widget(
    {
        "z-index": 1,
        "autosize": true,
        "symbol": "INDEX:IBOV",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "br",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_673aa"
    }
);
//RESUMO
new TradingView.widget({
    "container_id": "tv-adv-widget-home",
    "width": "100%",
    "height": "450px",
    "symbol": get_param("symbol", get_param("tvwidgetsymbol", "IBOV")),
    "interval": "D",
    "timezone": "exchange",
    "theme": "dark",
    "style": "3",
    "toolbar_bg": "#f1f3f6",
    "withdateranges": true,
    "hide_side_toolbar": false,
    "details": false,
    "allow_symbol_change": true,
    "hideideas": true,
    "widgetbar_width": 300,
    "show_popup_button": false,
    "popup_width": "100%",
    "popup_height": "450px",
    "editablewatchlist": false,
    "customer": "BMFBOVESPA:XPML11",
    "locale": get_lang() == 'pt' ? 'br' : get_lang()
});




//SCRIPT INPUT CODIGO INDICE
// Obtém referências para os elementos do DOM
var inputValor = document.getElementById('inputValor');
var iframe = document.getElementById('tradingview_29c72');

// Adiciona um ouvinte de evento para a tecla Enter pressionada
inputValor.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        atualizarIframe();
    }
});

// Adiciona um ouvinte de evento para o botão "Ok" clicado
inputValor.addEventListener('change', function () {
    atualizarIframe();
});

// Função para atualizar o atributo "src" do iframe
function atualizarIframe() {
    var novoValor = inputValor.value;

    // Atualiza o atributo "src" do iframe com o novo valor
    iframe.src = iframe.src.replace(/symbol=[^&]*/, 'symbol=' + novoValor);
}

