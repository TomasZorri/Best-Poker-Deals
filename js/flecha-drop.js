$(document).ready(function() {
    $('.toggle-item > a').click(function(event) {
        event.preventDefault(); // Prevent default action of the <a> tag
        var $parentLi = $(this).parent();
        var $arrowIcon = $(this).find('.arrow-icon');
        var $subcategoryList = $parentLi.find('.subcategory-list');

        // Toggle the display of the subcategory list
        $subcategoryList.slideToggle();

        // Toggle the rotation of the arrow icon
        $arrowIcon.toggleClass('rotated');
    });
});

/*document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('#filter-form input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            document.getElementById('filter-form').submit();
        });
    });
});*/

document.addEventListener("DOMContentLoaded", function () {
    const filterForm = document.getElementById("filter-form");
    const filterBtn = document.getElementById("filter-btn");
    const closeFilter = document.getElementById("close-filter");

    // Mostrar el filtro al hacer clic en el botón
    filterBtn.addEventListener("click", function () {
        filterForm.style.display = "block";
    });

    // Cerrar el filtro
    closeFilter.addEventListener("click", function () {
        filterForm.style.display = "none";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", function () {
            item.classList.toggle("active");
        });
    });
});