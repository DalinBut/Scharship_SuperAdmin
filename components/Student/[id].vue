<template>
  <div>
      <!-- <div v-if="detail">
              {{ detail.lastname }}
          </div> -->
      <div v-if="detail" class="bg-white text-gray-700 rounded-lg shadow-lg p-6 overflow-y-auto h-screen flex flex-col items-center">
          <div class="font-bold flex justify-end mb-0 font-mono text-2xl text-red-500">
              <!-- <button v-on:click="toggleModal()">
                      <svg class="w-5 h-5 text-gray-700 hover:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                      </svg>
                  </button> -->
          </div>
          <!-- <div class="border-r-2 h-screen w-52"> -->
          <div class="flex flex-row bg-slate-300 p-5 rounded-md mb-20">
              <div class="border-r-2 h-[600px] w-52">
                  <div class="flex flex-wrap justify-center">
                      <img src="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?w=176&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7" class="h-auto max-w-sm w-40" alt="" />
                  </div>
                  <p class="font-extrabold text-xl">{{ detail.lastname }} {{ detail.firstname }}</p>
                  <!-- <p>20mc, Sangkat Steung Mean Chey, Khan Mean Chey, Phnom Penh</p> -->
                  <p>{{ detail.address }}</p>
                  <p>{{ detail.tel }}</p>
                  <p>{{ detail.email }}</p>
                  <table class="table-auto">
                      <thead>
                          <tr>
                              <th class="text-base">Gender</th>
                          </tr>
                          <tr>
                              <td>{{ detail.gender }}</td>
                          </tr>
                          <tr>
                              <th class="text-base">Date of Birth</th>
                          </tr>
                          <tr>
                              <td>{{ detail.dob }}-{{ detail.mob }}-{{ detail.yob }}</td>
                          </tr>
                          <tr>
                              <th class="text-base">Family Information</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th>Father</th>
                          </tr>
                          <tr>
                              <td>Name</td>
                              <td>{{ detail.father_name }}</td>
                          </tr>
                          <tr>
                              <td>Job</td>
                              <td>{{ detail.father_job }}</td>
                          </tr>
                          <tr>
                              <td>Status</td>
                              <td>{{ detail.father_status }}</td>
                          </tr>
                          <tr>
                              <th>Mother</th>
                          </tr>
                          <tr>
                              <td>Name</td>
                              <td>John</td>
                          </tr>
                          <tr>
                              <td>Job</td>
                              <td>Farmer</td>
                          </tr>
                          <tr>
                              <td>Status</td>
                              <td>Alive</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
  
              <div class="h-[660px] w-96 pl-5 bg-slate-300">
                  <p class="font-bold text-lg">Profile</p>
                  <hr class="h-[1px] w-auto mx-auto mb-4 bg-gray-700 border-0 rounded md:mb-5 md:mt-2 dark:bg-gray-900" />
                  <p class="">
                      {{ detail.profile }}
                  </p>
                  <table class="table-auto">
                      <thead>
                          <tr>
                              <th class="text-lg">Education</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th class="text-base">High School</th>
                          </tr>
                          <tr>
                              <td>Name</td>
                              <td>{{ detail.high_school }}</td>
                          </tr>
                          <tr>
                              <td>End Year</td>
                              <td>{{ detail.end_year }}</td>
                          </tr>
                          <tr>
                              <td>Grade</td>
                              <td>{{ detail.grade }}</td>
                          </tr>
                          <tr>
                              <th class="text-base">University</th>
                          </tr>
                          <tr>
                              <td>Name</td>
                              <td>{{ detail.university_name }}</td>
                          </tr>                       
                          <tr>
                              <td>Field</td>
                              <td>{{ detail.field }}</td>
                          </tr>
                          <tr>
                              <td>GPA</td>
                              <td>{{ detail.gpa }}</td>
                          </tr>
                          <tr>
                              <td>Gratuation Year</td>
                              <td>{{ detail.gratuation_year }}</td>
                          </tr>
                          <tr>
                              <th class="text-base">Request to</th>
                          </tr>
                          <tr>
                              <td>University</td>
                              <td>{{ detail.to_university }}</td>
                          </tr>
                          <tr>
                              <td>Field</td>
                              <td>{{ detail.to_field }}</td>
                          </tr>
                          <tr>
                              <td>Level of Study</td>
                              <td>{{ detail.level }}</td>
                          </tr>
                          <tr>
                              <td>Scholarship</td>
                              <td>{{ detail.percentage }}</td>
                          </tr>
                          <tr>
                              <td>Start Year</td>
                              <td>{{ detail.start_year }}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
          <div>
              <embed src="https://files.instapdf.in/wp-content/uploads/pdf-thumbnails/2022/03/simple-resume-format-599.webp" width="600px" height="800px" />
          </div>
          <span class="font-bold py-5">- Transcript</span>
          <div>
              <embed src="https://files.instapdf.in/wp-content/uploads/pdf-thumbnails/2022/03/simple-resume-format-599.webp" width="600px" height="800px" />
          </div>
          <!-- <div class="flex justify-end">
                      <button type="button" class="text-red-500 hover:text-red-700 uppercase font-bold" v-on:click="toggleModal()">Close</button>
                  </div> -->
      </div>
  </div>
  </template>
  
  <script>
  export default {
      data() {
          return {
              detail: []
          };
      },
      mounted() {
          this.studentId = this.$route.params.id;
          this.getDetail(this.studentId);
      },
      methods: {
          async getDetail(studentId) {
              const token = localStorage.getItem("store_token");
              const response = await fetch(`http://localhost:8000/api/student/${studentId}`, {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`
                  },
                  credentials: 'include'
              });
              const data = await response.json();
              this.detail = data.student;
  
              console.log(studentId);
              console.log(this.detail);
          },
      }
  }
  </script>
  
  <style lang="">
  
  </style>
  