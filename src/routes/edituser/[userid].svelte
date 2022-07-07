<script context="module">
  export async function load({fetch, params}) {
    let adbc = params.slug
    const response = await fetch("http://localhost:3000/edit/${adbc}")
    let post = {
      title: "Hello",
      content: "Hello blog post text",
    }

    return {props: {slug: params.userId, post}}
  }
</script>

<script>
  import {User} from "../../lib/models/user"
  import SearchPage from "../../lib/components/search/SearchPage.svelte"
  import UserListItem from "../../lib/components/types/list/UserListItem.svelte"
  import AddFriendAction from "../../lib/components/types/actions/AddFriendAction.svelte"
  export let slug
  export let post
</script>

<h1>{slug}</h1>

<p>{post}</p>
<SearchPage action="/api/search/user" listItem={UserListItem} actionButtons={AddFriendAction} />
