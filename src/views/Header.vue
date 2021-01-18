<template>
    <header class="header">
        <div class="container-header">
            <Logo/>
            <Menu/>
        </div>
    </header>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import Menu from '@/components/Menu.vue'

export default {
    components: {
        'Logo': Logo,
        'Menu': Menu
    },
    created(){
        this.$store.dispatch('GET_TOPTRACKS')
  }
}
</script>

<style>
.header {
    background: black;
}
.container-header {
    width: 940px;
    margin: 0 auto;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>