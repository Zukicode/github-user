const months: string[] = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
]

export const convertDate = (entryDate: string) => {
	const date: Date = new Date(entryDate)
	const year: number = date.getFullYear()
	const month: string = months[date.getMonth()]
	const day: number = date.getDate()

	return `Joined ${day} ${month} ${year}`
}
