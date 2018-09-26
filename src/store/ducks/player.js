import Immutable from 'seamless-immutable';

export const Types = {
  SET_SONG_REQUEST: 'player/SET_SONG_REQUEST',
  SET_SONG_SUCCESS: 'player/SET_SONG_SUCCESS',
  SET_SONG_FAILURE: 'player/SET_SONG_FAILURE',
};

const initalState = Immutable({
  currentSong: null,
});

export default function player(state = initalState, action) {
  switch (action.type) {
    case Types.setSongSuccess:
      return { ...state, currentSong: action.payload.song }
    default:
      return state;
  };
};


export const Creators = {
  setSongRequest: song => ({
    type: Types.SET_SONG_REQUEST,
    payload: { song },
  }),

  setSongSuccess: song => ({
    type: Types.SET_SONG_SUCCESS,
    payload: { song },
  }),

  setSongFailure: error => ({
    type: Types.SET_SONG_FAILURE,
    payload: { error },
  }),
};
