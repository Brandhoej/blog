<script>
  import { trail } from "$lib/stores/BreadcrumbStore";
  import PostTimeline from "$lib/atoms/PostTimeline.svelte";
  import PostTimelineItem from "$lib/atoms/PostTimelineItem.svelte";

  trail();
</script>

<PostTimeline>
  <PostTimelineItem
    href="/posts/lorem-ipsum"
    title="Lorem Lipisum"
    description="Dolor sit amet, consectetur adipiscing elit. Integer cursus sagittis fringilla. Cras
	hendrerit ante at metus dapibus. Nunc ac dolor nec magna laoreet iaculis. Pellentesque
	lectus dui, suscipit ut elit ac."
    releaseDate={new Date(Date.now())}
  />
</PostTimeline>
