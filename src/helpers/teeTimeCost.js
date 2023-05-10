/**
@param {number} cost - The cost per individual for a tee time
@param {string} firstTime - the first tee time available in a day
@param {string} lastTime - the last tee time available in a day
@param {string} teeTimeDuration - the time between tee times

*/
const teeTimeCost = (cost, firstTime, lastTime, teeTimeDuration) => {
	const sanitizedTime = (time) => {
		const timeArr = time.split(" ").shift().split(":");
		if (time.includes("AM")) {
			const hr = timeArr[0] === "12" ? 0 : parseInt(timeArr[0]);
			const mn = parseInt(timeArr[1]);
			return hr * 60 + mn;
		}
		const hr = parseInt(timeArr[0]) + 12;
		const mn = parseInt(timeArr[1]);
		return hr * 60 + mn;
	};
	const totalMinutesofPlay = sanitizedTime(lastTime) - sanitizedTime(firstTime);
	const baseNumberOfGroups = Math.floor(totalMinutesofPlay / parseInt(teeTimeDuration));
	const moneyPerGroup = cost * 4;
	const baseMoneyEarned = baseNumberOfGroups * moneyPerGroup;
	const diffArr = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
	const changeTeeTimeDuration = (num) => {
		const newTeeTimeDuration = parseInt(teeTimeDuration) + num;
		const numberofGroups = Math.floor(totalMinutesofPlay / newTeeTimeDuration);
		const newCost = baseMoneyEarned / numberofGroups / 4;
		return { "New Time Between Groups": newTeeTimeDuration, "Number of Groups per Day": numberofGroups, "Cost Per Golfer": `$${newCost.toFixed(2)}` };
	};
	return diffArr.map((num) => changeTeeTimeDuration(num));
};

export default teeTimeCost;
