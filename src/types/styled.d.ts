import 'styled-components';
import { breakpoints, colors, fonts } from '../base';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: typeof colors;
		fonts: typeof fonts;
		breakpoints: typeof breakpoints;
	}
}
