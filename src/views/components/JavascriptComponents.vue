<template>
    <section class="section section-components">
        <div class="container">
            <h3 class="h4 text-success font-weight-bold mb-4">Popüler Makaleler</h3>
            <tabs-section></tabs-section>
            <progress-section></progress-section>




            <typography></typography>

        </div>
    </section>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import TabsSection from "./JavascriptComponents/TabsSection";
import Typography from "./JavascriptComponents/Örnekler";

export default {
  components: {
    TabPane,
    Tabs,
      TabsSection,
      Typography
  }
};
</script>
<style>
</style>
