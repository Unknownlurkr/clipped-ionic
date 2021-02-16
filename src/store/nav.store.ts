
// save our state (isPanel open or not) 
export const navStore ={
    isNavOpen: false, 
    getNavStatus () {
        return this.isNavOpen;
      }
}

// We call toggleNav anywhere we need it in our app
export const mutations = {
    toggleNav() {
        navStore.isNavOpen = !navStore.isNavOpen
    }
};