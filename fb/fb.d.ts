/*
  FBSDK type definition file
*/

interface FBInitParams {
    appId?: string;
    authResponse?: string;
    cookie?: boolean;
    frictionlessRequests?: boolean;
    hideFlashCallback?: Function;
    logging?: boolean;
    status?: boolean;
    version?: string;
    xfbml?: boolean;
}
interface ShareDialogParams {
    method: string;
    href: string;
}
interface PageTabDialogParams {
    method: string;
    app_id: string;
    redirect_uri?: string;
    display?: any;
}
interface RequestsDialogParams {
    method: string;
    app_id: string;
    redirect_uri?: string;
    to?: string;
    message: string;
    action_type?: string;
    object_id?: string;
    filters: string | {
        name: string;
        user_ids: string[];
    };
    suggestions?: string[];
    exclude_ids?: string[];
    max_recipients?: number;
    data?: string;
    title?: string;
}
interface SendDialogParams {
    method: string;
    app_id: string;
    redirect_uri?: string;
    display?: any;
    to?: string;
    link: string;
}
interface PayDialogParams {
    method: string;
    action: string;
    product: string;
    quantity?: number;
    quantity_min?: number;
    quantity_max?: number;
    request_id?: string;
    pricepoint_id?: string;
    test_currency?: string;
}
declare type FBUIParams = ShareDialogParams | PageTabDialogParams | RequestsDialogParams | SendDialogParams | PayDialogParams;
interface FBLoginOptions {
    auth_type?: string;
    scope?: string;
    return_scopes?: boolean;
    enable_profile_selector?: boolean;
    profile_selector_ids?: string;
}
interface FBSDKEvents {
    subscribe(event: string, callback: (fbResponseObject: Object) => any): void;
    unsubscribe(event: string, callback: (fbResponseObject: Object) => any): void;
}
interface FBSDKXFBML {
    parse(ParseElement?: Element): void;
    parse(ParseElement?: HTMLElement): void;
}
interface FBSDKCanvasPrefetcher {
    addStaticResource(res: string): void;
    setCollectionMode(option: string): void;
}
interface FBSDKCanvasSize {
    height?: Number;
    width?: Number;
}
interface FBSDKCanvasDoneLoading {
    time_delta_ms: Number;
}
interface FBSDKCanvas {
    Prefetcher: FBSDKCanvasPrefetcher;
    hideFlashElement(element: Element): void;
    hideFlashElement(element: HTMLElement): void;
    showFlashElement(element: Element): void;
    showFlashElement(element: HTMLElement): void;
    scrollTo(x: Number, y: Number): void;
    setAutoGrow(stopTimer: boolean): void;
    setAutoGrow(diffInterval: Number): void;
    setAutoGrow(stopTimer: boolean, diffInterval: Number): void;
    setSize(canvasSizeOptions: FBSDKCanvasSize): void;
    setUrlHandler(handler?: Function): string;
    setDoneLoading(handler?: Function): FBSDKCanvasDoneLoading;
    startTimer(): void;
    stopTimer(handler?: (fbResponseObject: Object) => any): void;
}
interface FBResponseObject {
    error: any;
}
interface FBSDK {
    init(fbInitObject: FBInitParams): void;
    api(path: string, method: string, callback: (fbResponseObject: Object) => any): Object;
    api(path: string, params: Object, callback: (fbResponseObject: FBResponseObject) => any): Object;
    api(path: string, method: string, params: Object, callback: (fbResponseObject: Object) => any): Object;
    ui(params: FBUIParams, handler: (fbResponseObject: Object) => any): void;
    getLoginStatus(handler: Function, force?: Boolean): void;
    login(handler: (fbResponseObject: Object) => any, params?: FBLoginOptions): void;
    logout(handler: (fbResponseObject: Object) => any): void;
    getAuthResponse(): Object;
    Event: FBSDKEvents;
    XFBML: FBSDKXFBML;
    Canvas: FBSDKCanvas;
}
interface Window {
    fbAsyncInit(): any;
}
declare module "FB" {
    export = FB;
}
declare var FB: FBSDK;
