<template>
    <component :is="tag"
               class="badge"
               :class="
               [`badge-${type}`,
                rounded ? `badge-pill` : '',
                circle && 'badge-circle'
               ]">
        <slot>
            <i v-if="icon" :class="icon"></i>
        </slot>
    </component>
</template>
<script>
export default {
  name: "badge",
  props: {
    tag: {
      type: String,
      default: "span",

    },
    rounded: {
      type: Boolean,
      default: false,

    },
    circle: {
      type: Boolean,
      default: false,

    },
    icon: {
      type: String,
      default: "",

    },
    type: {
      type: String,
      default: "default",

    }
  }
};
</script>
<style>
</style>
