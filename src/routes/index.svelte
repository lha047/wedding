<script lang="ts" context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		console.log('params', params.lang);
        if(params.lang === 'en') {
            language.set('en')
            return {
               status: 301,
               redirect: '/en'
            }
        }
		return {
            status: 301,
            redirect: '/nb'
		};
	}
</script>