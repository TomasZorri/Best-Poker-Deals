function showCategory(category) {
    document.querySelectorAll('.category').forEach(div => div.classList.remove('active'));
    document.querySelector(`#${category}`).classList.add('active');
    
    document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
    document.querySelector(`button[onclick="showCategory('${category}')"]`).classList.add('active');
}