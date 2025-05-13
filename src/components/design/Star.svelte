<div {...$$restProps}>
    <div class="star"></div>
</div>

<style>
    .star {
        position: absolute;
        width: 10px;
        height: 10px;
    }
    .star::before, .star::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 3px;
        height: 3px;
        background: #fff;
        border-radius: 50%;
        animation: shine 1s ease-in-out infinite alternate;
        transform-origin: middle;
        box-shadow: 0 0 6px 3px rgba(255, 255, 255, 0.15);
    }
    .star::before {
        transform: translate(-50%, -50%);
    }
    .star::after {
        transform: translate(-50%, -50%) rotate(90deg);
    }
    .star::before, .star::after {
        animation-delay: 1s;
    }
    @keyframes shine {
        from {
            height: 3px;
        }
        to {
            height: 100%;
        }
    }
</style>
