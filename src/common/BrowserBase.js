class BrowserBase {
    // This class gets proxied when accessed as webapp
    // When new method is added or method name is changed in this class, this list has to be updated with the method name
    static availableMethods = "getCurrentUrl,getCurrentTab,hasPermission,requestPermission,getPermissionObj,"
        + "replaceTabUrl,getAppInfo,getAuthToken,getRedirectUrl,getLaunchUrl," // getStorage,hasUpdates,openTab is not required as this has to be implemented by proxy
        + "launchWebAuthFlow,removeAuthTokken,getStoreUrl,extractAccessToken";
    async requestPermission() {
        return true;
    }

    async hasPermission() {
        return true;
    }

    async hasUpdates() {
        return false;
    }

    async getLaunchUrl() { return ''; }
}

export default BrowserBase;