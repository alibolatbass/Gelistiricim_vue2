<template>
    <div>
        <hero></hero>
        <javascript-components></javascript-components>
        <icons></icons>
        <examples></examples>
        <br> </br>
        <br> </br>
        <br> </br>

        <carousel></carousel>
    </div>
</template>
<script>
    import Hero from "./components/Hero";
    import JavascriptComponents from "./components/JavascriptComponents";
    import Carousel from "./components/Carousel";
    import Examples from "./components/Examples";


    export default {
        name: "components",
        components: {
            Hero,
            JavascriptComponents,
            Carousel,
            Examples
        }
    };
</script>
