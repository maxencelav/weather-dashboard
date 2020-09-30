<template>
  <b-card
    title="Card Title"
    img-src="http://placeholder.com/200x100"
    img-alt="Image"
    img-top
    tag="div"
    class="mb-2"
  >
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</template>

<script>
export default {
  props: {
    city: String
  }
}
</script>

<style>
</style>
