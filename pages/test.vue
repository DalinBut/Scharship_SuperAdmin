<script>
export default {
  data() {
    return {
      devices: null
    };
  },
  mounted() {
   this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        const token = localStorage.getItem('store_token');
        const response = await fetch('http://localhost:8000/api/my-device', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          credentials:'include'
        });
        if (response.ok) {
          const data = await response.json();
          this.devices = data;
          // console.log(data);
          console.log(this.devices)
        } else {
          // Handle the case where the request failed
          console.error('Failed to fetch users:', response.status);
        }
      } catch (error) {
        console.error('Fetch users error:', error);
        // Handle fetch error
      }
    }
  }
};
</script>
<template>
    <div v-if="devices" class="m-20">
    <!-- <div v-for="device in devices" :key="device" class="m-20"> -->
        <p>{{ devices.browser }}</p>
        <p>{{ devices.device }}</p>
        <p>{{ devices.platform }}</p>
    </div>
</template>