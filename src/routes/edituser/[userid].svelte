<script context="module">

    export async function load({fetch, params}) {
        let slug = params.slug
        const response = await fetch("http://localhost:3000/edit/${slug}")
        let post = {
            title: 'Hello',
            content: 'Hello blog post text'
        }

        return { props: {slug, post}}

    }
</script>
<script>
    export let slug;
    export let post;
</script>


<h1> {slug} </h1>
<p> {post} </p>

