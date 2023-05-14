import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";

const Header = () => {
	return (
		<Grid>
			<Typography component="h1" variant="h3">
				Tee Time to Cost
			</Typography>
		</Grid>
	);
};

export default Header;
