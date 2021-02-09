import ApiService from "./api.service";
import { TokenService } from "./token.service";
import { AxiosRequestConfig } from "axios";
import qs from "qs";

class AuthenticationError extends Error {
    errorCode: any;
    constructor(errorCode: any, message: string | undefined) {
        super(message);
        this.name = this.constructor.name;
        if (message != null) {
            this.message = message;
        }
        this.errorCode = errorCode;
    }
}


/**
 * Inside that main constant, add an asynchronous function to request the authentication token to the OAuth2 server.
 * The request contains Authorization headers with the encrypted OAuth2 client id and secret values.
 * The request body using URL encoded form and the content of the body form is a stringified JSON object. 
 * The response from the server are a user ID, access token, refresh token, and their expiration date. 
 * The access token and refresh token will save to the local storage. 
 * Also, the HTTP interceptor activated to catch the 401 error status.
 */

const AuthService = {

    signIn: async function(signInData: any) {
        const requestData: AxiosRequestConfig = {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: 'Basic ' + btoa(process.env.VUE_APP_CLIENT_ID + ':' + process.env.VUE_APP_CLIENT_SECRET)
            },
            url: "/oauth/token",
            data: qs.stringify({
                "grant_type": "password",
                username: signInData.username,
                password: signInData.password
            })
        };

        try {
            const response = await ApiService.customRequest(requestData);
            TokenService.saveToken(response.data.access_token);
            TokenService.saveRefreshToken(response.data.refresh_token);
            ApiService.setHeader();

            ApiService.mount401Interceptor();

            return response.data.access_token;
        } catch (error) {
            error.catchError(error);
        }
    },
    refreshToken: async function() {
        const refreshToken = TokenService.getRefreshToken();
        const requestData: AxiosRequestConfig = {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: 'Basic ' + btoa(process.env.VUE_APP_CLIENT_ID + ':' + process.env.VUE_APP_CLIENT_SECRET)
            },
            url: "/oauth/token",
            data: qs.stringify({
                "grant_type": "refresh_token",
                refreshToken: refreshToken
            })
        };
    },
    signOut() {
        TokenService.removeToken();
        TokenService.removeRefreshToken();
        ApiService.removeHeader();
        ApiService.unmount401Interceptor();
    },
    signup: async function(email: any, password: any, name: any) {
        const signupData: AxiosRequestConfig = {
            method: "post",
            headers: { "Content-Type": "application/json" },
            url: "/oauth/signup",
            data: {
                email: email,
                password: password,
                name: name
            }
        };

        try {
            return await ApiService.customRequest(signupData);
        } catch (error) {
            error.catchError(error);
        }
    },

    catchError: function(error: any) {
        let status;
        let description;

        if (error.response === undefined) {
            status = error.message;
            description = error.message;
        } else {
            status = error.response.status;
            description = error.response.data.error_description;
        }

        throw new AuthenticationError(status, description);
    }
    
}

export { AuthService, AuthenticationError };