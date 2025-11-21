function copyCode() {
    const code = "WPDEALS";
    navigator.clipboard.writeText(code).then(() => {
        const tooltip = document.getElementById("tooltip");
        tooltip.classList.add("show-tooltip");
        setTimeout(() => {
            tooltip.classList.remove("show-tooltip");
        }, 2000);
    });
}