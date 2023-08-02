<script setup>
    const { data:count_users} = await useFetch('http://127.0.0.1:8000/api/count_users')
    const { data:count_school} = await useFetch('http://127.0.0.1:8000/api/count_school')
    const { data:accept} = await useFetch('http://127.0.0.1:8000/api/count_accept')
    const { data:reject} = await useFetch('http://127.0.0.1:8000/api/count_reject')
</script>

<template>
<section class="max-w-7xl mx-auto py-4 px-5">
    <div class="flex justify-between items-center border-b border-gray-300">
        <h1 class="text-2xl font-semibold pt-2 pb-6">Dashboard</h1>
    </div>

    <!-- STATISTICS -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">
        <div class="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
            <div class="space-y-2">
                <p class="text-xs text-gray-400 uppercase">Total Users</p>
                <div class="flex items-center space-x-2">
                    <h1 class="text-xl font-semibold">{{ count_users }}</h1>
                    <!-- <p class="text-xs bg-green-50 text-green-500 px-1 rounded">+7.4</p> -->
                </div>
            </div>
            <svg class="w-12 h-12 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
        </div>
        <div class="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
            <div class="space-y-2">
                <p class="text-xs text-gray-400 uppercase">Total University</p>
                <div class="flex items-center space-x-2">
                    <h1 class="text-xl font-semibold">{{ count_school }}</h1>
                    <!-- <p class="text-xs bg-green-50 text-green-500 px-1 rounded">+4.5</p> -->
                </div>
            </div>
            <svg class="w-12 h-12 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
            </svg>
        </div>

        <div class="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
            <div class="space-y-2">
                <p class="text-xs text-gray-400 uppercase">approved</p>
                <div class="flex items-center space-x-2">
                    <h1 class="text-xl font-semibold">{{ accept }}</h1>
                    <!-- <p class="text-xs bg-red-50 text-red-500 px-1 rounded">-2.9</p> -->
                </div>
            </div>
            <svg class="w-12 h-12 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M17.71,13.29c-0.39-0.39-1.02-0.39-1.41,0s-0.39,1.02,0,1.41l1,1C17.49,15.9,17.74,16,18,16s0.51-0.1,0.71-0.29l3-3 c0.39-0.39,0.39-1.02,0-1.41s-1.02-0.39-1.41,0L18,13.59L17.71,13.29z"></path>
                    <path d="M5,22h13c0.55,0,1-0.45,1-1v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v2H6V4h6v5c0,0.55,0.45,1,1,1h4v1c0,0.55,0.45,1,1,1 s1-0.45,1-1V9c0-0.13-0.03-0.25-0.07-0.36c-0.02-0.04-0.04-0.08-0.07-0.12c-0.03-0.05-0.05-0.11-0.09-0.16l-5-6 c-0.01-0.01-0.02-0.01-0.03-0.03c-0.07-0.07-0.15-0.13-0.23-0.18c-0.03-0.02-0.06-0.05-0.1-0.06C13.28,2.03,13.15,2,13,2H5 C4.45,2,4,2.45,4,3v18C4,21.55,4.45,22,5,22z M14,5.76L15.87,8H14V5.76z"></path>
                    <path d="M8,10h2c0.55,0,1-0.45,1-1s-0.45-1-1-1H8C7.45,8,7,8.45,7,9S7.45,10,8,10z"></path>
                    <path d="M14,11H8c-0.55,0-1,0.45-1,1s0.45,1,1,1h6c0.55,0,1-0.45,1-1S14.55,11,14,11z"></path>
                    <path d="M8,16h4c0.55,0,1-0.45,1-1s-0.45-1-1-1H8c-0.55,0-1,0.45-1,1S7.45,16,8,16z"></path>
                    <path d="M8,19h6c0.55,0,1-0.45,1-1s-0.45-1-1-1H8c-0.55,0-1,0.45-1,1S7.45,19,8,19z"></path>
                </g>
            </svg>
        </div>

        <div class="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
            <div class="space-y-2">
                <p class="text-xs text-gray-400 uppercase">Rejected</p>
                <div class="flex items-center space-x-2">
                    <h1 class="text-xl font-semibold">{{ reject }}</h1>
                    <!-- <p class="text-xs bg-green-50 text-green-500 px-1 rounded">+3.1</p> -->
                </div>
            </div>
            <svg class="w-12 h-12 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M18,18c-0.55,0-1,0.45-1,1v1H6V4h6v5c0,0.55,0.45,1,1,1h4v1c0,0.55,0.45,1,1,1s1-0.45,1-1V9c0-0.13-0.03-0.25-0.07-0.37 c-0.02-0.04-0.04-0.08-0.07-0.11c-0.03-0.05-0.05-0.11-0.09-0.16l-5-6c-0.01-0.01-0.02-0.02-0.03-0.03 c-0.07-0.07-0.15-0.13-0.23-0.18c-0.03-0.02-0.06-0.05-0.1-0.06C13.28,2.03,13.15,2,13,2H5C4.45,2,4,2.45,4,3v18c0,0.55,0.45,1,1,1 h13c0.55,0,1-0.45,1-1v-2C19,18.45,18.55,18,18,18z M14,5.76L15.86,8H14V5.76z"></path>
                    <path d="M8,10h2c0.55,0,1-0.45,1-1s-0.45-1-1-1H8C7.45,8,7,8.45,7,9S7.45,10,8,10z"></path>
                    <path d="M13,11H8c-0.55,0-1,0.45-1,1s0.45,1,1,1h5c0.55,0,1-0.45,1-1S13.55,11,13,11z"></path>
                    <path d="M13,14H8c-0.55,0-1,0.45-1,1s0.45,1,1,1h5c0.55,0,1-0.45,1-1S13.55,14,13,14z"></path>
                    <path d="M13,17H8c-0.55,0-1,0.45-1,1s0.45,1,1,1h5c0.55,0,1-0.45,1-1S13.55,17,13,17z"></path>
                    <path d="M20.71,12.29c-0.39-0.39-1.02-0.39-1.41,0L18,13.59l-1.29-1.29c-0.39-0.39-1.02-0.39-1.41,0s-0.39,1.02,0,1.41L16.59,15 l-1.29,1.29c-0.39,0.39-0.39,1.02,0,1.41s1.02,0.39,1.41,0L18,16.41l1.29,1.29C19.49,17.9,19.74,18,20,18s0.51-0.1,0.71-0.29 c0.39-0.39,0.39-1.02,0-1.41L19.41,15l1.29-1.29C21.1,13.32,21.1,12.68,20.71,12.29z"></path>
                </g>
            </svg>
        </div>
    </div>
    <!-- END OF STATISTICS -->

    <!-- TABLE -->
    <div class="bg-white shadow rounded-sm my-2.5 overflow-x-auto mb-10">
        <h1 class="text-xl font-bold">List of University</h1>

        <UniversityHistory />
    </div>
    <!-- END OF TABLE -->
    <!-- TABLE -->
    <div class="bg-white shadow rounded-sm my-2.5 overflow-x-auto">
        <h1 class="text-xl font-bold">List of Student</h1>

        <StudentAccount />
    </div>
    <!-- END OF TABLE -->
</section>
</template>

<style scoped></style>
