import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

// autre manière
// function handleAlert(scaleValue, careType) {
// 	if (careType === 'light') {
// 		if (scaleValue === 1)
// 			alert("Cette plante requiert peu de lumière");
// 		else if (scaleValue === 2)
// 			alert("Cette plante requiert modérement de lumière");
// 		else
// 			alert("Cette plante requiert beaucoup de lumière");
// 	}
// 	else {
// 		if (scaleValue === 1)
// 			alert("Cette plante requiert peu d'eau");
// 		else if (scaleValue === 2)
// 			alert("Cette plante requiert modérement d'eau");
// 		else
// 			alert("Cette plante requiert beaucoup d'eau");
// 	}
// }
// return (
// 	<div>
// 		{range.map((rangeElem) =>
// 			scaleValue >= rangeElem ? (
// 				<span key={rangeElem.toString()} onClick={() => handleAlert(scaleValue, careType)}>{scaleType}</span>
// 			) : null
// 		)}
// 	</div>
// )

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div
			onClick={() =>
				alert(
					`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
