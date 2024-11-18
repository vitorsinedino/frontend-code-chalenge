console.log("TESTANDO IMPORTAÇÃO DE JS");

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var elem = document.querySelector('.carrossel');
      if (elem) {
        new Flickity(elem, {
          cellAlign: 'left',
          contain: true,
          pageDots: false,
          wrapAround: true
        });
      }
    }, 1000); //Adicionei um delay pra garantir que o slider carregue, assim como nos foi orientado via email
  });