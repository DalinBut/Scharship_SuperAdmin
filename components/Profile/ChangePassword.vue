<template>
<div>
    <section class="">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div class="lg:w-[400px] md:w-[480px] sm:[480px] p-5 bg-gray-200 rounded-lg shadow md:mt-0 sm:max-w-md dark:border-gray-700">
                <div class="text-center">
                    <h1 class="block text-xl font-bold text-yellow-400">Change Password</h1>
                </div>
                <form @click.prevent="changePassword" class="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                    <div>
                        <label for="currrent_passwprd" class="block mb-2 text-sm font-medium text-gray-600">Current Password</label>
                        <input v-model="old_password" type="current_password" name="current_password" id="current_password" class="bg-gray-400 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400">
                    </div>
                    <div class="my-96">
                        <label for="new_password" class="block mb-2 text-sm font-medium text-gray-600">New Password</label>
                        <input v-model="new_password" type="password" name="new_password" id="new_password" class="bg-gray-400 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400">
                    </div>
                    <!-- <div>
                        <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-600">Confirm Password</label>
                        <input type="password" name="confirm-password" id="confirm-password" value="" class="bg-gray-400 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400" required>
                    </div> -->
                    <button type="submit" class="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Reset passwod</button>
                </form>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      old_password: '',
      new_password: ''
    };
  },
  methods: {
    async changePassword() {
        try {
            const token = localStorage.getItem('store_token');
          // Make an API request to change the password
            const response = await fetch('http://localhost:8000/api/change_password', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                },
                credentials: 'include',
                body: JSON.stringify({
                old_password: this.old_password,
                new_password: this.new_password
                })
            })

            if (response.ok) {
              // Password changed successfully
              console.log('Password changed successfully!');
              alert('Password changed successfully!');
              // this.currentPassword = '';
              // this.newPassword = '';
            } else {
              // Handle the error
              console.error('Password change failed!');
              alert('Password change failed!');
            }
        }   
        catch (error) {
      // Handle network errors or other exceptions
      console.error('Error:', error);
    }
  }
}
}
</script>