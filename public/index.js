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

  document.getElementById('mail-share').addEventListener('click', function () {
    window.gtag('event', 'Share', {
      event_category: 'Email',
    })
  })

  document.getElementById('fb').addEventListener('click', function (e) {
    e.preventDefault()
    FB.ui({
      method: 'share',
      href: 'https://tillsalu-klovsjo.se',
    })
    window.gtag('event', 'Share', {
      event_category: 'Facebook',
    })
  })

  document.getElementById('copy').addEventListener('click', function (e) {
    e.preventDefault()
    var copyfdBck = document.getElementById('copied')
    copyfdBck.classList.remove('dn')
    setTimeout(function () {
      copyfdBck.classList.add('dn')
    }, 1000)
    copyTextToClipboard('https://tillsalu-klövsjö.se')
    window.gtag('event', 'Share', {
      event_category: 'Copy link',
    })
  })

  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement('textarea')
    textArea.value = text

    // Avoid scrolling to bottom
    textArea.style.top = '0'
    textArea.style.left = '0'
    textArea.style.position = 'fixed'

    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    try {
      var successful = document.execCommand('copy')
      var msg = successful ? 'successful' : 'unsuccessful'
      console.log('Fallback: Copying text command was ' + msg)
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err)
    }

    document.body.removeChild(textArea)
  }
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text)
      return
    }
    navigator.clipboard.writeText(text)
  }
}
