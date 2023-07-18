import React from 'react'

import styles from './User.module.scss'
import { Name } from '../Name/Name'
import { Bio } from '../Bio/Bio'
import { Dashboard } from '../Dashboard/Dashboard'
import { Description } from '../Description/Description'
import { useAppSelector } from 'hooks/hooks'
import { Loader } from 'components/Loader/Loader'

export const User = () => {
	const { status, user } = useAppSelector(state => state.search)

	const redirectToGithub = () =>
		(window.location.href = `https://github.com/${user.login}`)

	if (status === 'idle') {
		return <Loader />
	}

	return (
		<div className={styles.user}>
			<div className={styles.image}>
				<img
					onClick={() => redirectToGithub()}
					width='150px'
					src={user.avatar_url}
					alt='profile'
				/>
			</div>

			<div className={styles.info}>
				<Name />
				<Bio />
				<Dashboard />
				<Description />
			</div>
		</div>
	)
}
