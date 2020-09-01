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

  var intervalHandler2
  var counter2 = 0
  document.getElementById('open2').addEventListener('click', function () {
    window.gtag('event', 'Open', {
      event_category: 'Lightbox blueprint gallery',
    })
    document.getElementById('lightbox2').classList.remove('dn')
    document.getElementById('body').classList.add('disable-body-scroll')
    intervalHandler2 = setInterval(function () {
      counter2 += 1
      window.gtag('event', 'Browsing', {
        event_category: 'Lightbox blueprint gallery',
      })
    }, 1000)
  })
  document.getElementById('close2').addEventListener('click', function () {
    document.getElementById('lightbox2').classList.add('dn')
    document.getElementById('body').classList.remove('disable-body-scroll')
    window.gtag('event', 'Close', {
      event_category: 'Lightbox blueprint gallery',
      value: counter2,
    })
    clearInterval(intervalHandler2)
    counter2 = 0
  })
}
