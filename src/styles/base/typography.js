import  Colors  from './colors'

export default function Typography(props, category) {
	const styles = {
		textDefault: {
			color: props.color ? props.color : Colors.accent.primary,
			fontSize: '16px',
			...props.style,
		},
		textMedium: {
			color: props.color ? props.color : Colors.white,
			fontWeight: '100',
			...props.style,
		},
		textLarge: {
			color: props.color ? props.color : Colors.white,
			fontSize: '50px',
			fontWeight: '600',
			...props.style,
		},
		titleDefault: {
			color: props.color ? props.color : Colors.accent.primary,
			fontSize: '22px',
			fontWeight:'bold',
			...props.style,
		},
		titleLarge: {
			color: props.color ? props.color : Colors.white,
			fontWeight:'bold',
			...props.style,
		},
		titleMedium: {
			color: props.color ? props.color : Colors.accent.primary,
			fontSize: '28px',
			margin: '0px',
			...props.style,
		},
		label: {
			color: props.color ? props.color : Colors.accent.label,
			fontSize: '14px',
			margin: '0px',
			...props.style,
		},

		link: {
			color: props.color ? props.color : Colors.accent.primary,
			fontSize: '14px',
			margin: '5px',
			cursor: 'pointer',
			...props.style,
		},
	}

	const selectText =
		(!props.type && styles.textDefault) ||
		(props.type === 'textLarge' && styles.textLarge) ||
		(props.type === 'textMedium' && styles.textMedium)

	const selectTitle =
		(!props.type && styles.titleDefault) ||
		(props.type === 'titleLarge' && styles.titleLarge) ||
		(props.type === 'titleMedium' && styles.titleMedium)

	const select = category === 'title' ? selectTitle : selectText

	return select
}