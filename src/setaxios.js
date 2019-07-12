import axios from 'axios'
import store from './store'
import router from './router'

//http全局拦截
//token要放在我们请求的header上面带回给后端

export default function setAxios() {
    //请求拦截
    axios.interceptors.request.use(
        config => {
            if (store.state.token) {
                config.headers.token = store.state.token
            }
            return config
        }
    )
    axios.interceptors.response.use(
        response => {
            if (response.status == 200) {
                const data = response.data
                if (data.code == -1) {
                    //登陆过期，清空vuex和localStorage
                    store.commit('settolen', '')
                    localStorage.removeItem('tolen')
                    router.replace({ path: '/login' })
                }
                return data
            }
            return response
        }
    )
}
