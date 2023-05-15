import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TextField, Paper, InputAdornment } from "@mui/material";

const InputForm = (props) => {
	return (
		<Grid container xs={10} m="auto" component={Paper} sx={{ justifyContent: "center" }}>
			<TextField
				id="tee-time-cost"
				label="Tee Time Cost"
				margin="dense"
				InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
				type="number"
			/>
			<TextField
				id="time-between"
				label="Time Between Tee Times"
				margin="dense"
				InputProps={{ endAdornment: <InputAdornment position="end">min</InputAdornment>, shrink: true }}
				type="number"
			/>
			<TextField id="first-tee-time" label="First Tee Time" margin="dense" InputLabelProps={{ shrink: true }} type="time" />
			<TextField id="last-tee-time" label="Last Tee Time" margin="dense" InputLabelProps={{ shrink: true }} type="time" />
		</Grid>
	);
};

InputForm.propTypes = {};

export default InputForm;
