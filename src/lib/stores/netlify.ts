import netlifyIdentity from 'netlify-identity-widget'

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  initialize(callback) {
    window.netlifyIdentity = netlifyIdentity
    netlifyIdentity.on('init', (user) => {
      callback(user)
    })
    netlifyIdentity.init()
  },
  authenticate(callback) {
    this.isAuthenticated = true
    netlifyIdentity.open()
    netlifyIdentity.on('login', (user) => {
        console.log('netlify on login');
        
      this.user = user
      callback(user)
      netlifyIdentity.close()
    })
  },
  signout(callback) {
      console.log('netlify sign out');
      
      this.isAuthenticated = false
      netlifyIdentity.logout()
      netlifyIdentity.on('logout', () => {
        console.log('netlify on logout');
      this.user = null
      callback()
    })
  },
}

export default netlifyAuth