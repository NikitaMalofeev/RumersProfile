import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { ProfileData, ShowProfileRequest } from '../types/types';
import { showProfile } from '../api/getAllRumers';


interface ProfileState {
    profile: ProfileData | null;
    loading: boolean;
}

const initialState: ProfileState = {
    profile: null,
    loading: false,
};

export const fetchProfileThunk = createAsyncThunk<
    ProfileData,
    string,
    { rejectValue: string }
>('profile/fetchProfile', async (nickname, { dispatch, rejectWithValue }) => {
    try {
        const body: ShowProfileRequest = {
            meta: {
                session_id: '"71ba015c-c741-4c71-944a-93d931e5a965',
                cmd: 'show_profile_me',
            },
            data: { nickname: 'damirdamir' },
        };

        const res = await showProfile(body);
        return res.data;
    } catch (err: any) {

        return rejectWithValue(err.response?.data?.message || 'Ошибка');
    }
});

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        clearProfile: (state) => {
            state.profile = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(
                fetchProfileThunk.fulfilled,
                (state, action: PayloadAction<ProfileData>) => {
                    state.loading = false;
                    state.profile = action.payload;
                },
            )
            .addCase(fetchProfileThunk.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
