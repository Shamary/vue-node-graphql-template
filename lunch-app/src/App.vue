<template>
  <v-app>
    <nav class="pa3 pa4-ns">
      <router-link v-bind:to="'/'" exact class="link dim b f6 f5-ns dib mr3" title="Feed">Blog</router-link>
      <router-link v-bind:to="'/'" exact class="link dim f6 f5-ns dib mr3 black" title="Feed">Feed</router-link>
      <router-link v-bind:to="'/drafts'" exact class="link dim f6 f5-ns dib mr3 black" title="Drafts">Drafts</router-link>
      
      <router-link v-bind:to="'/create'" exact class="f6 link dim br1 ba ph3 pv2 fr mb2 dib black" title="Drafts">+ Create Draft</router-link>
    </nav>

    <div class="fl w-100 pl4 pr4">
      <router-view/>
  </div>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
