<template>
    <div class="top-tracks">
        <h1 class="title">Top Tracks</h1>
        <b-table striped hover :items="topTracks" :fields="fields">
            <template v-slot:cell(id)="data">
                {{data.index+1}}
            </template>
            <template v-slot:cell(name)="row">
                <router-link to="/artist" @click.native="infoArtist(row.item)">{{row.item.name}}</router-link>
            </template>
            <template v-slot:cell(image)="data">
                <img :src="data.item.image ? `${data.item.image[1]['#text']}` : ''" style="max-width: 50px; max-height: 50px;">
            </template>
            <template v-slot:cell(artist)='data'> 
                <a :href="`${data.item.artist.url}`" target="_blank">{{data.item.artist.url}}</a>
            </template>
        </b-table>
    </div>
</template>

<script>
import { infoArtistService } from '../services';
export default {
    data() {
        return {
            fields: [	
                {
                    key: 'id'
                },
                {
                    key: 'name'
                },
                {
                    key: 'artist.name'
                },
                {
                    key: 'image',
                },
                {
                    key: 'artist'
                }
            ]
        }
    },
    computed: {
        topTracks() {
            return this.$store.getters.getTopTracks
        }
    },
    methods: {
        infoArtist(item){
            infoArtistService.get_infoArtist(item.artist.name.replace(/\s+/g, '')).then((res) => {
                this.$store.commit('SET_INFOARTIST', res)
            })
        }
    }
}
</script>

<style>
.title {
    text-align: center;
    margin: 25px;
}
thead {
    display: none;
}
.table td {
    vertical-align: inherit !important;
}
</style>
