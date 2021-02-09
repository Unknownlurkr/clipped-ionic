const TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

const TokenService = {

    /**
     * For now, the tokens will save to the localStorage.
     * For production, you can use the Ionic secure storage native library.
     */

    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    },

    saveToken(accessToken: string) {
        localStorage.setItem(TOKEN_KEY, accessToken);
    },

    removeToken() {
        localStorage.removeItem(TOKEN_KEY);
    },

    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN_KEY);
    },

    saveRefreshToken(refreshToken: string) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    },

    removeRefreshToken() {
        localStorage.removeItem(REFRESH_TOKEN_KEY);
    }
}

export {TokenService};