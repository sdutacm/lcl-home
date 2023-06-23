<script>
  import { onMount } from 'svelte';
  import '../app.css';

  onMount(() => {
    console.log('=== Light Cone Lab ===');
    console.log('=== 被选召的孩子啊 ===');
    console.log('=== 加入我们，向着群星 ===');
    console.log('=== 我们的征途是星辰大海！ ===');
  });
</script>

<style>
  :global(body) {
    opacity: 1;
  }
</style>

<slot />
