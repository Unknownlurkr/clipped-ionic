import axios, { AxiosRequestConfig } from 'axios';
import  store  from '@/store/index';
import { TokenService } from '@/services/token.service';
import { loadingController } from "@ionic/vue";

const ApiService = {
    _requestInterceptor: 0,
    _401Interceptor: 0,
    
    init(baseURL: string | undefined) {
        axios.defaults.baseURL = baseURL;
    },

    setHeader() {
        axios.defaults.headers.common [
            "Authorization"
        ] = `Bearer ${TokenService.getToken()}`;
    },

    removeHeader() {
        axios.defaults.headers.common = {};
    },

    get(resource: string) {
        return axios.get(resource);
    },
    
   post(resource: string, data: any) {
       return axios.post(resource, data);
   },

   put(resource: string, data: any) {
       return axios.put(resource, data);
   },
   
   delete(resource: string){
       return axios.delete(resource);
   },
   customRequest(data: AxiosRequestConfig) {
       return axios(data);
   },

   /**
    * Axios interceptors are built-in functions in Axios that calls for every request or response.
    * Axios interceptors can be used in every request before it is sent or to transform the response
    * before being returned to Axios. In simplest words, you can think of interceptors in Axios as
    * middleware in Express. There are two types of Axios interceptors, request interceptors and 
    * response interceptors. The best way to get started with Axios interceptors is 
    * to use console.log()in every HTTP request.
    */

   mountRequestInterceptor() {
       this._requestInterceptor = axios.interceptors.request.use(async config => {
        console.log(`${config.method} ${config.url}`);
        const loading = await loadingController.create({
            message: "Please wait..."
        });
        await loading.present();
      
        return config;
       
       },error => {
       // Do something with request error
       return Promise.reject(error);
       });
   },

   mount401Interceptor() {
       this._401Interceptor = axios.interceptors.response.use(
           response => {
               // Do something before response is sent
               loadingController.dismiss().then(r => console.log(r));
            
       return response;
       },async error => {
       // Do something with response error
       loadingController.dismiss().then(r => console.log(r));
       if(error.request.status === 401) {
           if(error.config.url.includes("oauth/token")){
               await store.dispatch("auth/signOut");
               throw error;
           }
       } else{
           try{
               await store.dispatch("auth/refreshToken");
               return this.customRequest({
                   method: error.config.method,
                   url: error.config.url,
                   data: error.config.data
               });
           } catch(e){
               throw error;
           }
       }
       return Promise.reject(error);
       });
   },
   unmount401Interceptor() {
       axios.interceptors.response.eject(this._401Interceptor);
   }
}

export default ApiService;