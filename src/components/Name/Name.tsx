import { FC } from 'react'

import styles from './Name.module.scss'
import { useAppSelector } from 'hooks/hooks'
import { convertDate } from 'utils/convertDate'

export const Name: FC = () => {
	const { user } = useAppSelector(state => state.search)

	return (
		<div className={styles.name}>
			<div className={styles.title}>
				<h1>{user.name}</h1>
				<p className={styles.joined}>{convertDate(user.created_at)}</p>
			</div>
			<p className={styles.login}>@{user.login}</p>
		</div>
	)
}
