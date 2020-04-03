<template>
  <div class="header">
    <title-block />
    <admin-block />
  </div>
</template>

<script>
import titleBlock from './titleBlock.vue'
import adminBlock from './adminBlock.vue'

export default {
  components: {
    titleBlock,
    adminBlock
  }
}
</script>

<style>
</style>
