import netlifyIdentity from 'netlify-identity-widget'

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  initialize(callback) {
      console.log('netlify init');
    window.netlifyIdentity = netlifyIdentity
    netlifyIdentity.on('init', (user) => {
      callback(user)
    })
    netlifyIdentity.init()
  },
  authenticate(callback) {
    netlifyIdentity.open()
    netlifyIdentity.on('login', (user) => {
        console.log('netlify on login');
        
      callback(user)
      netlifyIdentity.close()
    })
  },
  signout(callback) {
      console.log('netlify sign out');
      
      netlifyIdentity.logout()
      netlifyIdentity.on('logout', () => {
        console.log('netlify on logout');
        callback()
    })
  },
}

export default netlifyAuth