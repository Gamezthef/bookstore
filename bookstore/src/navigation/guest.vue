<template>
  <div>
  <v-toolbar app dark color="bluecustom">
    <v-toolbar-side-icon @click="toggledrawer"/>
    
    <v-toolbar-title>
    		<v-btn color="accent" to="/">
    			CURSO VUE
    		</v-btn>
	</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/login">{{ $t('navigation.login') }}</v-btn>
      <v-btn flat to="/register">{{ $t('navigation.register') }}</v-btn>
      <v-btn flat to="/register">{{ $t('navigation.addee') }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>

	<v-navigation-drawer overlay v-model="drawer" absolute value="">
		<v-list class="pt-0" dense>
			<v-divider/>
			<v-list-tile v-for="item in items" :key="item.title" 
							@click="$router.push(item.to)">
				<v-list-tile-action>
						<v-icon>{{item.icon}}</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>
						{{item.title}}
					</v-list-tile-title>
				</v-list-tile-content>			
			</v-list-tile>




		</v-list>
	</v-navigation-drawer>

</div>
</template>
<script>
	export default{
		name: "guest-navigation",
		data(){
			return{
				drawer:false,
				items:[
					{item: 'Inicio', icon:'Inicio',to:'/' },
					{item: 'Login', icon:'Login',to:'/login' },
          {item: 'Registro', icon:'Registro',to:'/register' },
          {item: 'Menu', icon:'Cerrar menu',to:'/' }

				]
			}
		}
	}
</script>