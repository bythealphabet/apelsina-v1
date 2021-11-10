import React from "react";
export const categoriesList = [
	{
		name: "cars",
		fullName: "cars, suv's, pickup trucks, sport cars, auto parts",
		img: cars,
	},
	{
		name: "housing",
		fullName:
			"houses for sale / rent, apparments for sale / rent, lots, bed and breakfast",
		img: housing,
	},
	// { name: "free stuff", fullName: "gratis, freebies, zero cost, for free" },
	{
		name: "electronics",
		fullName:
			"phones, laptops computers, desktop computers, tv's, appliances, video game consoles",
		img: electronics,
	},
	{
		name: "motorcycles",
		fullName: "dirt bikes, sport bikes, motor quades, motorcycles parts",
		img: motorcycles,
	},
	{
		name: "boats",
		fullName:
			"sail boats, rubber boats, motor boats, lobster boats, boat parts",
		img: boats,
	},
	{
		name: "sports",
		fullName: "outdoorsports, indoorsports, water sports",
		img: sports,
	},
	{ name: "furniture", fullName: " furniture, plants", img: furniture },
	{
		name: "books and movies",
		fullName: "ebooks, hardcover books, tv-series, movies,  school books",
		img: booksAndMovies,
	},
	{
		name: "games",
		fullName: "videogames, boardgames, kids games",
		img: games,
	},
	{
		name: "music",
		fullName: "music instruments, drums, guitar, pianos, cd's",
		img: music,
	},
	{ name: "fashon", fullName: "men clothing, women clothing", img: fashon },
	{
		name: "baby",
		fullName:
			"baby clothing, kids clothing, car seats, baby toys, kids toys,",
		img: baby,
	},
	{
		name: "other",
		fullName:
			"miscellaneous, sometimes these are difficult to find or simply wierd stuff",
		img: other,
	},
	{
		name: "jobs",
		fullName: "freelancers, sales, job opportunities",
		img: jobs,
	},
];


export function baby(active) {
	return (
		<svg
			width="45"
			height="45"
			viewBox="0 0 45 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="baby">
				<g clipPath="url(#clip0)">
					<g id="Group">
						<g id="Group_2">
							<path
								id="Vector"
								d="M30.5265 16.503V13.1357C30.5265 11.8694 29.5503 10.8274 28.311 10.7213C28.0624 9.00582 27.0738 7.49199 25.5605 6.56658C25.557 6.56447 25.5496 6.55982 25.5474 6.5469C25.546 6.53811 25.5481 6.53556 25.5503 6.53283C26.2172 5.73716 26.5429 4.72571 26.4678 3.68491C26.3258 1.72538 24.7407 0.145545 22.7805 0.0102814C21.6643 -0.0664473 20.6002 0.309637 19.7855 1.07024C18.9818 1.82022 18.5209 2.88062 18.5209 3.97943C18.5209 4.91002 18.8491 5.81503 19.4448 6.528C19.4462 6.52967 19.4481 6.53195 19.4466 6.5418C19.4452 6.55024 19.4403 6.56597 19.4232 6.57652C17.9192 7.50271 16.9363 9.01276 16.6886 10.7215C15.4492 10.8276 14.4729 11.8697 14.4729 13.136V16.5033C13.0054 16.7599 11.8862 18.0424 11.8862 19.5822V22.0181C11.8862 22.4405 12.2287 22.7831 12.6513 22.7831C13.074 22.7831 13.4164 22.4406 13.4164 22.0181V19.5822C13.4164 18.702 14.1326 17.9859 15.0128 17.9859H15.2379H29.7613H29.9865C30.8667 17.9859 31.5828 18.7021 31.5828 19.5822V41.8741C31.5828 42.7543 30.8666 43.4704 29.9865 43.4704H15.0129C14.1326 43.4704 13.4165 42.7542 13.4165 41.8741V24.568C13.4165 24.1455 13.0741 23.8029 12.6514 23.8029C12.2287 23.8029 11.8863 24.1454 11.8863 24.568V41.8738C11.8863 43.5978 13.2889 45.0004 15.0129 45.0004H29.9865C31.7104 45.0004 33.113 43.5977 33.113 41.8738V19.5819C33.1131 18.0421 31.9939 16.7597 30.5265 16.503ZM20.2256 7.87914C20.6165 7.63841 20.8829 7.24053 20.9568 6.78754C21.0292 6.34264 20.9062 5.89044 20.6191 5.5467C20.2528 5.10839 20.0512 4.55169 20.0512 3.97917C20.0512 3.293 20.3276 2.6572 20.8296 2.18865C21.331 1.72064 21.9871 1.48922 22.6752 1.53668C23.8802 1.61983 24.8545 2.59076 24.9418 3.79521C24.9882 4.43734 24.788 5.06057 24.3779 5.54995C24.0887 5.89492 23.9646 6.34853 24.0376 6.79396C24.111 7.2422 24.3752 7.63516 24.7623 7.87194C25.8129 8.51433 26.5212 9.53975 26.7566 10.7116H18.2432C18.4779 9.5445 19.1819 8.52189 20.2256 7.87914ZM28.9964 16.4554H16.0031V13.1357C16.0031 12.6428 16.4042 12.2419 16.8971 12.2419H28.1026C28.5954 12.2419 28.9965 12.6429 28.9965 13.1357V16.4554H28.9964Z"
								fill={`${active ? "#495a7b" : null}`}
							/>
						</g>
					</g>
					<g id="Group_3">
						<g id="Group_4">
							<path
								className="baby"
								id="Vector_2"
								d="M25.2314 25.1555C24.1273 25.1555 23.1411 25.7413 22.4998 26.654C21.8584 25.7411 20.8722 25.1555 19.7681 25.1555C17.4634 25.1555 15.5884 27.3023 15.5884 29.9409C15.5884 33.0967 19.1239 36.0239 22.1515 37.5717C22.2608 37.6276 22.3802 37.6555 22.4998 37.6555C22.6193 37.6555 22.7387 37.6276 22.848 37.5717C24.0307 36.9671 25.1704 36.2188 26.1439 35.4077C26.4686 35.1373 26.5123 34.6548 26.2419 34.3302C25.9715 34.0055 25.4888 33.9617 25.1644 34.2322C24.3719 34.8924 23.4568 35.5079 22.4989 36.0265C18.7859 34.0325 17.1185 31.5534 17.1185 29.941C17.1185 28.1461 18.307 26.6858 19.768 26.6858C20.8524 26.6858 21.7346 27.7854 21.7346 29.1369C21.7346 29.5594 22.077 29.902 22.4997 29.902C22.9223 29.902 23.2648 29.5594 23.2648 29.1369C23.2648 27.7852 24.1469 26.6858 25.2313 26.6858C26.6922 26.6858 27.8809 28.1461 27.8809 29.941C27.8809 30.8248 27.4591 31.7822 26.6271 32.7866C26.3576 33.1121 26.4028 33.5944 26.7283 33.8639C27.0536 34.1334 27.5359 34.0881 27.8057 33.7628C28.8709 32.4767 29.411 31.1908 29.411 29.9411C29.4111 27.3023 27.5362 25.1555 25.2314 25.1555Z"
								fill={`${active ? "#495a7b" : null}`}
							/>
						</g>
					</g>
				</g>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="45" height="45" fill={`${active ? "#495a7b" : null}`} />
				</clipPath>
			</defs>
		</svg>
	);
}

function cars(active) {
	return (
		<svg
			width="45"
			height="45"
			viewBox="0 0 45 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="cars">
				<path
					id="Vector"
					d="M40.9278 13.5774L37.9744 13.9262C37.7144 13.9262 37.5056 14.091 37.5056 14.2942V15.9211L35.6416 17.1012C35.5922 17.1315 35.5592 17.1754 35.5226 17.2148L32.0381 12.063C32.0381 12.063 31.1812 10.7547 28.816 10.5515L22.476 10.3501L16.1383 10.5515C13.7717 10.7547 12.9153 12.063 12.9153 12.063L9.51639 17.1982L7.49491 15.987V14.2941C7.49491 14.0909 7.2848 13.9261 7.02434 13.9261L4.07223 13.5773C3.81405 13.5773 3.60254 13.7411 3.60254 13.9426V16.3477C3.60254 16.551 3.81405 16.7176 4.07223 16.7176H6.35923L6.31621 16.7899L8.27542 17.9637L8.0328 18.1065C8.0328 18.1065 6.14913 18.9314 5.65979 20.5427C5.1764 22.1385 5.38013 24.5124 5.39749 26.1183C5.39749 26.1183 5.67214 29.2201 7.5911 30.3746V33.9112C7.5911 34.3196 7.92113 34.6501 8.32991 34.6501H11.4226C11.83 34.6501 12.1628 34.3196 12.1628 33.9112V30.8095L12.1083 30.8021H22.4683H22.4848H32.6791V33.9112C32.6791 34.3196 33.0069 34.6501 33.4152 34.6501H36.5097C36.9162 34.6501 37.2494 34.3196 37.2494 33.9112V30.4304C39.2635 29.3299 39.5565 26.1183 39.5565 26.1183C39.573 24.5124 39.7762 22.1385 39.2928 20.5427C38.8662 19.1392 37.3849 18.3336 37.0059 18.1486L36.6983 17.9655L38.5677 16.7827C38.5952 16.7653 38.6117 16.7378 38.6355 16.7177H40.928C41.1862 16.7177 41.3967 16.551 41.3967 16.3478V13.9427C41.3966 13.7412 41.186 13.5774 40.9278 13.5774ZM10.2969 23.6015C9.45548 23.6015 8.77117 22.9175 8.77117 22.0771C8.77117 21.2375 9.45548 20.5537 10.2969 20.5537C11.1368 20.5537 11.8198 21.2376 11.8198 22.0771C11.8198 22.9175 11.1368 23.6015 10.2969 23.6015ZM29.6967 25.6943C29.6967 25.6943 29.3936 27.5831 27.7302 27.9612H22.4682H22.3643H17.0996C15.4374 27.5831 15.1363 25.6943 15.1363 25.6943L15.1303 25.6678H29.7021L29.6967 25.6943ZM30.0002 24.3723H14.8314L14.3041 22.0771H22.3643H22.4682H30.5275L30.0002 24.3723ZM31.4119 17.4491L31.2874 17.5892C31.1629 17.7284 30.9871 17.8071 30.8022 17.8071C30.7766 17.8071 30.7509 17.8062 30.7234 17.8016C27.9719 17.4629 25.1393 17.2908 22.3062 17.2908C18.2811 17.2908 15.4059 17.6341 14.3563 17.7806C14.1421 17.8081 13.9274 17.7312 13.7832 17.5691L13.6197 17.386C13.4174 17.1589 13.4009 16.8229 13.5781 16.5767L14.8658 14.7914C16.451 12.6262 18.2207 12.6005 18.2953 12.6005H26.6609C26.8165 12.5731 28.6036 12.3927 30.0606 14.6824L31.4559 16.6435C31.6298 16.8897 31.6115 17.2239 31.4119 17.4491ZM34.8085 23.6015C33.968 23.6015 33.2851 22.9175 33.2851 22.0771C33.2851 21.2375 33.968 20.5537 34.8085 20.5537C35.649 20.5537 36.3319 21.2376 36.3319 22.0771C36.3319 22.9175 35.649 23.6015 34.8085 23.6015Z"
					fill={`${active ? "#495a7b" : null}`}
				/>
			</g>
		</svg>
	);
}

function housing(active) {
	return (
		<svg
			width="45"
			height="45"
			viewBox="0 0 45 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="housing">
				<path
					id="Vector"
					d="M43.8557 18.2509L23.3616 2.60638C22.3943 1.86849 21.5191 2.63384 21.5191 2.63384L1.01313 18.2875C1.01313 18.2875 0.214289 18.9165 0.845124 19.7414L3.10646 22.7054C3.10646 22.7054 3.70935 23.5756 4.42939 22.9342L6.1016 21.6589V40.9486C6.1016 40.9486 5.99995 42.809 7.76286 42.711L17.1735 42.7147L17.1781 23.5431C17.1781 22.7548 17.8176 22.1153 18.6063 22.1153H26.3109C27.0973 22.1153 27.7364 22.7549 27.7364 23.5431L27.7241 42.7147L37.2162 42.711C37.2162 42.711 38.8184 42.8191 38.8184 41.1693V21.659L40.4417 22.8999C40.4417 22.8999 41.1704 23.5413 41.7747 22.7521L44.0846 19.7267C44.0845 19.7267 44.9231 18.9664 43.8557 18.2509Z"
					fill={`${active ? "#495a7b" : null}`}
				/>
			</g>
		</svg>
	);
}

function electronics(active) {
	return (
		<svg
			width="45"
			height="45"
			viewBox="0 0 45 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="electronics">
				<path
					id="Vector"
					d="M31.8483 3.30591H13.1514C12.322 3.30591 11.6509 3.93762 11.6509 4.71945V40.2822C11.6509 41.0604 12.322 41.6939 13.1514 41.6939H31.8484C32.6788 41.6939 33.3489 41.0604 33.3489 40.2822V4.71945C33.3489 3.93762 32.6787 3.30591 31.8483 3.30591ZM20.6853 6.11476H24.3145C24.5736 6.11476 24.7832 6.32442 24.7832 6.58353C24.7832 6.84263 24.5735 7.05229 24.3145 7.05229H20.6853C20.4262 7.05229 20.2166 6.84263 20.2166 6.58353C20.2166 6.32442 20.4262 6.11476 20.6853 6.11476ZM22.5008 39.4711C21.6613 39.4711 20.9783 38.7881 20.9783 37.9495C20.9783 37.109 21.6613 36.426 22.5008 36.426C23.3395 36.426 24.0215 37.109 24.0215 37.9495C24.0215 38.7881 23.3394 39.4711 22.5008 39.4711ZM29.9889 33.2821C29.9889 33.5412 29.7792 33.7508 29.5201 33.7508H15.6911C15.432 33.7508 15.2224 33.5412 15.2224 33.2821V9.7439C15.2224 9.4848 15.432 9.27513 15.6911 9.27513H29.5201C29.7792 9.27513 29.9889 9.4848 29.9889 9.7439V33.2821Z"
					fill={`${active ? "#495a7b" : null}`}
				/>
			</g>
		</svg>
	);
}

function motorcycles(active) {
	return (
		<svg
			width="45"
			height="45"
			viewBox="0 0 45 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="motorcycles">
				<g id="Group">
					<path
						id="Vector"
						d="M37.0058 21.5139C33.8144 21.5139 31.0788 23.6636 30.3134 26.7489L29.813 26.7727L26.5758 27.3697C25.955 26.2509 25.3847 24.9325 25.1182 23.5391C24.2687 19.0805 18.0372 17.579 15.3254 17.579C14.322 17.579 13.2829 16.3943 12.8571 14.7628C12.4726 13.2925 12.6072 11.4175 14.1361 10.5606C14.333 10.4489 14.4236 10.2145 14.3504 10.0003C14.278 9.78604 14.0583 9.6542 13.8386 9.68716C13.6051 9.72196 8.10279 10.621 6.59129 18.5385C6.56567 18.6703 6.59863 18.8077 6.68103 18.9139C6.76435 19.02 6.88977 19.086 7.02341 19.0933C7.19739 19.1043 9.11815 19.249 11.1671 20.4007C11.0499 20.4428 10.9492 20.527 10.8951 20.6497L10.3174 21.9443C9.57584 21.6714 8.77749 21.5139 7.94252 21.5139C4.13581 21.5139 1.03955 24.6103 1.03955 28.417C1.03955 32.222 4.13581 35.3183 7.94252 35.3183C11.7474 35.3183 14.8437 32.222 14.8437 28.417C14.8437 25.7785 13.3551 23.4842 11.1744 22.3214L11.7511 21.0305C11.7887 20.9463 11.7914 20.8585 11.7786 20.7742C14.1297 22.3269 16.4395 25.3061 16.2994 31.0245C16.2976 31.1508 16.3452 31.2735 16.4331 31.3632C16.521 31.4548 16.6418 31.506 16.7682 31.506H28.6026C28.7894 31.506 28.9597 31.3943 29.0329 31.2222C29.108 31.0501 29.0723 30.8523 28.945 30.715C28.9304 30.7004 28.3225 30.0448 27.5845 28.9865L29.7012 29.9624C29.7479 29.9844 29.7982 29.9972 29.8495 30.0027L30.3041 30.0503C31.0493 33.1137 33.8343 35.3183 37.0057 35.3183C40.8106 35.3183 43.9068 32.222 43.9068 28.417C43.907 24.6102 40.8107 21.5139 37.0058 21.5139ZM7.64242 18.0935C7.701 16.1013 8.87289 14.8709 8.87289 14.8709C8.80877 16.8172 9.22445 18.5036 9.22445 18.5036C8.81422 18.0935 7.64242 18.0935 7.64242 18.0935ZM12.9689 28.417C12.9689 31.1874 10.7139 33.4432 7.94266 33.4432C5.1705 33.4432 2.91461 31.1874 2.91461 28.417C2.91461 25.6448 5.17045 23.3889 7.94266 23.3889C8.50573 23.3889 9.03856 23.5043 9.54481 23.6746L8.57072 25.859C8.36748 25.8096 8.15966 25.7748 7.94266 25.7748C6.48512 25.7748 5.30049 26.9595 5.30049 28.417C5.30049 29.8727 6.48517 31.0574 7.94266 31.0574C9.39834 31.0574 10.583 29.8727 10.583 28.417C10.583 27.5106 10.1253 26.7123 9.42858 26.2362L10.3999 24.0591C11.9252 24.9234 12.9689 26.542 12.9689 28.417ZM7.75132 28.8436C7.81267 28.8729 7.87858 28.8857 7.94173 28.8857C8.12116 28.8857 8.29237 28.7814 8.3702 28.6074L9.03395 27.1188C9.40476 27.4319 9.64554 27.8952 9.64554 28.417C9.64554 29.3563 8.88199 30.1199 7.94266 30.1199C7.00333 30.1199 6.23793 29.3563 6.23793 28.417C6.23793 27.4777 7.00333 26.7123 7.94266 26.7123C8.02321 26.7123 8.10011 26.7251 8.17886 26.7361L7.51419 28.2247C7.40802 28.4609 7.51423 28.7393 7.75132 28.8436ZM19.8554 28.5598C19.8554 28.8198 19.6467 29.0285 19.3867 29.0285C19.1285 29.0285 18.9179 28.8198 18.9179 28.5598V24.3411C18.9179 24.0829 19.1285 23.8723 19.3867 23.8723C19.6467 23.8723 19.8554 24.0829 19.8554 24.3411V28.5598ZM24.3612 23.2772C24.2742 23.3487 24.1698 23.3816 24.0654 23.3816C23.9299 23.3816 23.7944 23.323 23.701 23.2095C22.5946 21.849 21.5729 22.0981 21.5308 22.1109C21.2836 22.1768 21.0254 22.0303 20.9558 21.785C20.8881 21.5378 21.0254 21.2832 21.2708 21.21C21.3385 21.1898 22.9095 20.7504 24.4297 22.6181C24.5928 22.8195 24.5616 23.1143 24.3612 23.2772ZM37.0058 33.4432C34.9276 33.4432 33.0783 32.145 32.3312 30.2609L35.5208 30.5904C35.9603 30.8926 36.4675 31.0574 37.0058 31.0574C37.3574 31.0574 37.7016 30.9878 38.0276 30.8523C38.0276 30.8523 38.0276 30.8505 38.0294 30.8505L40.0051 31.0555C40.0215 31.0574 40.0362 31.0574 40.0527 31.0574C40.2028 31.0574 40.3438 30.986 40.4335 30.8633C41.7464 29.0432 41.1202 27.192 40.6056 26.4669C40.5141 26.3369 40.3548 26.2527 40.201 26.2692L38.6135 26.3461C38.586 26.3168 38.564 26.2838 38.5292 26.2582C37.5918 25.5953 36.2404 25.6375 35.3469 26.3607C35.2938 26.4028 35.2535 26.4541 35.2242 26.5109L32.3092 26.6519C33.0361 24.7073 34.8763 23.3889 37.0058 23.3889C39.7762 23.3889 42.032 25.6448 42.032 28.417C42.032 31.1874 39.7762 33.4432 37.0058 33.4432Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_2"
						d="M13.782 15.2241C13.8717 15.3047 13.9834 15.3432 14.0951 15.3432C14.2233 15.3432 14.3514 15.2919 14.4439 15.1894L17.2097 12.115H20.0936C20.3518 12.115 20.5624 11.9062 20.5624 11.6463C20.5624 11.3881 20.3518 11.1775 20.0936 11.1775H17.0009C16.8673 11.1775 16.7409 11.2343 16.6521 11.3331L13.7472 14.5613C13.5742 14.7535 13.5897 15.0501 13.782 15.2241Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_3"
						d="M41.1898 17.4546L41.6073 15.6126L43.6471 14.8948C43.8906 14.8106 44.0206 14.5414 43.9345 14.2979C43.8485 14.0526 43.5793 13.9244 43.3358 14.0104L41.7098 14.5817L33.9609 17.0207C31.326 19.1887 28.8665 19.1008 28.0407 18.9927C27.8594 19.5238 27.1966 20.4649 24.8208 20.7158C25.3362 21.4445 25.7271 22.2594 25.9057 23.195C26.1291 24.3669 26.5301 25.4948 27.0061 26.5276L28.72 22.0817C28.72 22.0817 31.8277 21.8181 34.4204 19.5622L40.4812 18.0699L43.1215 21.4646C43.2149 21.5837 43.3522 21.6459 43.4914 21.6459C43.5921 21.6459 43.6947 21.6148 43.7789 21.547C43.9839 21.3877 44.0206 21.0948 43.8613 20.8897L41.1898 17.4546Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_4"
						d="M14.9829 16.9271C15.036 16.9326 15.0891 16.951 15.1422 16.951C17.4274 16.951 21.7761 17.8372 24.5506 20.1993C28.0607 19.8825 27.7293 18.5403 27.7293 18.5403C26.1472 18.1888 24.2741 14.3563 24.2741 14.3563C18.1095 13.1021 15.6183 15.9823 14.9829 16.9271Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
				</g>
			</g>
		</svg>
	);
}

function boats(active) {
	return (
		<svg
			width="45"
			height="45"
			viewBox="0 0 45 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="boats">
				<g id="Group">
					<path
						id="Vector"
						fillRule="evenodd"
						clipRule="evenodd"
						d="M39.3217 38.4366L38.9738 38.2297C38.7431 38.0915 38.5106 37.9587 38.2946 37.793C38.0675 37.6181 37.8533 37.4268 37.6354 37.2364C37.4358 37.0569 37.2307 36.8775 37.0165 36.7072C36.4434 36.2613 35.8281 36.0105 35.1928 35.9665C34.4036 35.918 33.6382 36.1808 32.8967 36.7896C32.666 36.9782 32.448 37.1787 32.2283 37.381C32.0837 37.5165 31.9372 37.652 31.7852 37.7838C31.1187 38.3698 30.443 38.7451 29.7239 38.931C28.8322 39.159 27.9661 39.0509 27.0708 38.5977C26.4756 38.3038 25.9703 37.8799 25.5565 37.5055C25.2086 37.186 24.8003 36.8198 24.3535 36.5185C23.2782 35.7961 22.0858 35.7852 20.9963 36.4929C20.5303 36.795 20.1179 37.1557 19.6803 37.5402C18.8426 38.2846 18.117 38.7011 17.3301 38.8925C16.3002 39.1333 15.3022 38.9593 14.2846 38.3496C13.8337 38.0804 13.4369 37.7234 13.0166 37.3489L12.7172 37.0825C12.4055 36.806 12.0709 36.5624 11.7248 36.3601C10.7461 35.7851 9.71846 35.7943 8.74938 36.3848C8.34381 36.6357 7.97027 36.9167 7.63888 37.2244C7.15821 37.6776 6.50637 38.2461 5.73091 38.6206C5.43841 38.7634 5.31576 39.1149 5.45722 39.407C5.59956 39.7018 5.95112 39.8263 6.24362 39.6807C7.16375 39.2376 7.90392 38.5931 8.44361 38.0849C8.71554 37.8313 9.0254 37.597 9.36418 37.39C9.95471 37.0293 10.5319 37.0266 11.1288 37.3763C11.4104 37.5402 11.6809 37.7379 11.9381 37.965L12.232 38.2277C12.6747 38.6232 13.1329 39.0325 13.6795 39.3593C14.9562 40.1247 16.2768 40.3481 17.6052 40.0377C18.578 39.8006 19.4853 39.2879 20.4969 38.3907C20.8805 38.0547 21.2426 37.738 21.6372 37.4798C22.3362 37.0248 23.0091 37.0339 23.6962 37.4963C24.0752 37.7517 24.4305 38.0685 24.7637 38.377C25.2123 38.7817 25.8202 39.2925 26.5435 39.6514C27.2979 40.0332 28.0614 40.2236 28.8305 40.2236C29.2259 40.2236 29.6214 40.1733 30.0165 40.0717C30.921 39.8373 31.7523 39.3795 32.5598 38.6718C32.7209 38.5336 32.8747 38.388 33.0286 38.2461C33.23 38.0593 33.4296 37.8735 33.6419 37.7005C34.1491 37.2848 34.6252 37.1026 35.1122 37.142C35.5151 37.1694 35.9014 37.3306 36.2878 37.6318C36.4837 37.7884 36.6686 37.9513 36.8554 38.117C37.0934 38.3285 37.3315 38.54 37.5805 38.7267C37.8313 38.9199 38.1023 39.0829 38.377 39.244L38.7011 39.4372C38.9757 39.6093 39.3401 39.5251 39.5122 39.2486C39.6824 38.9731 39.5982 38.6097 39.3217 38.4366Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_2"
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6.24455 35.5645C7.16468 35.1204 7.90485 34.4759 8.4427 33.9696C8.72241 33.7123 9.03279 33.4779 9.36418 33.2729C9.95793 32.914 10.5342 32.9094 11.1298 33.2591C11.4113 33.423 11.6819 33.6208 11.9391 33.8478L12.233 34.1106C12.6756 34.5061 13.1339 34.9153 13.6804 35.2422C14.9575 36.0075 16.2777 36.2355 17.6048 35.9206C18.8732 35.6148 19.8433 34.8531 20.4731 34.2946C20.8654 33.9513 21.2344 33.6272 21.6381 33.3626C22.3339 32.9121 23.0087 32.914 23.6971 33.3791C24.0762 33.6345 24.4314 33.9513 24.7646 34.2598C25.2132 34.6645 25.8211 35.1753 26.5444 35.5342C27.2969 35.9132 28.0623 36.1046 28.8314 36.1046C29.225 36.1046 29.6224 36.0533 30.0174 35.9544C30.9219 35.7201 31.7532 35.2623 32.5607 34.5546C32.7219 34.4163 32.8757 34.2717 33.0295 34.1288C33.2309 33.9421 33.4305 33.7562 33.6428 33.5832C34.15 33.1675 34.6096 32.9854 35.1113 33.0247C35.5178 33.055 35.906 33.2152 36.2887 33.5145C36.4846 33.6711 36.6696 33.8341 36.8563 33.9997C37.0944 34.2112 37.3324 34.4227 37.5814 34.6095C37.8323 34.8027 38.1033 34.9656 38.3779 35.1268L38.702 35.3199C38.9766 35.493 39.341 35.4078 39.5131 35.1313C39.6834 34.8557 39.5992 34.4923 39.3227 34.3193L38.9748 34.1123C38.7441 33.9768 38.5116 33.8414 38.2955 33.6756C38.0685 33.5007 37.8542 33.3103 37.6364 33.119C37.4368 32.9395 37.2317 32.7601 37.0175 32.5898C36.4462 32.1458 35.8346 31.8977 35.1937 31.8491C34.4045 31.7961 33.6392 32.0634 32.8976 32.6731C32.6669 32.8617 32.449 33.0613 32.2293 33.2637C32.0847 33.4001 31.9381 33.5356 31.7862 33.6665C31.1197 34.2533 30.444 34.6278 29.7249 34.8136C28.8295 35.0416 27.9653 34.9318 27.0717 34.4804C26.4766 34.1865 25.9712 33.7626 25.5575 33.3881C25.2095 33.0686 24.8013 32.7024 24.3545 32.4012C23.2778 31.6788 22.0845 31.6678 20.995 32.3764C20.5207 32.6868 20.1014 33.0549 19.6826 33.4229C18.8366 34.17 18.1115 34.5865 17.3311 34.7752C16.3011 35.0169 15.3032 34.842 14.2856 34.2323C13.8347 33.9631 13.4378 33.607 13.0176 33.2316L12.7182 32.9651C12.4065 32.6886 12.0719 32.4451 11.7258 32.2428C10.7494 31.6696 9.72124 31.6788 8.75036 32.2675C8.35208 32.5138 7.97995 32.7948 7.63986 33.107C7.15918 33.5602 6.50734 34.1288 5.73188 34.5032C5.43938 34.646 5.31673 34.9985 5.45819 35.2897C5.60049 35.5846 5.95201 35.7091 6.24455 35.5645Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_3"
						fillRule="evenodd"
						clipRule="evenodd"
						d="M14.2392 31.3504H14.2374C15.2458 31.8906 16.3151 32.0893 17.4664 31.8146C18.474 31.5739 19.3043 31.0099 20.0711 30.3315C20.4698 29.9817 20.8721 29.6274 21.3162 29.3381C22.2106 28.7559 23.1376 28.7632 24.0257 29.3592C24.4285 29.6302 24.7984 29.9589 25.1591 30.2903C25.6681 30.7499 26.1973 31.1738 26.8088 31.4768C27.7829 31.9694 28.8029 32.1232 29.8703 31.8522C30.1665 31.7735 30.4484 31.6727 30.7195 31.5464L30.7176 31.5436C30.7982 27.8632 33.6528 24.365 33.6528 24.365C34.2661 23.747 34.0501 22.8544 33.2225 22.5779C32.4681 22.3252 31.7137 22.0698 30.9575 21.8281C30.7964 21.7777 30.7524 21.7045 30.7524 21.5433C30.7598 19.4001 30.7543 17.2587 30.7543 15.1145C30.7543 15.0413 30.7543 14.9653 30.7543 14.8682C30.0548 14.8682 29.3778 14.8682 28.6857 14.8682C28.6857 14.1742 28.6857 11.7243 28.6857 11.0303C27.3032 11.0303 22.5146 11.0303 21.1367 11.0303C21.1367 10.947 21.1367 10.8829 21.1367 10.8179C21.1367 9.8731 21.139 6.79508 21.1345 5.84753C21.1345 5.32111 20.8492 4.95307 20.3425 4.8084C20.321 4.80383 20.3023 4.78735 20.2817 4.77637C19.4769 4.77637 19.9667 4.77637 19.1606 4.77637C18.4717 4.99245 18.2831 5.43832 18.2991 6.06177C18.3243 6.94252 18.306 9.9537 18.306 10.8362C18.306 10.8967 18.306 10.9607 18.306 11.0368C16.9189 11.0368 17.6921 11.0368 16.3097 11.0368C16.3097 11.7289 16.3097 14.1807 16.3097 14.8801C15.6093 14.8801 14.9318 14.8801 14.242 14.8801C14.242 14.9726 14.242 15.0431 14.242 15.1127C14.242 17.2605 14.2397 19.4093 14.2466 21.5571C14.2466 21.7155 14.1949 21.7778 14.0461 21.8263C13.2949 22.0698 12.5469 22.3225 11.7966 22.5715C10.9333 22.8562 10.7246 23.7425 11.37 24.3861C11.37 24.386 14.0758 27.259 14.2392 31.3504ZM27.5193 21.1753C27.4588 21.1569 27.4094 21.1478 27.36 21.1313C25.9372 20.6553 24.5146 20.1792 23.0895 19.7077V17.7301L27.5193 17.7319C27.5193 18.8865 27.5193 20.0226 27.5193 21.1753ZM19.2883 13.9554H25.7139C26.0398 13.9554 26.3016 14.2182 26.3016 14.5441C26.3016 14.8682 26.0398 15.1328 25.7139 15.1328H19.2883C18.9628 15.1328 18.6991 14.8682 18.6991 14.5441C18.6992 14.2182 18.9629 13.9554 19.2883 13.9554ZM17.4779 17.7274L21.9118 17.7302V19.7077C20.4863 20.1792 19.0599 20.6553 17.6344 21.1314C17.5873 21.1478 17.5379 21.157 17.4779 21.1726C17.4779 20.0208 17.4779 18.8819 17.4779 17.7274Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
				</g>
			</g>
		</svg>
	);
}

function sports(active) {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="sports">
				<path
					id="Vector"
					d="M12.417 15.319C13.494 16.24 14.675 17.121 15.959 17.917L24.729 2.594C22.218 0.955 19.223 0 16 0C15.24 0 14.493 0.057 13.761 0.159C15.294 6.898 14.368 11.79 12.417 15.319Z"
					fill={`${active ? "#495a7b" : null}`}
				/>
				<path
					id="Vector_2"
					d="M23.8198 21.092C26.0398 21.55 28.4498 21.7 31.0488 21.442C31.6638 19.742 31.9998 17.911 31.9998 16C31.9998 15.229 31.9408 14.473 31.8368 13.731C30.1038 14.283 25.9228 16.087 23.8198 21.092Z"
					fill={`${active ? "#495a7b" : null}`}
				/>
				<path
					id="Vector_3"
					d="M17.479 18.79C18.992 19.592 20.628 20.268 22.397 20.752C23.749 17.316 26.43 14.003 31.592 12.415C30.784 8.88802 28.813 5.80502 26.102 3.59302L17.479 18.79Z"
					fill={`${active ? "#495a7b" : null}`}
				/>
				<path
					id="Vector_4"
					d="M11.202 14.2249C13.937 8.82189 13.004 2.71189 12.493 0.389893C9.26905 1.11189 6.41305 2.80389 4.24805 5.14689C5.14105 6.80489 7.44205 10.6629 11.202 14.2249Z"
					fill={`${active ? "#495a7b" : null}`}
				/>
				<path
					id="Vector_5"
					d="M10.185 15.939C7.741 13.571 5.353 10.473 3.172 6.43604C1.18 9.10404 0 12.415 0 16C0 18.223 0.454 20.34 1.273 22.264C5.601 20.822 8.404 18.529 10.185 15.939Z"
					fill={`${active ? "#495a7b" : null}`}
				/>
				<path
					id="Vector_6"
					d="M23.1999 22.8911C22.6309 24.9601 22.4019 27.4791 22.7139 30.5241C26.0139 28.9971 28.7039 26.3781 30.3229 23.1291C28.6339 23.3401 26.1289 23.4411 23.1999 22.8911Z"
					fill={`${active ? "#495a7b" : null}`}
				/>
				<path
					id="Vector_7"
					d="M21.7968 22.5819C20.1128 22.1579 18.3178 21.5099 16.4818 20.5459L10.5288 31.0399C12.2358 31.6599 14.0788 31.9999 15.9998 31.9999C17.8588 31.9999 19.6448 31.6799 21.3048 31.0959C21.1368 29.8659 20.7958 26.3269 21.7968 22.5819Z"
					fill={`${active ? "#495a7b" : null}`}
				/>
				<path
					id="Vector_8"
					d="M14.9532 19.6761C13.7542 18.9381 12.5452 18.0551 11.3432 17.0071C8.45816 20.9471 4.30916 22.7981 1.91016 23.5861C3.47416 26.4841 5.90916 28.8441 8.86216 30.3181L14.9532 19.6761Z"
					fill={`${active ? "#495a7b" : null}`}
				/>
			</g>
		</svg>
	);
}

function furniture(active) {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="furniture">
				<g id="Group">
					<path
						id="Vector"
						d="M32.1273 27.2529H15.8364C14.8144 27.2529 13.9854 28.0809 13.9854 29.1039V35.4899H33.9764V29.1039C33.9774 28.0809 33.1483 27.2529 32.1273 27.2529Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_2"
						d="M16.5224 22.2119V26.1849C16.5224 26.2079 16.5114 26.2299 16.5084 26.2529H31.5834V22.2099C31.5834 20.8269 32.7093 19.7009 34.0924 19.7009H34.4774V14.3229C34.4774 13.0269 33.4223 11.9719 32.1273 11.9719H15.8364C14.5404 11.9719 13.4854 13.0269 13.4854 14.3229V19.7009H14.0114C15.3964 19.7009 16.5224 20.8269 16.5224 22.2119Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_3"
						d="M15.4881 26.1849V22.2119C15.4881 21.3979 14.8251 20.7349 14.0111 20.7349H9.84915H9.55415C9.04615 20.7349 8.59715 20.9929 8.33115 21.3839V21.3849C8.26015 21.4889 8.20815 21.6069 8.16515 21.7279C8.15515 21.7579 8.14515 21.7889 8.13715 21.8189C8.10215 21.9449 8.07715 22.0749 8.07715 22.2119V34.0129C8.07715 34.8269 8.74015 35.4899 9.55415 35.4899H12.9851V29.1039C12.9851 27.6619 14.0671 26.4839 15.4591 26.2959L15.4881 26.1849Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_4"
						d="M39.9672 21.8189C39.9582 21.7889 39.9492 21.7579 39.9392 21.7279C39.8972 21.6069 39.8442 21.4899 39.7742 21.3849H39.7732L39.7722 21.3839C39.5062 20.9919 39.0572 20.7349 38.5492 20.7349H38.2542H34.0922C33.2792 20.7349 32.6152 21.3969 32.6152 22.2119V26.1849L32.6442 26.2959C34.0362 26.4839 35.1182 27.6609 35.1182 29.1039V35.4899H38.5492C39.3632 35.4899 40.0272 34.8279 40.0272 34.0129V22.2119C40.0262 22.0749 40.0022 21.9449 39.9672 21.8189Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
				</g>
			</g>
		</svg>
	);
}

function booksAndMovies(active) {
	return (
		<svg
			width="45"
			height="45"
			viewBox="0 0 45 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="books and movies">
				<g id="Group">
					<path
						id="Vector"
						d="M6.24645 28.6359C6.24645 28.6359 13.1268 27.5943 21.2146 34.8778V11.1497C20.7964 10.769 20.1421 10.3218 19.4886 9.97591C13.6883 6.3431 6.60176 7.18216 6.60176 7.18216C5.67551 7.18216 4.92551 7.71747 4.92551 8.37747V27.1472C4.92457 27.81 4.89082 28.6556 6.24645 28.6359Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_2"
						d="M37.3368 29.3521C38.7965 29.3353 38.7008 29.0315 38.7965 28.3574V8.39432C38.7965 7.73432 38.0455 7.19901 37.1193 7.19901C37.1193 7.19901 30.0327 6.35994 24.2324 9.99276C23.7805 10.2599 23.0024 10.7887 22.5093 11.2199V34.8618C28.8299 28.799 37.3368 29.3521 37.3368 29.3521Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_3"
						d="M43.5226 30.5015V9.48747C43.5226 9.33747 43.4513 9.19685 43.3322 9.10872C43.2769 9.06841 42.2297 8.33435 40.7307 8.92029V29.5406V29.6062L40.7213 29.6718L40.7016 29.8256C40.546 31.0818 39.9291 31.5122 38.2576 31.53H38.2219L38.1872 31.5281C38.1722 31.5262 37.9801 31.515 37.6472 31.515C35.6222 31.515 28.5947 31.9181 23.1854 37.1072L22.5366 37.7278V37.9715C22.6576 37.9368 22.7766 37.8872 22.8891 37.8122L24.9863 36.7809C33.2494 33.4284 40.2901 33.6534 40.3782 33.6572C41.656 33.6356 42.4529 33.4153 42.9582 32.8697C43.4307 32.3606 43.6107 31.5947 43.5226 30.5015Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_4"
						d="M6.75461 30.7359C6.19398 30.7359 5.87898 30.78 5.87898 30.78L5.81617 30.7894H5.75242L5.68961 30.7912C4.95367 30.7912 4.37992 30.5897 3.98242 30.1903C3.40023 29.6081 3.40117 28.8356 3.40211 28.3228V28.275V8.91656C1.9218 8.20593 0.877422 8.84812 0.822109 8.88281C0.688984 8.96812 0.607422 9.11812 0.607422 9.2775V31.7709C0.607422 32.8566 1.48492 33.5072 2.9718 33.5072C2.97273 33.5072 2.97273 33.5072 2.97367 33.5072C3.05992 33.5034 11.6784 33.2053 19.5468 37.0397L21.2174 37.8019C21.3149 37.8572 21.4471 37.9116 21.5971 37.9556V37.7287L20.9699 37.1644C14.5293 31.3622 8.88273 30.7359 6.75461 30.7359Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
				</g>
			</g>
		</svg>
	);
}

function games(active) {
	return (
		<svg
			width="45"
			height="45"
			viewBox="0 0 45 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="games">
				<g id="Group">
					<path
						id="Vector"
						d="M19.1499 16.415C19.5894 17.0724 19.7386 17.8625 19.7386 18.7103C19.7386 19.0371 19.7258 19.2303 19.6553 19.5352C20.4271 19.7265 21.4973 20.577 21.6466 21.4587H23.3119C23.4675 20.577 24.4178 19.7906 25.2986 19.5453C25.2253 19.2376 25.153 19.0417 25.153 18.7103C25.153 17.8625 25.2729 17.0724 25.7124 16.4151H19.1499V16.415Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_2"
						d="M42.8027 28.354L41.1273 18.2452C41.1273 18.2424 41.1255 18.2397 41.1255 18.2397C41.0156 15.7943 39.6625 13.6758 37.6794 12.4966V11.4675C37.6794 10.4073 36.8188 9.54492 35.7586 9.54492H31.8787C30.8185 9.54492 29.9542 10.4073 29.9542 11.4675V12.7804H14.8407C14.815 12.763 14.7912 12.7429 14.7656 12.7255V11.4675C14.7656 10.4073 13.9032 9.54492 12.843 9.54492H8.96118C7.901 9.54492 7.03857 10.4073 7.03857 11.4675V12.6092C5.15441 13.8076 3.8818 15.8721 3.77743 18.2406C3.77563 18.2452 3.77378 18.2489 3.77194 18.2534L2.1954 28.3649C2.01232 29.5515 1.45382 33.166 4.66183 34.8652C5.41809 35.2662 6.22923 35.4548 7.02758 35.4548C8.83299 35.4548 10.5743 34.4898 11.4716 32.7961L13.7952 28.4052C14.5697 28.9747 15.5145 29.3244 16.5472 29.3244C18.9715 29.3244 20.9473 27.4604 21.1688 25.0947H23.8788C24.1021 27.4604 26.076 29.3244 28.5004 29.3244C29.5184 29.3244 30.4522 28.9875 31.2195 28.4327L33.5303 32.7961C34.4256 34.4898 36.1688 35.4548 37.9724 35.4548C38.7726 35.4548 39.5837 35.2662 40.3399 34.8652C43.5461 33.166 42.9876 29.5515 42.8027 28.354ZM11.2399 22.1325H8.22237C7.70416 22.1325 7.28484 21.7132 7.28484 21.195C7.28484 20.6768 7.70416 20.2575 8.22237 20.2575H11.2399C11.7581 20.2575 12.1774 20.6768 12.1774 21.195C12.1774 21.7132 11.7581 22.1325 11.2399 22.1325ZM12.1774 16.7712H9.15981C8.64161 16.7712 8.22232 16.3519 8.22232 15.8337C8.22232 15.3155 8.64161 14.8962 9.15981 14.8962H12.1774C12.6956 14.8962 13.1149 15.3155 13.1149 15.8337C13.1149 16.3519 12.6956 16.7712 12.1774 16.7712ZM16.5472 26.0432C15.8679 26.0432 15.3149 25.4884 15.3149 24.8091C15.3149 24.1279 15.8679 23.5749 16.5472 23.5749C17.2284 23.5749 17.7814 24.1279 17.7814 24.8091C17.7814 25.4884 17.2284 26.0432 16.5472 26.0432ZM24.0857 23.2192H20.9582C20.4602 21.7214 19.2242 20.5632 17.6642 20.1632C17.785 19.645 17.8564 19.1067 17.8564 18.5519C17.8564 17.1117 17.4206 15.7723 16.6754 14.6554H28.2294C27.4841 15.7723 27.0483 17.1117 27.0483 18.5519C27.0483 19.114 27.1216 19.6578 27.2461 20.1815C25.7501 20.5972 24.5654 21.7415 24.0857 23.2192ZM28.2824 26.0432C27.6031 26.0432 27.0483 25.4884 27.0483 24.8091C27.0483 24.1279 27.6031 23.5749 28.2824 23.5749C28.9618 23.5749 29.5148 24.1279 29.5148 24.8091C29.5148 25.4884 28.9618 26.0432 28.2824 26.0432ZM31.6599 15.8337C31.6599 15.3155 32.0792 14.8962 32.5973 14.8962H35.6149C36.1331 14.8962 36.5524 15.3155 36.5524 15.8337C36.5524 16.3519 36.1331 16.7712 35.6149 16.7712H32.5973C32.0791 16.7712 31.6599 16.3519 31.6599 15.8337ZM36.5524 22.1325H33.5349C33.0167 22.1325 32.5973 21.7132 32.5973 21.195C32.5973 20.6768 33.0167 20.2575 33.5349 20.2575H36.5524C37.0706 20.2575 37.4899 20.6768 37.4899 21.195C37.4899 21.7132 37.0706 22.1325 36.5524 22.1325Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
				</g>
			</g>
		</svg>
	);
}

function music(active) {
	return (
		<svg
			width="45"
			height="45"
			viewBox="0 0 45 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="music">
				<g id="Group">
					<path
						id="Vector"
						d="M35.757 8.84159C34.1239 7.21034 31.9536 6.31128 29.6464 6.31128C27.3392 6.31128 25.1698 7.21034 23.5358 8.84159C21.9045 10.4728 21.0073 12.6422 21.0073 14.9503C21.0073 17.2585 21.9064 19.4278 23.5376 21.061C25.1689 22.6941 27.3392 23.5922 29.6464 23.5922C31.9536 23.5922 34.1229 22.6941 35.757 21.061C37.3883 19.4288 38.2873 17.2585 38.2873 14.9513C38.2873 12.6441 37.3883 10.4738 35.757 8.84159Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_2"
						d="M19.9526 19.0286L9.43198 31.1373C8.5348 32.0364 8.36605 33.3329 8.87698 34.3689L8.65573 34.1364L6.24355 36.2092C5.8498 36.5458 5.80573 37.1392 6.14323 37.5311C6.3298 37.7467 6.5923 37.8573 6.85574 37.8573C7.07136 37.8573 7.2898 37.7842 7.46511 37.6304L9.90073 35.5379C10.9667 36.2411 12.4901 36.1351 13.4126 35.2117L25.571 24.6479C24.3317 24.1258 23.1926 23.3654 22.2129 22.3858C21.2332 21.4061 20.4729 20.2679 19.9526 19.0286Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
				</g>
			</g>
		</svg>
	);
}

function fashon(active) {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="fashon">
				<g id="Group">
					<path
						id="Vector"
						d="M23.5123 5.76106H23.7863C27.3393 5.84706 28.6523 1.93006 28.7073 1.76306L28.7583 1.59306C26.7953 2.92306 24.3983 3.00006 23.9283 3.00006L23.7863 2.99806L23.3833 3.00006C22.9133 3.00006 20.5143 2.92306 18.5503 1.59106L18.6053 1.76806C18.6583 1.93006 19.9583 5.83806 23.5123 5.76106Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_2"
						d="M8.67921 5.98413C8.16421 6.48913 7.58321 7.12913 6.93421 7.98013L1.66621 15.9301C1.52621 16.1421 1.56621 16.4251 1.76121 16.5891L8.58921 22.3431C8.79221 22.5121 9.09321 22.4971 9.27621 22.3031L9.73321 21.8181C10.0622 12.7931 8.77721 6.27813 8.76421 6.21213L8.67921 5.98413Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_3"
						d="M23.4751 9.20598C23.4761 9.20598 23.4781 9.20598 23.4801 9.20598H23.8301C23.8311 9.20598 23.8331 9.20598 23.8341 9.20598C30.5791 9.20598 32.0571 3.14098 32.0711 3.07998L32.1421 2.59198L29.7901 1.62598L29.6621 2.05898C29.6431 2.11898 28.0491 6.82398 23.7741 6.76098H23.5241C23.4771 6.76198 23.4301 6.76298 23.3841 6.76298C19.2111 6.76298 17.6671 2.11698 17.6521 2.07098L17.5141 1.62998L15.1631 2.59598L15.2461 3.11498C15.2991 3.32898 16.7561 9.20598 23.4751 9.20598Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_4"
						d="M37.5662 6.00713L37.8472 5.27413C37.0262 4.59813 36.5192 4.39113 36.4932 4.38113L33.0932 2.98413L33.0522 3.26613C33.0292 3.37413 31.3632 10.2061 23.8332 10.2061C23.8312 10.2061 23.8302 10.2061 23.8282 10.2061H23.4782C23.4772 10.2061 23.4742 10.2061 23.4732 10.2061C15.9452 10.2061 14.2802 3.37413 14.2642 3.30513L14.2122 2.98613L10.8332 4.37513C10.7972 4.38913 10.2912 4.59513 9.47217 5.26613L9.72217 5.94013C9.75517 6.07313 10.9592 12.1581 10.7662 20.7181L10.8002 20.6821C10.9042 23.4861 11.1412 31.3291 11.1412 44.8311C11.1412 45.0841 11.3302 45.2971 11.5812 45.3271C11.6352 45.3341 17.0472 45.9771 22.4432 45.9771C22.8072 45.9771 23.1702 45.9741 23.5242 45.9681H23.7772C24.1392 45.9741 24.5032 45.9771 24.8662 45.9771C30.2622 45.9771 35.6742 45.3331 35.7282 45.3271C35.9802 45.2971 36.1682 45.0841 36.1682 44.8311C36.1682 32.6431 36.3602 25.0811 36.4762 21.6591C36.1722 12.6061 37.5532 6.07213 37.5662 6.00713Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_5"
						d="M45.6453 15.93L40.3583 7.95301C39.7213 7.11801 39.1473 6.48801 38.6403 5.98901L38.5223 6.29301C38.5293 6.29301 37.1683 12.75 37.4793 21.711L38.0363 22.303C38.2183 22.497 38.5183 22.512 38.7233 22.343L45.5513 16.589C45.7443 16.425 45.7853 16.142 45.6453 15.93Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
				</g>
			</g>
		</svg>
	);
}

function other(active) {
	return (
		<svg
			width="45"
			height="45"
			viewBox="0 0 45 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="other">
				<path
					id="Vector"
					d="M42.9502 28.0848L37.587 24.9884L37.5797 24.9756C37.6081 22.9528 37.5376 21.9159 37.5413 19.9933L42.9319 16.8805C43.4757 16.5665 43.6597 15.8716 43.3484 15.3283L39.1114 7.99807C38.7974 7.45288 38.1025 7.26748 37.5596 7.58243L32.2028 10.676L32.1882 10.6659C30.4175 9.66755 29.6805 9.17545 27.8504 8.17249V1.99588C27.8504 1.36966 27.3414 0.861084 26.7124 0.861084H18.2484C17.6194 0.861084 17.1104 1.36966 17.1104 1.99588V7.71198C15.1429 9.17545 12.7653 10.703 12.7653 10.703L7.41765 7.61539C6.87475 7.30044 6.17984 7.4872 5.86581 8.03336L1.63432 15.3594C1.3194 15.9051 1.50705 16.6004 2.04999 16.9135L7.12383 19.7901C7.10458 22.1924 7.12383 25.199 7.12383 25.199L2.06828 28.1159C1.52537 28.4308 1.33953 29.1266 1.65264 29.6704L5.88418 37.002C6.19821 37.5458 6.89492 37.7308 7.43874 37.4158L12.8001 34.3232L12.8056 34.3341C14.686 35.6305 17.1488 36.8995 17.1488 36.8995V43.0005C17.1488 43.6304 17.6578 44.1394 18.2877 44.1394H26.7509C27.3799 44.1394 27.8889 43.6304 27.8889 43.0005V36.8995C27.8889 36.8995 29.8152 35.9802 32.2312 34.2957L37.5798 37.3847C38.1227 37.6978 38.8175 37.511 39.1325 36.9672L43.3659 29.6393C43.6808 29.0955 43.494 28.3979 42.9502 28.0848ZM22.36 30.3003C18.0699 30.3003 14.5945 26.8204 14.5945 22.5316C14.5945 18.241 18.0699 14.762 22.36 14.762C26.6511 14.762 30.1274 18.241 30.1274 22.5316C30.1274 26.8204 26.6511 30.3003 22.36 30.3003Z"
					fill={`${active ? "#495a7b" : null}`}
				/>
			</g>
		</svg>
	);
}

function jobs(active) {
	return (
		<svg
			width="45"
			height="45"
			viewBox="0 0 45 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="jobs">
				<g id="Group">
					<path
						id="Vector"
						d="M22.4373 21.6668C22.4373 21.6668 28.7947 22.3773 30.8363 15.0434V8.65486C30.8363 8.65486 29.5143 3.44918 22.4373 3.80259C22.4373 3.80259 18.2442 3.33018 16.6841 7.23626C16.6841 7.23626 14.4035 6.2873 14.0483 8.65486V15.1606C14.0483 15.1606 16.0835 21.903 22.4373 21.6668Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
					<path
						id="Vector_2"
						d="M39.4773 29.535L30.1682 24.5051H28.9707L25.0742 33.5304L23.2743 29.9763L24.9003 27.7863L23.3897 25.7594H21.6108L20.0993 27.7863L21.7252 29.9763L19.9253 33.5304L16.0288 24.5051H14.8313L5.52317 29.535L2.5083 41.2153H42.4912L39.4773 29.535Z"
						fill={`${active ? "#495a7b" : null}`}
					/>
				</g>
			</g>
		</svg>
	);
}