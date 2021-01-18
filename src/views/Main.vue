<template>
    <div class="main">
        <TopTracks/>
    </div>
</template>

<script>
// @ is an alias to /src
import TopTracks from '@/components/TopTracks.vue'

export default {
    components: {
        'TopTracks':TopTracks
    }
}
</script>
