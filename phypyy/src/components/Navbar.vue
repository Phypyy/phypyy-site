<template>
    <ul class="navbar">
        <li><router-link to="/home">PHYPYY</router-link></li>
        <ul class="action">
            <li><router-link to="/work">WORK</router-link></li>
            <li><a href="../../file/Supanut_Resume.pdf" class="action">RESUME</a></li>
        </ul>
    </ul>
 
</template>

<script>
export default {
    name: 'Navbar',
};
</script>

<style>
.navbar{
    padding: 24px 72px;
}
.action {
    float: right;
}
.navbar a{
    color: var(--pyy-text-secondary);
    font-size: var(--pyy-font-size-1);
}
.navbar a:hover{
    color: var(--pyy-link-primary);
}
</style>
