import 'vue-router';

type MobileLayout = `L=main` | `L=popup` | `L=side` | `L=search` | `L=sign` | `L=lowbtn` | `L=frame` | `L=error`;
type MobileTransition = `left` | `right` | `top` | `bottom`;

declare module 'vue-router' {
	interface RouteMeta {
		layouts?: MobileLayout[];
		transition?: MobileTransition;
	}
}