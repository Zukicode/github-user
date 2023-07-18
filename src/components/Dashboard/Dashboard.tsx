import React from 'react'

import styles from './Dashboard.module.scss'
import { useAppSelector } from 'hooks/hooks'

export const Dashboard = () => {
	const { user } = useAppSelector(state => state.search)

	const redirectToLink = (link: string) => (window.location.href = link)

	return (
		<div className={styles.dashboard}>
			<div
				onClick={() =>
					redirectToLink(`https://github.com/${user.login}?tab=repositories`)
				}
				className={styles.blockDash}
			>
				<p>Repos</p>
				<h1>{user.public_repos}</h1>
			</div>
			<div
				onClick={() =>
					redirectToLink(`https://github.com/${user.login}?tab=followers`)
				}
				className={styles.blockDash}
			>
				<p>Followers</p>
				<h1>{user.followers}</h1>
			</div>
			<div
				onClick={() =>
					redirectToLink(`https://github.com/${user.login}?tab=following`)
				}
				className={styles.blockDash}
			>
				<p>Following</p>
				<h1>{user.following}</h1>
			</div>
		</div>
	)
}
