import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#9EC1A3",
		},
		secondary: {
			main: "#40798C",
		},
		background: {
			default: "#F4F8F2",
		},
		text: {
			primary: "#1b3036",
			secondary: "rgba(27,48,54,0.6)",
			disabled: "rgba(27,48,54,0.38)",
		},
		info: {
			main: "#579BB2",
		},
	},
});
