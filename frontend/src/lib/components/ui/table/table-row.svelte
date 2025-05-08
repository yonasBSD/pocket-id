<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/style.js';

	type $$Props = HTMLAttributes<HTMLTableRowElement> & {
		'data-state'?: unknown;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<tr
	class={cn('data-[state=selected]:bg-muted border-b transition-colors', className)}
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</tr>
