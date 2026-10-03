const form = document.querySelector("form");


form.addEventListener("submit", function(e){

    e.preventDefault();


    alert("✅ تم تسجيل طلبك في أكاديمية أبطال المستقبل ⚽\nسنتواصل معكم قريباً");


    form.reset();

});