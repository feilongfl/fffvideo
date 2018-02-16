<template>
  <section>
    <!-- Nav Bar -->
    <div id="navbar">
      <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand to="/">{{title}}</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <div>
              <b-nav-item v-if="user.logined">
                <b-img rounded="circle" width="35" height="35" blank-color="#777" alt="img" class="m-1" v-bind:src="'/userPics/' + user.name + '.png'"/>
              </b-nav-item>
              <b-nav-item v-else>
                <b-img rounded="circle" width="35" height="35" blank-color="#777" alt="img" class="m-1" src="/default.png"/>
              </b-nav-item>
            </div>

            <b-nav-item-dropdown right>
              <!-- Using button-content slot -->
              <template slot="button-content">
                <em v-if="user.logined">{{user.name}}</em>
                <em v-else>Login</em>
              </template>
              <!--<b-dropdown-item v-if="!user.logined" href="#">Regist</b-dropdown-item>-->
              <b-dropdown-item v-if="!user.logined" href="#">Regist</b-dropdown-item>
              <b-dropdown-item v-if="user.logined" href="#">Profile</b-dropdown-item>
              <b-dropdown-item v-if="user.logined" href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        title: 'F^3 Video',
        // flfl: axios.get('https://api.myjson.com/bins/q78gt').then((res) => res.data),
        // flfl: 'flfl',
        user: {
          name: 'feilong',
          pic: 'feilong.png',
          logined: false
        }
      }
    }
  }
</script>
