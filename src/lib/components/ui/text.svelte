<script lang="ts">
    export let variant = "body";
</script>

<p
        class={
    variant === "title"
      ? "text-4xl md:text-5xl font-bold uppercase tracking-wide"
      : variant === "subtitle"
      ? "text-xl md:text-2xl font-semibold tracking-wide"
      : variant === "label"
      ? "text-sm font-semibold uppercase tracking-widest text-white/70"
      : variant === "body"
      ? "text-base leading-relaxed text-white/85"
      : variant === "muted"
      ? "text-xs uppercase tracking-widest text-white/50"
      : ""
  }
        style="
    font-family:
      {variant === 'title' || variant === 'subtitle'
        ? 'var(--font-heading)'
        : 'var(--font-body)'};
  "
>
  <slot />
</p>
