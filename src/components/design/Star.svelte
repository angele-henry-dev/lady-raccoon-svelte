<script lang="ts">
	export let classes: string = "";
</script>

<div aria-hidden="true" class="star opacity-50 {classes}"></div>

<style>
    .star::before, .star::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 3px;
        height: 3px;
        background: #fff;
        border-radius: 50%;
        transform-origin: middle;
        box-shadow: 0 0 6px 3px rgba(255, 255, 255, 0.15);
    }
    .star::before {
        transform: translate(-50%, -50%);
    }
    .star::after {
        transform: translate(-50%, -50%) rotate(90deg);
    }
    .star.shiny::before, .star.shiny::after {
        animation: shine 2s ease-in-out infinite alternate;
    }
    @keyframes shine {
        from {
            height: calc(100% / 3);
        }
        to {
            height: 100%;
        }
    }
</style>
