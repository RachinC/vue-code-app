<template>
    <div class='wrapper'>
        <main class="main">
        <slot name='content'></slot>
        </main>
        <section class='sidebar'>
        <slot name='sidebar'></slot>
        </section>
    </div>
</template>

<script>
export default {
    name: 'lay-out',
}
</script>

<style scoped>
.wrapper {
    height: 100%;
    padding: 32px;
    display: flex;
    flex-direction: row;
    background-color: #f3efef;
    justify-content: space-around;
}

.main {
    width: 55%;
    padding: 16px 16px 16px 48px;
}

.sidebar {
    width: 25%;
    padding: 16px;
}
</style>