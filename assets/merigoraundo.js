document.addEventListener("DOMContentLoaded", function() {
    var elem = document.querySelector('.merigoraundo');
    if (elem) {
      new Flickity(elem, {
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        wrapAround: true
      });
    } else {
      var observer = new MutationObserver(function(mutations, me) {
        var elem = document.querySelector('.merigoraundo');
        if (elem) {
          new Flickity(elem, {
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            wrapAround: true
          });
          me.disconnect();
          return;
        }
      });
  
      // Start the observer to watch for changes in the DOM :)
      observer.observe(document, {
        childList: true,
        subtree: true
      });
    }
  });