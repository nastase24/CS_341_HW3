function order(){
    var textarea = document.getElementById("requests");
    var word = 'vegan';
    var word2 = 'Vegan';
    var text = textarea.value;
    var form_section = document.getElementById("form_section");
    var order_summary = document.getElementById("order_summary");
    var plain = document.getElementById("plain");
    var cherry = document.getElementById("cherry");
    var chocolate = document.getElementById("chocolate");
    $(order_summary).append("Thank you! Your order has been placed! ");
    if(text.indexOf(word || word2) != -1){
        window.alert("I'm sorry, but cheese, *hmm hmm* CHEESE-cake is not a vegan product.");
    }else{
        $(form_section).hide();
        var quantity = document.getElementById("quantity");

        if($(plain).is(":checked")){
            $(order_summary).append("Your order details: Plain cheesecake x " + quantity.value);
        }
        if($(cherry).is(":checked")){
            $(order_summary).append("Your order details: Plain cheesecake x " + quantity.value);
        }
        if($(chocolate).is(":checked")){
            $(order_summary).append("Your order details: Chocolate cheesecake x " + quantity.value);
        }
        $(order_summary).append(" Notes: " + text);
        $(order_summary).show();
    }
}
$(".dropdown-content a").click(function() {
    var month_button = document.getElementById("month_button");
    $(month_button).text($(this).text());
});
