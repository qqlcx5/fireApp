const key = 'USERS_KEY'
const userinfo = uni.getStorageSync(key);
 
 const state =  {
      user: userinfo ?  JSON.parse(userinfo) : null 
  }
	
const  mutations= {
    login(state, value) {
      state.user = value
      uni.setStorageSync(key, JSON.stringify(value));
    },
    loginout(state) {
      state.user = null
      uni.removeStorageSync(key);
    }
  }

 
export default
 {
	 state,
	 mutations
 }
