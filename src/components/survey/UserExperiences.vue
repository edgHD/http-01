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
      <p v-if="!isLoading && errorLog" class="error-log">
        {{ errorLog }}
      </p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No results found.
      </p>
      <ul v-else>
        <SurveyResult v-for="result in results" :key="result.id" :name="result.name" :rating="result.rating" />
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
      errorLog: null,
    };
  },
  methods: {
    async fetchResults() {
      // Set loading state and clear any previous errors
      this.isLoading = true;
      this.errorLog = null;

      // Fetch all survey results from Supabase
      const { data, error } = await supabase
        .from('surveys')
        .select();

      // Handle fetch response
      if (error) {
        this.isLoading = false;
        this.errorLog = 'Error fetching results, please try again later.';
        console.error('Error fetching results:', error);
      } else {
        this.isLoading = false;
        this.results = data;
      }
    },
  },
  // Fetch results when component is mounted
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