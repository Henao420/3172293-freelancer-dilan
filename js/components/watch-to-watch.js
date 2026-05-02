document.addEventListener("DOMContentLoaded", function() {
    const watchElement = document.querySelector(".watch-container"); 

    if (!watchElement) return;
        
        fetch("/views/components/watch-to-watch.html")
        
            .then(response => response.text())

            .then(data => {
                watchElement.innerHTML = data;
                
        })
            .catch(error => console.log("Error cargando esta seccion"))
})