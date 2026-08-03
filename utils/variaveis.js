const configLocal = JSON.parse(open('../config/config.local.js'))

export function pegarBaseURL() {
    return __ENV.BASE_URL || configLocal.baseUrl;   
}