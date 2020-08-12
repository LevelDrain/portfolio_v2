<template>
    <div id="nav">
        <header id="header">
            <h1>This is the header.</h1>
            <nav id="header-nav">
                <ul>
                    <router-link tag="li" to="/">Home</router-link>
                    <router-link tag="li" to="/about">About</router-link>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>