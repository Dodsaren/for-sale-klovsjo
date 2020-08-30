window.onload = function () {
  var intervalHandler
  var counter = 0
  document.getElementById('open').addEventListener('click', function () {
    document.getElementById('lightbox').classList.remove('dn')
    document.getElementById('body').classList.add('disable-body-scroll')
    window.gtag('event', 'Open', {
      event_category: 'Lightbox image gallery',
    })
    intervalHandler = setInterval(function () {
      counter += 1
      window.gtag('event', 'Browsing', {
        event_category: 'Lightbox image gallery',
        value: counter,
      })
    }, 1000)
  })
  document.getElementById('close').addEventListener('click', function () {
    document.getElementById('lightbox').classList.add('dn')
    document.getElementById('body').classList.remove('disable-body-scroll')
    window.gtag('event', 'Close', {
      event_category: 'Lightbox image gallery',
    })
    clearInterval(intervalHandler)
    counter = 0
  })
}
