export default function ButtonStyled({ children, styles }) {
	return (
		<button
			size="md"
			variant="outlined"
			className={
				`p-2 px-4 border-[1px] border-black/25 rounded-lg   text-black  font-semibold transition-all ` +
				styles
			}
		>
			{children}
		</button>
	);
}
