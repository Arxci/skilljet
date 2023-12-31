import {
	faArrowRightFromBracket,
	faBars,
	faCartShopping,
	faChevronLeft,
	faChevronRight,
	faCircleCheck,
	faEye,
	faEyeSlash,
	faGear,
	faGraduationCap,
	faMagnifyingGlass,
	faPlus,
	faStar,
	faTrash,
	faUpload,
	faUser,
	faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Moon, Sun } from 'lucide-react'

import { cn } from '@/lib/utils'

interface IconProps {
	className?: string
}

export const Icons = {
	logo: (props: IconProps) => (
		<FontAwesomeIcon
			className={cn('w-4 h-4 text-primary', props.className)}
			icon={faGraduationCap}
		/>
	),
	chevronRight: (props: IconProps) => (
		<FontAwesomeIcon
			className={cn('w-4 h-4 text-primary', props.className)}
			icon={faChevronRight}
		/>
	),
	chevronLeft: (props: IconProps) => (
		<FontAwesomeIcon
			className={cn('w-4 h-4 text-primary', props.className)}
			icon={faChevronLeft}
		/>
	),
	sun: (props: IconProps) => (
		<Sun
			{...props}
			className={cn('w-4 h-4', props.className)}
		/>
	),
	moon: (props: IconProps) => (
		<Moon
			{...props}
			className={cn('w-4 h-4', props.className)}
		/>
	),
	plus: (props: IconProps) => (
		<FontAwesomeIcon
			{...props}
			className={cn('w-4 h-4', props.className)}
			icon={faPlus}
		/>
	),
	eye: (props: IconProps) => (
		<FontAwesomeIcon
			{...props}
			className={cn('w-4 h-4', props.className)}
			icon={faEye}
		/>
	),
	bars: (props: IconProps) => (
		<FontAwesomeIcon
			{...props}
			className={cn('w-4 h-4', props.className)}
			icon={faBars}
		/>
	),
	eyeSlash: (props: IconProps) => (
		<FontAwesomeIcon
			{...props}
			className={cn('w-4 h-4', props.className)}
			icon={faEyeSlash}
		/>
	),
	microsoft: (props: IconProps) => (
		<FontAwesomeIcon
			{...props}
			className={cn('w-4 h-4', props.className)}
			icon={faMicrosoft}
		/>
	),
	google: (props: IconProps) => (
		<FontAwesomeIcon
			{...props}
			className={cn('w-4 h-4', props.className)}
			icon={faGoogle}
		/>
	),
	cart: (props: IconProps) => (
		<FontAwesomeIcon
			{...props}
			className={cn('w-4 h-4', props.className)}
			icon={faCartShopping}
		/>
	),
	search: (props: IconProps) => (
		<FontAwesomeIcon
			{...props}
			className={cn('w-4 h-4', props.className)}
			icon={faMagnifyingGlass}
		/>
	),
	cross: (props: IconProps) => (
		<FontAwesomeIcon
			{...props}
			className={cn('w-4 h-4', props.className)}
			icon={faXmark}
		/>
	),
	star: (props: IconProps) => (
		<FontAwesomeIcon
			{...props}
			className={cn('w-4 h-4', props.className)}
			icon={faStar}
		/>
	),
	user: (props: IconProps) => (
		<FontAwesomeIcon
			{...props}
			className={cn('w-4 h-4', props.className)}
			icon={faUser}
		/>
	),
	exit: (props: IconProps) => (
		<FontAwesomeIcon
			{...props}
			className={cn('w-4 h-4', props.className)}
			icon={faArrowRightFromBracket}
		/>
	),
	settings: (props: IconProps) => (
		<FontAwesomeIcon
			{...props}
			className={cn('w-4 h-4', props.className)}
			icon={faGear}
		/>
	),
	upload: (props: IconProps) => (
		<FontAwesomeIcon
			{...props}
			className={cn('w-4 h-4', props.className)}
			icon={faUpload}
		/>
	),
	trash: (props: IconProps) => (
		<FontAwesomeIcon
			{...props}
			className={cn('w-4 h-4', props.className)}
			icon={faTrash}
		/>
	),
	circleCheck: (props: IconProps) => (
		<FontAwesomeIcon
			{...props}
			className={cn('w-4 h-4', props.className)}
			icon={faCircleCheck}
		/>
	),
	spinner: (props: IconProps) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="M21 12a9 9 0 1 1-6.219-8.56" />
		</svg>
	),
}
