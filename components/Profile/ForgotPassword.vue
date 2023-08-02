<template>
    <div>
        <!-- component -->
<main id="content" role="main" class="lg:w-[400px] md:w-[480px] max-w-md mx-auto p-6">
    <div class="mt-7 bg-gray-200  rounded-xl shadow-lg">
      <div class="p-4 sm:p-7">
        <div class="text-center">
          <h1 class="block text-xl font-bold text-yellow-400">Forgot Password?</h1>
          <!-- <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Remember your password?
            <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">
              Login here
            </a>
          </p> -->
        </div>

        <div class="mt-5">
          <form action="#">
            <div class="grid gap-y-4">
              <div>
                <label for="email" class="block text-sm font-bold ml-1 mb-2 dark:text-gray-600">Email address</label>
                <div class="relative">
                    <input type="email" name="email" id="email" value="••••••••@gmail.com" class="bg-gray-400 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400" required>
                </div>
                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
              </div>
              <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 transition-all text-sm">Reset password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
    </div>
</template>