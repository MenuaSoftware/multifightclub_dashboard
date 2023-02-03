<template>
    <div class="sticky top-0 z-40">
            <div class="w-full h-20 px-6 bg-white border-b flex items-center justify-between">

              <!-- left navbar -->
              <div class="flex">

                <!-- mobile hamburger -->
                <div class="lg:hidden flex items-center mr-4 text-gray-700">
                  <button class="hover:text-purple-600 hover:border-white focus:outline-none navbar-burger" @click="toggleSidebar()">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>
                </div>

              </div>

              <!-- right navbar -->
              <div class="flex items-center relative">
                <button class="p-0 focus:outline-none duration-150" @click="dropDownOpen = !dropDownOpen">
                  <img src="https://images.unsplash.com/photo-1552774021-9ebbb764f03e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" class="w-10 h-10 rounded-full shadow-lg border-2 border-white hover:border-purple-600 duration-150">
                </button>
              </div>

            </div>

            <!-- dropdown menu -->
            <div class="absolute bg-gray-25 border border-t-0 shadow-xl text-gray-700 rounded-b-lg w-48 bottom-10 right-0 mr-6" :class="dropDownOpen ? '' : 'hidden'">
                <a href="#" class="block px-4 py-2 hover:bg-gray-200">Account</a>
                <a href="#" class="block px-4 py-2 hover:bg-gray-200">Settings</a>
                <a href="#" class="block px-4 py-2 hover:bg-gray-200">Logout</a>
            </div>
            <!-- dropdown menu end -->

    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Navbar',
    computed: {
        ...mapState(['sideBarOpen'])
    },
    data() {
        return {
            dropDownOpen: false
        }
    },
    methods: {
        toggleSidebar() {
            this.$store.dispatch('toggleSidebar')
        }
    }
}
</script>
