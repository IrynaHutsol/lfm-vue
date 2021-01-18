import Vue from 'vue'
import Vuex from 'vuex'
import topTracks from './modules/topTracks'
import infoArtist from './modules/infoArtist'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        topTracks,
        infoArtist
    }
})