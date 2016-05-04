window.addEventListener('hashchange', () => window.location.reload(true))
window.addEventListener('load', () => {
  const ghUrl = window.location.toString().split('#')[1]
  router.go(ghUrl)
  if (router.isNoRoute()) {
    window.location = './404.html'
  }
})
const template = new Template()
const layout = new Layout()
