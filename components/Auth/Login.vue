<template>
<div>
    <section class="h-screen">
        <div class="h-full">
            <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                    <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="w-full" alt="Sample image" />
                </div>
                <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                    <form @submit.prevent="login">
                        <div class="flex flex-row items-center justify-center lg:justify-start">
                            <p class="mb-0 mr-4 text-lg font-mono font-bold">Sign in</p>
                        </div>

                        <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        </div>

                        <!-- Email input -->
                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <label for="exampleFormControlInput2">Email address
                            </label>
                            <input type="text" v-model="email" class="peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[2.15] outline-none bg-slate-200" id="exampleFormControlInput2" />
                        </div>

                        <!-- Password input -->
                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <label for="pwd">Password
                            </label>
                            <!-- class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200" -->
                            <input type="password" v-model="password" class="peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[2.15] outline-none bg-slate-200" id="pwd" placeholder="" />
                        </div>
                        <!-- class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" -->

                        <div class="mb-6 flex items-center justify-between">
                            <a href="#!">Forgot password?</a>
                        </div>

                        <div class="text-center lg:text-left">
                            <button type="submit" class="hover:bg-orange-500 inline-block rounded bg-orange-400 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" data-te-ripple-init data-te-ripple-color="light">
                                Login
                            </button>
                            <p class="mt-2 mb-0 pt-1 text-sm font-semibold">
                                Don't have an account?
                                <a href="/register" class=" text-blue-700 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">Register</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    
    async login() {
      try {
        const response = await fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });
        if (this.email == 'admin@gmail.com' && this.password == '12345'){
          // Store the token in the local storage or cookie as desired
          const data = await response.json();
          const {token} = data;
          localStorage.setItem('store_token', token);
          // Redirect to a protected page or perform any other actions
          this.$router.push('/dashboard');
          alert('Success!')
        }else{
          alert("Invalid email or password.");
        }
      } catch (error) {
        console.error(error);
        // Handle login error
      }
    },
  }
};
</script>


