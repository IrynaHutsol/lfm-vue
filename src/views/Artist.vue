<template>
    <div class="artist">
        <InfoArtist/>
    </div>
</template>

<script>
// @ is an alias to /src
import InfoArtist from '@/components/InfoArtist.vue'

export default {
    components: {
        'InfoArtist': InfoArtist
    }
}
</script>