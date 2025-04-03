<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="fetchResults()">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">
        Loading...
      </p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No results found.
      </p>
      <ul v-else>
        <SurveyResult
        v-for="result in results" 
        :key="result.id"
        :name="result.name"
        :rating="result.rating" />
      </ul>
    </base-card>
  </section>
</template>

<script>
import { supabase } from '@/supabase';
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchResults() {
      this.isLoading = true;
      const { data, error } = await supabase
        .from('surveys')
        .select();

      if (error) {
         this.isLoading = false;  
        console.error('Error fetching results:', error);
      } else {
        this.isLoading = false;
        this.results = data;
      }
      console.log('this.results', this.results);
    },
  },
  mounted() {
    this.fetchResults();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
p {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>