<template>
    <div class="menu">
        <div id="nav">
            <router-link to="/">Top Tracks</router-link> |
            <router-link to="/search">Search</router-link> |
            <router-link to="/artist">Artist</router-link>
        </div>
    </div>
</template>

<style>
.menu {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    height: 100%;
}

#nav {
    padding: 26px;
}

#nav a {
    font-weight: bold;
    font-size: 22px;
    color: #54616f;
}

#nav a.router-link-exact-active {
    color: #ba0000;
}
</style>