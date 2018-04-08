<template>
<div class="wrapper">
    <nav>
        <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="/list1">List 1</router-link></li>
            <li><router-link to="/list2">List 2</router-link></li>
            <li><router-link to="/list3">List 3</router-link></li>
        </ul>
        </div>
    </nav>
    <router-view></router-view>
</div>
</template>


<script>
export default {
  data() {
      return {
          prop: 'cekavo'
      };
  }
}
</script>
