import "./App.css";
import teeTimeCost from "./helpers/teeTimeCost";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Tee Time to Cost</h1>
				<p>All costs are assumed walking</p>
			</header>
			<main>
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
		</div>
	);
}

export default App;
