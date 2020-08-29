window.onload = function () {
  document.getElementById('open').addEventListener('click', function () {
    document.getElementById('lightbox').classList.remove('dn')
    document.getElementById('body').classList.add('disable-body-scroll')
  })
  document.getElementById('close').addEventListener('click', function () {
    document.getElementById('lightbox').classList.add('dn')
    document.getElementById('body').classList.remove('disable-body-scroll')
  })
}
