import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUserByName = createAsyncThunk(
	'users/fetchUserByName',
	async (name: string) => {
		try {
			const response = await axios.get(`https://api.github.com/users/${name}`)
			return response.data
		} catch (error) {
			console.log(error)
		}
	}
)

export interface SearchState {
	status: 'idle' | 'done' | 'fail'
	user: any | null
}

const initialState: SearchState = {
	status: 'idle',
	user: null,
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchUserByName.pending, state => {
			state.status = 'idle'
		})
		builder.addCase(
			fetchUserByName.fulfilled,
			(state, action: PayloadAction<any>) => {
				state.status = 'done'
				state.user = action.payload
			}
		)
		builder.addCase(
			fetchUserByName.rejected,
			(state, action: PayloadAction<any>) => {
				state.status = 'fail'
				state.user = null
			}
		)
	},
})

export const {} = searchSlice.actions

export default searchSlice.reducer
