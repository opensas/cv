<script lang="ts">
  import Curriculum from './components/cv/Curriculum.svelte'
  
  import { gistId, info } from './data/curriculumInfo'
  
</script>

<Curriculum {info} />

<!-- <Curriculum {gistId} /> -->
