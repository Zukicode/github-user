import React, { useEffect } from 'react'

import styles from './App.module.scss'

import { Header } from '../Header/Header'
import { Search } from '../Search/Search'
import { Container } from '../Container/Container'
import { User } from '../User/User'

import { fetchUserByName } from 'features/searchSlice/searchSlice'
import { useAppDispatch } from 'hooks/hooks'

export const App = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchUserByName('zukicode'))
	}, [])

	return (
		<div className={styles.App}>
			<Container>
				<Header />
				<Search />
				<User />
			</Container>
		</div>
	)
}
