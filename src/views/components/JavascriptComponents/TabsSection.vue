<template>
    <div class="row justify-content-center">

        <div class="col-lg-6 ">


            <tabs fill class="flex-column flex-md-row">
                <card shadow>
                    <tab-pane title="JAVA">
                        <p class="description">+++++++</p>
                        <p class="description">R+++</p>
                    </tab-pane>

                    <tab-pane title="C++">
                        <p class="description">++++++++</p>
                    </tab-pane>

                    <tab-pane title="SORU-CEVAP">
                        <p class="description">++++++++++</p>
                    </tab-pane>
                </card>
            </tabs>
        </div>
    </div>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
export default {
  components: {
    Tabs,
    TabPane
  }
};
</script>
<style>
</style>
