export const currency = (price) =>
	new Intl.NumberFormat("nl-NL", {
		style: "currency",
		currency: "ANG",
		useGrouping: true,
	}).format(price);
