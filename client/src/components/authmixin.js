import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data: () => ({
    currentUser: firebase.auth().currentUser,
    isSignedIn: !!firebase.auth().currentUser || null
  }),
  created () {
    this.detachAuthStateChanged = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.currentUser = {
          ...user,
          get name () { return this.displayName },
          get photo () { return this.photoURL }
        }
        this.isSignedIn = true
      } else {
        this.currentUser = null
        this.isSignedIn = false
      }
    })
  },
  beforeDestroy () {
    this.detachAuthStateChanged()
  },
  computed: {
    currUser () {
      return this.currentUser
    }
  },
  methods: {
    async signIn () {
      const provider = new firebase.auth.GoogleAuthProvider()
      try {
        return await firebase.auth().signInWithPopup(provider)
      } catch (err) {
        // handle sign in error
        alert(err)
        throw err
      }
    },
    async signOut () {
      try {
        return await firebase.auth().signOut()
      } catch (err) {
        // handle sign out error
        alert(err)
        throw err
      }
    }
  }
}
