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

//NASDAQ
new TradingView.widget(
    {
        "autosize": true,
        "symbol": "NASDAQ",
        "interval": "1",
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
        "interval": "1",
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
    "interval": "1",
    "timezone": "exchange",
    "theme": "White",
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
