import { FC } from 'react'

import styles from './Bio.module.scss'
import { useAppSelector } from 'hooks/hooks'

export const Bio: FC = () => {
	const { user } = useAppSelector(state => state.search)

	return (
		<div className={styles.bio}>
			<p>{user.bio ? user.bio : 'No bio'}</p>
		</div>
	)
}
