import { topTracksService } from '../../services';

const state = {
    topTracks:[]
}
const getters = {
    getTopTracks: state => state.topTracks
}
const mutations = {
    SET_TOPTRACKS(state, payload){
        state.topTracks = payload
    }
}
const actions = {
    GET_TOPTRACKS({commit}){
        return topTracksService.get_topTracks().then((topTracks) => {
            commit('SET_TOPTRACKS',topTracks)
            return topTracks
        })
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}