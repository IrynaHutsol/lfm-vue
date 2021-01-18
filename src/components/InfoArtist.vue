<template>
    <div class="info-artist">
        <h1 class="title">Information about artist</h1>
        <h2>{{infoArtist && infoArtist.name.replace(/([A-Z])/g, ' $1').trim()}}</h2>
        <img :src="infoArtist && infoArtist.image ? `${infoArtist.image[0]['#text']}` : ''" style="max-width: 50px; max-height: 50px;">
        <div class="tags"> 
            <button class="btn-tag" v-for="item in infoArtist && infoArtist.tags.tag" :key="item.name">
                <a :href="`${item.url}`" target="_blank" class="tag">{{item.name}}</a>
            </button>
        </div>
        <p class="content-artist">{{infoArtist && infoArtist.bio.content}}</p>
    </div>
</template>

<script>
export default {
    computed: {
        infoArtist() {
            return this.$store.getters.getInfoArtist.artist
        }
    }
}
</script>

<style scoped>
.info-artist {
    text-align: center;
    margin: 20px;
}
.tags {
    margin-top: 10px;
}
.btn-tag {
    margin: 10px;
    border-radius: 8px;
    background: #d8d0d0;
    border: 1px solid #cac6c6;
    width: 100px;
    height: 40px;
}
.tag {
    color: #ba0000;
    font-weight: bold;
}
.content-artist {
    text-align: justify;
    margin-top: 10px;
    font-size: 17px;
    font-family: sans-serif;
}
</style>