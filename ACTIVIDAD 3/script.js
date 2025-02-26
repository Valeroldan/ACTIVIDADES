function mostrarIframe(pagina) {
    iframe_elemente1 = document.getElementById("iframe1")
    iframe_elemente2 = document.getElementById("iframe2")

    if (pagina ==="paginaHorario") {
        iframe_elemente2.style.display = 'none'
        if (iframe_elemente1.style.display === 'none') {
            iframe_elemente1.style.display = 'inline'        
        }else{
            iframe_elemente1.style.display = 'none'
        }
    }

    if (pagina ==="otraPagina") {
        iframe_elemente1.style.display = 'none'
        if (iframe_elemente2.style.display === 'none') {
            iframe_elemente2.style.display = 'inline'        
        }else{
            iframe_elemente2.style.display = 'none'
        }
    }
}