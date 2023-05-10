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
	console.log(Math.floor(totalMinutesofPlay / parseInt(teeTimeDuration)));
};

function App() {
	teeTimeCost(1, "12:30 AM", "8:00 PM", "12");
	return (
		<div className="App">
			<header className="App-header">
				<h1>Tee Time to Cost</h1>
			</header>
		</div>
	);
}

export default App;
