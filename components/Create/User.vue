<template>
    <div>
        <!-- component -->
<!-- Container -->
<div class="flex flex-wrap mt-5 w-full content-center justify-center">
  
  <!-- Login component -->
  <div class="flex shadow-md">
    <!-- Login form -->
    <div class="flex flex-wrap content-center justify-center rounded-l-md bg-gray-200" style="width: 24rem; height: 32rem;">
      <div class="w-72">
        <!-- Heading -->
        <!-- Form -->
        <form class="mt-4" @click.prevent="submitForm">
          <div class="mb-3">
            <label class="mb-2 block text-2xs text-yellow-500 font-mono font-bold">School Name</label>
            <input type="text" v-model="firstname" placeholder="Enter your School Name" class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>
          <div class="mb-3">
            <label class="mb-2 block text-2xs text-yellow-500 font-mono font-bold">Short Form</label>
            <input type="text" v-model="lastname" placeholder="Short Form" class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>
          <div class="mb-3">
            <label class="mb-2 block text-2xs text-yellow-500 font-mono font-bold">Phone Mumber</label>
            <input type="tel" v-model="phone" placeholder="Enter your phone number" class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>
          <div class="mb-3">
            <label class="mb-2 block text-2xs text-yellow-500 font-mono font-bold">Email</label>
            <input type="email" v-model="email" placeholder="Enter your email" class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>

          <div class="mb-3">
            <label class="mb-2 block text-2xs text-yellow-500 font-mono font-bold">Password</label>
            <input type="password" v-model="password" placeholder="*****" class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>
          <div class="mb-3 flex justify-end">
            <button type="submit" class="mb-1.5 block text-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2.5 rounded-md">Create</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Login banner -->
    <div class="flex flex-wrap content-start justify-center rounded-r-md bg-yellow-400 bg-opacity-80" style="width: 24rem; height: 32rem;">
      <img class="w-[50%] h-[60%] bg-center bg-no-repeat bg-cover rounded-md mt-10" src="data:image/jpeg;base64,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">
    </div>

  </div>
</div>
    </div>
</template>
<!-- return {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  password: '',
} -->
<script>
export default {
  name: 'user',
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
    }
  },
  methods: {
  async submitForm() {
    const formData = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phone: this.phone,
      password: this.password
    };

    try {
      const token = localStorage.getItem('store_token');
      
      const response = await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

        if (response.ok) {
          // Handle successful response if needed
          const fn = getCurrentInstance().appContext.config.globalProperties;
      fn.$swal.fire({
          title: "hello",
          timer: 2000,
      });
        } else if (response.status === 401) {
          // Handle unauthorized error, e.g., refresh token expired or invalid
          console.error('Unauthorized: Refresh token expired or invalid');
        } else {
          // Handle other errors
          console.error('Error:', response.statusText);
        }
        this.$router.push('/dashboard');
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error:', error);
    }
  }
}

}
</script>