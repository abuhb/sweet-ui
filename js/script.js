// Add Supporting JS Here.

// Biglist

function biglist() {
    document.getElementById("nhs-biglist-content").classList.toggle("nhs-show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("nhs-biglist-search");
    filter = input.value.toUpperCase();
    div = document.getElementById("nhs-biglist-filter");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

// Patient Banner

var acc = document.getElementsByClassName("pt-banner");
            var i;
            
            for (i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function() {
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                  panel.style.display = "none";
                } else {
                  panel.style.display = "block";
                }
              });
            }