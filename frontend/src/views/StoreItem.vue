<template>
	<div id="app" class="parent">
		<div class="art">
			<div class="image">
				<div>{{ artDetails.image }}</div>
			</div>
			<div class="text">
				<div>{{ artDetails.name }}</div>
				<div>{{ artDetails.price }}</div>
				<div>{{ artDetails.about }}</div>
				<button>Buy now</button>
			</div>
		</div>
		<div class="artist">
			<div>{{ artistDetails.name }}</div>
			<div>{{ artistDetails.memberSince }}</div>
			<div>{{ artistDetails.rating }}</div>
			<div>{{ artistDetails.qualifications }}</div>
			<div>{{ artistDetails.phone }}</div>
			<div>{{ artistDetails.email }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "StoreItemPage",
		components: {},
  data() {
    return {
      artDetails: [],
      artistDetails: [],
    }
  },
  methods: {
    getItemDetails(searchTerm) {
      let query = `https://art-market-app.herokuapp.com/api/v1/items/${searchTerm}`;

      fetch(query)
        .then(response => response.json())
        .then(json => {
          this.artDetails = {
              image: json.data.image,
              name: json.data.name,
              price: json.data.price,
              about: json.data.about
            };
        });
    },
    getArtistDetails(searchTerm) {
      let query = `https://art-market-app.herokuapp.com/api/v1/users/${searchTerm}`;

      fetch(query)
        .then(response => response.json())
        .then(json => {
            this.artistDetails = {
              name: json.user.name,
              memberSince: json.user.memberSince,
              rating: json.user.rating,
              qualifications: json.user.qualifications,
              phone: json.user.phone,
              email: json.user.email
            };
        });
    }
  },
  created: function() {
    this.getItemDetails("5d725cd2c4ded7bcb480eaa2");
    this.getArtistDetails("5c8a1d5b0190b214360dc035");
  }
}
</script>

<style lang="sass" scoped>
.parent {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	background-color: #ebebeb;
}
.art {
	display: flex;
	flex-direction: row;
	background-color: #ffffff;
	margin: 4em 1em 4em 4em;
	padding: 2em;
}
.artist {
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	margin: 4em 4em 4em 1em;
	padding: 2em;
}
.button {
	color: #dd1260;
}
.image {
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	margin: 4em 4em 4em 1em;
	padding: 2em;
}
.text {
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	margin: 4em 4em 4em 1em;
	padding: 2em;
}
</style>