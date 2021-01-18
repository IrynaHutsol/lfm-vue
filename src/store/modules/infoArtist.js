import { infoArtistService } from '../../services';

const state = {
    infoArtist:[]
}
const getters = {
    getInfoArtist: state => state.infoArtist
}
const mutations = {
    SET_INFOARTIST(state, payload){
        state.infoArtist = payload
    }
}
const actions = {
    GET_INFOARTIST({commit}){
        return infoArtistService.get_infoArtist().then((infoArtist) => {
            commit('SET_INFOARTIST',infoArtist)
            return infoArtist
        })
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}