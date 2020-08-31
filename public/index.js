window.onload = function () {
  var intervalHandler
  var counter = 0
  document.getElementById('open').addEventListener('click', function () {
    window.gtag('event', 'Open', {
      event_category: 'Lightbox image gallery',
    })
    document.getElementById('lightbox').classList.remove('dn')
    document.getElementById('body').classList.add('disable-body-scroll')
    intervalHandler = setInterval(function () {
      counter += 1
      window.gtag('event', 'Browsing', {
        event_category: 'Lightbox image gallery',
      })
    }, 1000)
  })
  document.getElementById('close').addEventListener('click', function () {
    document.getElementById('lightbox').classList.add('dn')
    document.getElementById('body').classList.remove('disable-body-scroll')
    window.gtag('event', 'Close', {
      event_category: 'Lightbox image gallery',
      value: counter,
    })
    clearInterval(intervalHandler)
    counter = 0
  })
}
