<template>
    <div class="sticky top-0 z-40">
            <div class="w-full h-20 px-6 bg-mfc-dark-gray border-b flex items-center justify-between">

              <!-- left navbar -->
              <div class="flex">

                <!-- mobile hamburger -->
                <div class="lg:hidden flex items-center mr-4 text-white">
                  <button class="hover:border-white text-white focus:outline-none navbar-burger" @click="toggleSidebar()">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Menu</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Menu"> <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"> </rect> <line x1="5" y1="7" x2="19" y2="7" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round"> </line> <line x1="5" y1="17" x2="19" y2="17" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round"> </line> <line x1="5" y1="12" x2="19" y2="12" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round"> </line> </g> </g> </g></svg>
                  </button>
                </div>

              </div>

              <!-- right navbar -->
              <div class="flex items-center relative">
                <button class="p-0 focus:outline-none duration-150" @click="dropDownOpen = !dropDownOpen">
                  <img src="../assets/avatars/avatar_4.png" class="w-10 h-10 rounded-full shadow-lg border-2 border-white hover:border-mfc-yellow duration-150">
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
