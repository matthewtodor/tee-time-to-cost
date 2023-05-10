import "./App.css";

/**
@param {number} cost - The cost per individual for a tee time
@param {string} firstTime - the first tee time available in a day
@param {string} lastTime - the last tee time available in a day
@param {string} teeTimeDuration - the time between tee times
*/
const teeTimeCost = (cost, firstTime, lastTime, teeTimeDuration) => {
	const sanitizedFirstTime = () => {
		if (firstTime.includes("AM")) {
			const timeArr = firstTime.split(" ").shift().split(":");
			let hr = parseInt(timeArr[0]);
			if (hr === 12) {
				hr = hr - 12;
			}
			const mn = parseInt(timeArr[1]);
			const hrToMn = hr * 60 + mn;
			return hrToMn;
		}
		const timeArr = firstTime.split(" ").shift().split(":");
		const hr = parseInt(timeArr[0]) + 12;
		const mn = parseInt(timeArr[1]);
		const hrToMn = hr * 60 + mn;
		return hrToMn;
	};
	const sanitizedLastTime = () => {
		if (lastTime.includes("AM")) {
			const timeArr = lastTime.split(" ").shift().split(":");
			let hr = parseInt(timeArr[0]);
			if (hr === 12) {
				hr = hr - 12;
			}
			const mn = parseInt(timeArr[1]);
			const hrToMn = hr * 60 + mn;
			return hrToMn;
		}
		const timeArr = lastTime.split(" ").shift().split(":");
		const hr = parseInt(timeArr[0]) + 12;
		const mn = parseInt(timeArr[1]);
		const hrToMn = hr * 60 + mn;
		return hrToMn;
	};
	const totalMinutesofPlay = sanitizedLastTime() - sanitizedFirstTime();
	const baseNumberOfGroups = Math.floor(totalMinutesofPlay / parseInt(teeTimeDuration));
	const moneyPerGroup = cost * 4;
	const baseMoneyEarned = baseNumberOfGroups * moneyPerGroup;

	const arr = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
	const changeTeeTimeDuration = (num) => {
		const newTeeTimeDuration = parseInt(teeTimeDuration) + num;
		const numberofGroups = Math.floor(totalMinutesofPlay / newTeeTimeDuration);
		const newCost = baseMoneyEarned / numberofGroups / 4;
		return { "New Time Between Groups": newTeeTimeDuration, "Number of Groups per Day": numberofGroups, "Cost Per Golfer": `$${newCost.toFixed(2)}` };
	};

	return arr.map((num) => changeTeeTimeDuration(num));
};

function App() {
	console.log(teeTimeCost(45, "06:10 AM", "7:00 PM", "10"));
	return (
		<div className="App">
			<header className="App-header">
				<h1>Tee Time to Cost</h1>
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
