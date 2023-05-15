import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme/theme";
import teeTimeCost from "./helpers/teeTimeCost";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/header/Header";
import InputForm from "./components/inputForm/InputForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={themeOptions}>
			<Header />
			{/* Body component */}
			<main>
				<InputForm />
				{/* Results component */}

				<table>
					<thead>
						<tr>
							<th>Time Between Groups</th>
							<th>Number of Groups per Day</th>
							<th>Cost per Golfer</th>
						</tr>
					</thead>
					<tbody>
						{teeTimeCost(45, "06:10 AM", "7:00 PM", "10").map((row) => {
							return (
								<tr key={row["New Time Between Groups"]}>
									<td>{row["New Time Between Groups"]}</td>
									<td>{row["Number of Groups per Day"]}</td>
									<td>{row["Cost Per Golfer"]}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</main>
		</ThemeProvider>
	</React.StrictMode>
);
