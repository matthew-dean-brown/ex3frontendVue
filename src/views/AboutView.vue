<template>
  <div class="about">
    
    <h1>This is an about page</h1>
    <div v-for="product in $store.state.products" :key="product.product_code">
      {{ product.product_code }}
      {{ product.product_name }}
      {{ product.product_price }}
      {{ product.product_quantity }}
    </div>
    {{  }}
  </div>

  
</template>
<script>
    export default{
      mounted(){
        this.$store.dispatch('getProducts')
      }
    }
  </script>