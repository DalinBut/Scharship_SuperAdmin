<script>
export default {
  data() {
    return {
      schools: []
    };
  },
  mounted() {
   this.getAnnouncement();
  },
  methods: {
    async getAnnouncement() {
      try {
        const token = localStorage.getItem('store_token');
        const response = await fetch('http://localhost:8000/api/announcement', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          credentials:'include'
        });
        if (response.ok) {
          const data = await response.json();
          this.schools = data.data;
          // console.log(data);
          console.log(this.schools)
        } else {
          // Handle the case where the request failed
          console.error('Failed to fetch users:', response.status);
        }
      } catch (error) {
        console.error('Fetch users error:', error);
        // Handle fetch error
      }
    },
    async deleteDetail(sid){
      if (confirm("Are you sure you want to delete?")){
        const token = localStorage.getItem('store_token');
        const result = await fetch(`http://localhost:8000/api/announcement/${sid}`, {
            method: 'DELETE',
            headers: {
              // 'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            credentials:'include'
          });
        // alert("deleted successfully")
        this.getAnnouncement();
      }

    },
  }
};
</script>
<template>
<SearchBar class="flex justify-end mt-5"/>
<!-- <h1 class="text-xl font-bold">History</h1> -->
<div class="flex flex-col">
  <div class="overflow-x-auto">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
                <!-- TABLE -->
                <div class="bg-white shadow rounded-sm my-2.5 overflow-x-auto">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-center">Id</th>
                                <th class="py-3 px-6 text-left">University</th>
                                <th class="py-3 px-6 text-left">Degree</th>
                                <th class="py-3 px-6 text-left">Deadline</th>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody v-if="schools.length > 0" class="text-gray-600 text-sm">
                            <tr v-for="school in schools" :key="school.id" class="border-b border-gray-200 hover:bg-gray-100">
                            <!-- <tr v-for="school in schools" :key="school.id" class="border-b border-gray-200 hover:bg-gray-100"> -->
                                <td class="py-3 px-6 text-center">
                                  {{ school.id }}
                                </td>
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                  {{ school.name }}
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <!-- <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/> -->
                                        </div>
                                        <span>{{ school.level }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex items-center">{{ school.day }} - {{ school.month }} - {{ school.year }}</div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                      <NuxtLink :to="`/university/${school.id}`">
                                          <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                              </svg>
                                          </div>
                                        </NuxtLink>
                                        <button type="button" @click="deleteDetail(school.id)">
                                          <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                              </svg>
                                          </div>
                                        </button>
                                        <!-- <DeleteModal /> -->
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                          <tr  role="status" class="max-w-md  space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse">
                            <td class="py-3 px-6 text-center">
                                <div class="h-2.5 bg-red-700 rounded-full dark:bg-gray-600 w-5 mb-2.5"></div>
                            </td>
                            <td class="">
                              <div class="flex items-center">
                                <div class="w-32 h-2 bg-red-500 rounded-full dark:bg-gray-700"></div>

                              </div>
                              <!-- <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div> -->
                            </td>
                            <td class="">
                              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div>

                            </td>
                            <td class="items-center">
                              <div class="h-2.5 pl-10 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div>

                            </td>
                            <td class="">
                              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div>

                            </td>
                          </tr>
                        </tbody>
                    </table>
                </div>
      </div>
    </div>
  </div>
</div>
</template>
