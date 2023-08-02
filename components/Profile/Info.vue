<template>
    <div>
        <div class="container bg-gray-200 rounded-lg lg:w-[480px] md:w-[480px]">
            <div class="text-center pt-4 sm:pt-7">
                <h1 class="block text-xl font-bold text-yellow-400">My Profile</h1>
            </div>
            <form @submit.prevent="update">
                <table>
                    <tr class="h-16">
                        <td rowspan="2" class="w-64 p-10"><img src="https://iebuyexpress.com/icon.png" alt="" class="w-20"></td>
                        <td><input type="text" name="fname" id="fname" v-model="firstname" class="bg-gray-400 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"></td>
                    </tr>
                    <tr class="h-16">
                        <td><input type="text" name="lname" id="lname" value="But" class="bg-gray-400 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"></td>
                    </tr>
                    <tr>
                        <!-- <td class="w-64 p-10"><input type="text" name="lname" id="lname" value="Role" class="bg-gray-400 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"></td> -->
                        <td colspan="2" class="pl-10 pb-5"><input type="text" name="phone" id="phone" value="09878997" class="bg-gray-400 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="pl-10 pb-5"><input type="text" name="lname" id="lname" value="butdalin25@gmail.com" class="bg-gray-400 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"></td>
                    </tr>
                </table>
                <div class="flex justify-end pr-10 mb-5">
                    <button type="submit" class="text-white mb-5 bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'user',
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      // users: [],
    //   password: '',
    }
  },
  methods: {
  async submitForm() {
    const formData = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phone: this.phone,
    //   password: this.password
    };

    try {
      const token = localStorage.getItem('store_token');
      
      const response = await fetch('http://localhost:8000/api/users/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

        if (response.ok) {
          // Handle successful response if needed
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
},
mounted() {
    this.fetchData();
},
async fetchData() {
    try {
      const token = localStorage.getItem('store_token');
      const response = await fetch('http://localhost:8000/api/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.json();
        // Pre-fill the input fields with the previous data
        this.firstname = data.firstname,
        this.lastname = data.lastname,
        this.email = data.email;
        this.phone = data.phone;
        // this.password = data.password;
        // Set other properties as needed
      } else {
        // Failed to fetch previous data
        // Handle the error and provide appropriate feedback to the user
        const errorData = await response.json();
        console.error('Failed to fetch previous data:', errorData);
      }
    } catch (error) {
      console.error('Fetch previous data error:', error);
      // Handle fetch error
    }
  }
}

</script>