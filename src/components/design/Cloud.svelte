<script lang="ts">
	export let classes: string = "";
</script>

<div aria-hidden="true" class="cloud rounded-full bg-[var(--color-blue)] opacity-15 {classes}"></div>

<style>
    .cloud {
        animation: float 5s linear infinite alternate;
    }
    .cloud::before,
    .cloud::after {
        position: absolute;
        content: "";
        border-radius: 50%;
        background: var(--color-blue);
    }
    .cloud::before {
        top: -5%;
        left: 50%;
        width: 110%;
        height: 110%;
    }
    .cloud::after {
        top: 10%;
        left: 120%;
        width: 80%;
        height: 80%;
    }
    @keyframes float {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-10px);
        }
    }
</style>
