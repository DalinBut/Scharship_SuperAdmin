<!-- <template>
    <div>
        <div class="">
            <div class="flex justify-center items-center">
                <h2 class="font-bold text-3xl font-mono text-gray-600">Profile</h2>
            </div>
            <hr class="w-56 h-[3px] mx-auto my-4 bg-gray-200 border-0 rounded">
        </div>
        <div class="lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-4 md:flex-none">
            <div class="row-span-2 mt-36 ml-24">
                <ProfileInfo />
            </div>
            <div class="col-span-2">
                <ProfileChangePassword />
            </div>
            <div class="col-span-2">
                <ProfileForgotPassword />
            </div>
        </div>
    </div>
</template> -->
<template>
    <div>
      <div class="text-center">
        <h2 class="font-bold text-3xl font-mono text-gray-600">Profile</h2>
      </div>
      <hr class="w-56 h-[3px] mx-auto my-4 bg-gray-200 border-0 rounded">
      <div class="lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-4 md:flex-none">
        <div class="md:row-span-2 md:mt-0 md:ml-0 lg:mt-36 lg:ml-24">
          <ProfileInfo />
        </div>
        <div class="md:col-span-2">
          <ProfileChangePassword />
        </div>
        <div class="md:col-span-2">
          <ProfileForgotPassword />
        </div>
      </div>
    </div>
  </template>
  