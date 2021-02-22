<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">

        <div class="journal-header">
          <h1 v-html="$page.post.title" class="journal-title" />
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name" v-text="$page.post.author" />
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div v-text="$page.post.date"/>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <!-- <span>{{ $page.post.timeToRead }} min read</span> -->
            </div>
          </div>          
        </div>

        <JournalContent :content="mdToHtml($page.post.content)" />

      </div>
    </div>
  </Layout>
</template>

<page-query>
query JournalPost ($id: String!) {
  post: strapiJournals(id: $id) {
    title
    author
    date (format: "D. MMMM YYYY")
    content
  }
}

</page-query>

<script>
import JournalContent from "@/components/JournalContent"
import MarkdownIt from "markdown-it"

const md = new MarkdownIt()
export default {
  components: {
    JournalContent
  },
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  },
  methods: {
    mdToHtml(mdCon) {
      return md.render(mdCon)
    }
  }
}
</script>

<style scoped>
.journal-container {
  max-width: 840px;
}
.journal-header {
  padding: 2rem 0 4rem 0;
}
.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.journal-meta > div {
  margin-right: 4rem;
}
.journal-meta > div:last-of-type {
  margin: 0;
}
</style>
