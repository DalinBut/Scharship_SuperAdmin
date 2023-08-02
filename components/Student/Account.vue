<template>
    <SearchBar class="flex justify-end mt-5"/>
    <div class="flex flex-col">
      <div class="overflow-x-hidden">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
    
                    <!-- TABLE -->
                    <div class="bg-white shadow-sm rounded-md my-1 overflow-x-auto">
                        <table class="min-w-max w-full table-auto">
                            <thead>
                                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th class="py-3 px-6 text-center">Id</th>
                                    <th class="py-3 px-6 text-left">Name</th>
                                    <th class="py-3 px-6 text-left">Phone</th>
                                    <th class="py-3 px-6 text-center">Email</th>
                                    <th class="py-3 px-6 text-center">Created</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-600 text-sm" v-for="user in users" :key="user.id">
                                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                                        <td class="py-3 px-6 text-center">
                                            {{ user.id }}
                                        </td>
                                        <td class="py-3 px-6 text-left whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="mr-2">
                                                    <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                                </div>
                                                {{ user.lastname }} {{ user.firstname }}
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <span>{{ user.phone }}</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            {{ user.email }}
                                        </td>
                                        <td class="py-3 px-6 text-center">{{ user.created_at }}</td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
          </div>
        </div>
      </div>
    </div>
    </template>
    <script>
    export default {
      data() {
        return {
          users: []
        };
      },
      mounted() {
       this.getUsers();
      },
      methods: {
        async getUsers() {
          try {
            const token = localStorage.getItem('store_token');
            const response = await fetch('http://localhost:8000/api/show_student', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              credentials:'include'
            });
            if (response.ok) {
              const data = await response.json();
              this.users = data.data;
              console.log(this.users)
            } else {
              console.error('Failed to fetch users:', response.status);
            }
          } catch (error) {
            console.error('Fetch users error:', error);
          }
        }
      }
    };
    </script>
    