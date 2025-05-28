import type {RouteName} from "../routes/routes.ts";
import type {RouteLocationRaw} from "vue-router";

declare module 'vue-router' {
    interface RouterLinkProps {
        to?: string | (Omit<RouteLocationRaw, 'name'> & {name: RouteName});
    }
}