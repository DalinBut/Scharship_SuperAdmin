<template>
    <button @click="showAlert">Show Alert</button>
  </template>
  
  <script>
  export default {
    methods: {
      showAlert() {
        alert('Show');
        // this.$swal.fire('Hello, World!', 'This is a SweetAlert2 example.', 'success');
      },
    },
  };
  </script>