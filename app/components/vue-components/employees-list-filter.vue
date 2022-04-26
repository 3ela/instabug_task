<template>
  <div class="c-employees_filter_container">
    <input 
      type='text'
      v-model='text'
      @input='updateSearchText(text)'
    />

    <button 
      type='button'
      class='c-btn-pri'
      @click="text = '';clearSearchText()"
    >
      Clear
    </button>
    <!-- {{ searchText }} -->
    <!-- {{ text }} -->
  </div>

</template>

<script>
export default {
  name: 'employees-list-filter',

  props: ['searchText', 'employees', 'updateSearchText', 'clearSearchText'],
  created() {
    if(this.searchText && this.searchText != '') {
      this.text = this.searchText;
    }
  },
  data() {
    return {
      text: '',
    }
  }
}
</script>
