import { FC } from 'react'

import styles from './Description.module.scss'
import { useAppSelector } from 'hooks/hooks'

export const Description: FC = () => {
	const { user } = useAppSelector(state => state.search)

	return (
		<div className={styles.description}>
			<div
				className={
					user.location
						? styles.descriptionBlock
						: `${styles.descriptionBlock} ${styles.nonactive}`
				}
			>
				<div className={styles.icon}>
					<svg viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
						<path d='M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z' />
						<path d='M0 0h48v48H0z' fill='none' />
					</svg>
				</div>
				<p className={styles.content}>
					{user.location ? user.location : 'Not Available'}
				</p>
			</div>
			<div
				className={
					user.twitter_username
						? styles.descriptionBlock
						: `${styles.descriptionBlock} ${styles.nonactive}`
				}
			>
				<div className={styles.icon}>
					<svg
						enableBackground='new 0 0 56.693 56.693'
						viewBox='0 0 56.693 56.693'
					>
						<path d='M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z' />
					</svg>
				</div>
				<p className={styles.content}>
					{user.twitter_username ? user.twitter_username : 'Not Available'}
				</p>
			</div>
			<div
				className={
					user.blog
						? styles.descriptionBlock
						: `${styles.descriptionBlock} ${styles.nonactive}`
				}
			>
				<div className={styles.icon}>
					<svg viewBox='0 0 640 512'>
						<path d='M598.6 41.41C570.1 13.8 534.8 0 498.6 0s-72.36 13.8-99.96 41.41l-43.36 43.36c15.11 8.012 29.47 17.58 41.91 30.02c3.146 3.146 5.898 6.518 8.742 9.838l37.96-37.96C458.5 72.05 477.1 64 498.6 64c20.67 0 40.1 8.047 54.71 22.66c14.61 14.61 22.66 34.04 22.66 54.71s-8.049 40.1-22.66 54.71l-133.3 133.3C405.5 343.1 386 352 365.4 352s-40.1-8.048-54.71-22.66C296 314.7 287.1 295.3 287.1 274.6s8.047-40.1 22.66-54.71L314.2 216.4C312.1 212.5 309.9 208.5 306.7 205.3C298.1 196.7 286.8 192 274.6 192c-11.93 0-23.1 4.664-31.61 12.97c-30.71 53.96-23.63 123.6 22.39 169.6C293 402.2 329.2 416 365.4 416c36.18 0 72.36-13.8 99.96-41.41L598.6 241.3c28.45-28.45 42.24-66.01 41.37-103.3C639.1 102.1 625.4 68.16 598.6 41.41zM234 387.4L196.1 425.3C181.5 439.1 162 448 141.4 448c-20.67 0-40.1-8.047-54.71-22.66c-14.61-14.61-22.66-34.04-22.66-54.71s8.049-40.1 22.66-54.71l133.3-133.3C234.5 168 253.1 160 274.6 160s40.1 8.048 54.71 22.66c14.62 14.61 22.66 34.04 22.66 54.71s-8.047 40.1-22.66 54.71L325.8 295.6c2.094 3.939 4.219 7.895 7.465 11.15C341.9 315.3 353.3 320 365.4 320c11.93 0 23.1-4.664 31.61-12.97c30.71-53.96 23.63-123.6-22.39-169.6C346.1 109.8 310.8 96 274.6 96C238.4 96 202.3 109.8 174.7 137.4L41.41 270.7c-27.6 27.6-41.41 63.78-41.41 99.96c-.0001 36.18 13.8 72.36 41.41 99.97C69.01 498.2 105.2 512 141.4 512c36.18 0 72.36-13.8 99.96-41.41l43.36-43.36c-15.11-8.012-29.47-17.58-41.91-30.02C239.6 394.1 236.9 390.7 234 387.4z' />
					</svg>
				</div>
				<p className={styles.content}>
					{user.blog ? user.blog : 'Not Available'}
				</p>
			</div>
			<div
				className={
					user.company
						? styles.descriptionBlock
						: `${styles.descriptionBlock} ${styles.nonactive}`
				}
			>
				<div className={styles.icon}>
					<svg enableBackground='new 0 0 91 91' viewBox='0 0 91 91'>
						<g>
							<path d='M52.7,19.1H19.9v53.2h32.8V19.1z M34.7,62.2h-3.4v-6.2h3.4V62.2z M34.7,49.7h-3.4v-6.2h3.4V49.7z M34.7,37.3h-3.4v-6.2h3.4   V37.3z M45,62.2h-3.4v-6.2H45V62.2z M45,49.7h-3.4v-6.2H45V49.7z M45,37.3h-3.4v-6.2H45V37.3z' />
							<path d='M75.2,65.6V40.9l-19.7,0v31.4h13C72.2,72.3,75.2,69.3,75.2,65.6z M67.6,62.3H61V59h6.6V62.3z M67.6,54H61v-3.4h6.6V54z' />
						</g>
					</svg>
				</div>
				<p className={styles.content}>
					{user.company ? user.company : 'Not Available'}
				</p>
			</div>
		</div>
	)
}
