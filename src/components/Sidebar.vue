<template>
    <!-- give the sidebar z-50 class so its higher than the navbar if you want to see the logo -->
    <!-- you will need to add a little "X" button next to the logo in order to close it though -->
    <div class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-mfc-dark-gray border-r z-30 transition duration-500 ease-in-out" :class="sideBarOpen ? '' : 'hidden'" id="main-nav">

          <a href="/" class="w-full h-20 flex flex-col px-4 justify-center items-center mb-8">
            <img src="../assets/logo.png" alt="logo-MFC" style="width: 55px">
          </a>

          <div class="mb-4 px-4">
            <p class="pl-4 text-xs font-semibold mb-4 text-white">MENU</p>
            <div class="w-full flex items-center text-white h-10 pl-4 hover:text-gray-900 hover:bg-gray-30 rounded-lg cursor-pointer duration-150">
              <svg class="w-6 h-6 mr-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_14_1960)"> <path d="M25.545 8H11C9.34315 8 8 9.34315 8 11V28.931C8 30.5879 9.34315 31.931 11 31.931H25.545C27.2019 31.931 28.545 30.5879 28.545 28.931V11C28.545 9.34315 27.2019 8 25.545 8Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M52.94 8H38.395C36.7382 8 35.395 9.34315 35.395 11V15.272C35.395 16.9289 36.7382 18.272 38.395 18.272H52.94C54.5969 18.272 55.94 16.9289 55.94 15.272V11C55.94 9.34315 54.5969 8 52.94 8Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M52.94 25.121H38.395C36.7382 25.121 35.395 26.4641 35.395 28.121V52.94C35.395 54.5969 36.7382 55.94 38.395 55.94H52.94C54.5969 55.94 55.94 54.5969 55.94 52.94V28.121C55.94 26.4641 54.5969 25.121 52.94 25.121Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M25.545 38.818H11C9.34315 38.818 8 40.1611 8 41.818V52.939C8 54.5958 9.34315 55.939 11 55.939H25.545C27.2019 55.939 28.545 54.5958 28.545 52.939V41.818C28.545 40.1611 27.2019 38.818 25.545 38.818Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_14_1960"> <rect width="51.94" height="51.939" fill="white" transform="translate(6 6)"></rect> </clipPath> </defs> </g></svg>
              <span class="font-medium">Dashboard</span>
            </div>

            <div class="w-full">
              <button class="w-full flex items-center h-10 pl-4 hover:text-gray-900 text-white hover:bg-gray-30 rounded-lg cursor-pointer duration-150 focus:outline-none" @click="dropdownCompras">
                <svg class="w-6 h-6 mr-2" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="0.00024000000000000003"><path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5Z" fill="currentColor"></path> <path d="M6.28645 5.9581C6.81559 5.7999 7.1163 5.2427 6.9581 4.71355C6.7999 4.18441 6.2427 3.8837 5.71355 4.0419C4.06991 4.53331 3 6.1924 3 8C3 9.8076 4.06991 11.4667 5.71355 11.9581C6.2427 12.1163 6.7999 11.8156 6.9581 11.2864C7.1163 10.7573 6.81559 10.2001 6.28645 10.0419C5.62978 9.84558 5 9.07911 5 8C5 6.92089 5.62978 6.15442 6.28645 5.9581Z" fill="currentColor"></path> <path d="M18.2864 4.0419C17.7573 3.8837 17.2001 4.18441 17.0419 4.71355C16.8837 5.2427 17.1844 5.7999 17.7136 5.9581C18.3702 6.15442 19 6.92089 19 8C19 9.07911 18.3702 9.84558 17.7136 10.0419C17.1844 10.2001 16.8837 10.7573 17.0419 11.2864C17.2001 11.8156 17.7573 12.1163 18.2864 11.9581C19.9301 11.4667 21 9.8076 21 8C21 6.1924 19.9301 4.53331 18.2864 4.0419Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C10.0062 14 8.09544 14.2542 6.64442 14.8986C5.16516 15.5554 4 16.7142 4 18.5C4 18.9667 4.08524 19.4978 4.40272 20.0043C4.72017 20.5106 5.20786 20.8939 5.83781 21.1789C7.04688 21.7259 8.98391 22 12 22C15.0161 22 16.9531 21.7259 18.1622 21.1789C18.7921 20.8939 19.2798 20.5106 19.5973 20.0043C19.9148 19.4978 20 18.9667 20 18.5C20 16.7142 18.8348 15.5554 17.3556 14.8986C15.9046 14.2542 13.9938 14 12 14ZM6 18.5C6 17.7858 6.40184 17.1946 7.45609 16.7264C8.53857 16.2458 10.1278 16 12 16C13.8722 16 15.4614 16.2458 16.5439 16.7264C17.5982 17.1946 18 17.7858 18 18.5C18 18.7236 17.9602 18.8502 17.9027 18.942C17.8452 19.0338 17.7079 19.1893 17.3378 19.3567C16.5469 19.7145 14.9839 20 12 20C9.01609 20 7.45312 19.7145 6.66219 19.3567C6.29214 19.1893 6.15483 19.0338 6.09728 18.942C6.03976 18.8502 6 18.7236 6 18.5Z" fill="currentColor"></path> <path d="M19.1042 13.5555C19.3497 13.0608 19.9498 12.8587 20.4445 13.1042C21.9384 13.8456 23 15.1261 23 17C23 17.5523 22.5523 18 22 18C21.4477 18 21 17.5523 21 17C21 16.0458 20.525 15.3769 19.5555 14.8958C19.0608 14.6503 18.8587 14.0502 19.1042 13.5555Z" fill="currentColor"></path> <path d="M4.44452 14.8958C4.93924 14.6503 5.14127 14.0502 4.89577 13.5555C4.65027 13.0608 4.0502 12.8587 3.55548 13.1042C2.06158 13.8456 1 15.1261 1 17C1 17.5523 1.44772 18 2 18C2.55228 18 3 17.5523 3 17C3 16.0458 3.47503 15.3769 4.44452 14.8958Z" fill="currentColor"></path></svg>
                <span class="font-medium">Members</span>
                <svg class="hidden lg:flex w-4 h-4 ml-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div :class="{'hidden': !dropdownComprasOpen}" class="my-1 pl-2 py-1 rounded-lg">
                <a href="#" class="flex items-center text-white h-10 pl-5 hover:bg-gray-300 hover:text-gray-900 rounded-lg cursor-pointer transition duration-500 ease-in-out animated focus:outline-none">
                  <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3.40991 22C3.40991 18.13 7.25994 15 11.9999 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 22L21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  <span class="font-medium">Search</span>
                </a>
                <div class="flex items-center text-white h-10 pl-5 hover:bg-gray-300 hover:text-gray-900 rounded-lg cursor-pointer duration-150">
                  <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3.40991 22C3.40991 18.13 7.25991 15 11.9999 15C12.9599 15 13.8899 15.13 14.7599 15.37" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19.49 17.98H16.51" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18 16.52V19.51" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  <span class="font-medium">Add</span>
                </div>
              </div>
            </div>

            <div class="w-full flex items-center text-white h-10 pl-4 hover:text-gray-900 hover:bg-gray-30 rounded-lg cursor-pointer duration-150">
              <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.0020048,13 C17.5542895,13 18.0020048,13.4477153 18.0020048,14 C18.0020048,14.5128358 17.6159646,14.9355072 17.1186259,14.9932723 L17.0020048,15 L5.41700475,15 L8.70911154,18.2928932 C9.0695955,18.6533772 9.09732503,19.2206082 8.79230014,19.6128994 L8.70911154,19.7071068 C8.34862757,20.0675907 7.78139652,20.0953203 7.38910531,19.7902954 L7.29489797,19.7071068 L2.29489797,14.7071068 C1.69232289,14.1045317 2.07433707,13.0928192 2.88837381,13.0059833 L3.00200475,13 L17.0020048,13 Z M16.6128994,4.20970461 L16.7071068,4.29289322 L21.7071068,9.29289322 C22.3096819,9.8954683 21.9276677,10.9071808 21.1136309,10.9940167 L21,11 L7,11 C6.44771525,11 6,10.5522847 6,10 C6,9.48716416 6.38604019,9.06449284 6.88337887,9.00672773 L7,9 L18.585,9 L15.2928932,5.70710678 C14.9324093,5.34662282 14.9046797,4.77939176 15.2097046,4.38710056 L15.2928932,4.29289322 C15.6533772,3.93240926 16.2206082,3.90467972 16.6128994,4.20970461 Z"></path> </g></svg>
              <span class="font-medium">Transactions</span>
            </div>
            
          </div>


        </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Sidebar',
    data (){
      return {
        dropdownComprasOpen: false
      }
    },
    computed: {
        ...mapState(['sideBarOpen'])
    },
    methods: {
      dropdownCompras(){
        this.dropdownComprasOpen = !this.dropdownComprasOpen;
      }
    }
}
</script>
