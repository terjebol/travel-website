import {APP_ROUTER_PROVIDERS} from "./routes";
import {bootstrap}    from "@angular/platform-browser-dynamic";
import {IndexComponent} from "./index/index";
import {HTTP_PROVIDERS} from "@angular/http";
import { AUTH_PROVIDERS } from 'angular2-jwt';

bootstrap(IndexComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS, AUTH_PROVIDERS]);
