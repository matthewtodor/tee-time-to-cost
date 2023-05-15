import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TextField, Paper, InputAdornment, MenuItem } from "@mui/material";

const times = [
	{
		value: 6,
		label: "6 min",
	},
	{
		value: 7,
		label: "7 min",
	},
	{
		value: 8,
		label: "8 min",
	},
	{
		value: 9,
		label: "9 min",
	},
	{
		value: 10,
		label: "10 min",
	},
	{
		value: 11,
		label: "11 min",
	},
	{
		value: 12,
		label: "12 min",
	},
	{
		value: 13,
		label: "13 min",
	},
	{
		value: 14,
		label: "14 min",
	},
	{
		value: 15,
		label: "15 min",
	},
	{
		value: 16,
		label: "16 min",
	},
];

const InputForm = (props) => {
	return (
		<Grid container xs={10} m="auto" component={Paper} sx={{ justifyContent: "center" }}>
			<Grid component="form" xs={12}>
				<TextField
					id="tee-time-cost"
					label="Tee Time Cost"
					margin="dense"
					InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
					type="number"
					sx={{ mx: "auto" }}
					helperText="Cost per golfer"
				/>
				<TextField id="time-between" select label="Time Between Tee Times" margin="dense" defaultValue={10}>
					{times.map((time) => (
						<MenuItem key={time.value} value={time.value}>
							{time.label}
						</MenuItem>
					))}
				</TextField>
				<TextField
					id="first-tee-time"
					label="First Tee Time"
					margin="dense"
					InputLabelProps={{ shrink: true }}
					type="time"
					helperText="First tee time of the day"
				/>
				<TextField
					id="last-tee-time"
					label="Last Tee Time"
					margin="dense"
					InputLabelProps={{ shrink: true }}
					type="time"
					helperText="Last tee time of the day"
				/>
			</Grid>
		</Grid>
	);
};

InputForm.propTypes = {};

export default InputForm;
