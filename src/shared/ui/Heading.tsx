import { FC } from 'react'

const Heading: FC<{
	title: string
	className?: string
}> = ({ title, className = '' }) => {
	return (
		<h1
			className={`text-white font-semibold ${
				className.includes('xl') ? '' : 'text-3xl'
			} ${className}`}
		>
			{title}
		</h1>
	)
}

export default Heading
