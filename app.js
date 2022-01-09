const NewYear = "1 Jan 2023";
const DaysEl = document.getElementById("days");
const HoursEl = document.getElementById("hours");
const MinutesEl = document.getElementById("mins");
const SecondesEl = document.getElementById("secodes");

function countDown() {
	const NewYearDate = new Date(NewYear);
	const CurrentDate = new Date();

	const TotalSecondes = (NewYearDate - CurrentDate) / 1000;

	const Days = Math.floor(TotalSecondes / 3600 / 24);
	const Hours = Math.floor(TotalSecondes / 3600) % 24;
	const Minutes = Math.floor(TotalSecondes / 60) % 60;
	const Secondes = Math.floor(TotalSecondes) % 60;

	DaysEl.innerHTML = Days;
	HoursEl.innerHTML = Hours;
	MinutesEl.innerHTML = Minutes;
	SecondesEl.innerHTML = Secondes;

	console.log(Days);
}
setInterval(countDown,1000)
countDown();
