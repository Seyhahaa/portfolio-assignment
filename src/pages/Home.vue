<template>
  <div class="ml-[90px] grid grid-cols-1 md:grid-cols-3">
    <div class="col-span-2 mt-[60px]">
      <Introduction />
      <AboutComponent />
      <Service />
      <Contact />
      <Footer />
    </div>
    <div>
      <ProgressBar />
      <div class='fixed mt-[90px]'>
            <img src='https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=600' class='h-screen object-fill'  />
        </div>
    </div>
  </div>
</template>
  <script setup>
import ProgressBar from "@/components/ProgressBar.vue";
import Introduction from "@/components/Introduction.vue";
import Service from "@/components/Service.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import Footer from "@/components/Footer.vue";
import Contact from "@/components/Contact.vue";
</script>
<style>
  body {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);}
</style>