<template>
  <div class="info-track">
    <h1 class="title">Search for track...</h1>
    <div class="search">
        <b-form-group>
			<b-input-group>
				<b-form-input
                    id="filter-input"
                    v-model="filter"
                    type="search"
					placeholder="Search...">
                </b-form-input>
				<b-input-group-append>
					<b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
				</b-input-group-append>
			</b-input-group>
        </b-form-group>
    </div>
    <b-table striped hover :items="topTracks" :fields="fields" :filter="filter" :filterIncludedFields="['name']">
        <template v-slot:cell(id)="data">
                {{data.index+1}}
        </template>
    </b-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            filter: null,
            fields: [	
                {
                    key: 'id'
                },
				{
					key: 'name'
				},
				{
					key: 'artist.name'
				}
			]
        }
    },
    computed: {
        topTracks() {
            return this.$store.getters.getTopTracks
        },
    }
}
</script>

<style scoped>
.search {
    width: 700px;
    margin: auto;
}
.form-group {
    margin-bottom: 25px;
}
.form-control:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0) !important;
}
</style>