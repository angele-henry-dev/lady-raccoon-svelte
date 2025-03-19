<div class="hidden sm:block">
    <div class="tree" aria-hidden="true">
        <div class="tree-triangle tree-triangle3"></div>
        <div class="tree-triangle tree-triangle2"></div>
        <div class="tree-triangle tree-triangle1"></div>
    </div>
    <div class="trunk"></div>
</div>

<style>
    :root {
        --tree-dark: hsl(190, 50%, 17%);
        --tree-light: hsl(190, 59%, 27%);
        --trunk-color: hsl(190, 50%, 20%);
        --background-color: var(--background);
    }

    .tree {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 13%;
        top: 5%;
        animation: sway 5s ease-in-out infinite;
        z-index: 1;
    }

    .tree-triangle {
        position: absolute;
        background: linear-gradient(to left,
            var(--tree-light) 0%,
            var(--tree-dark) 20%,
            var(--background-color) 70%);
        border: 2px solid var(--tree-dark);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }

    .tree-triangle3 { width: 66%; height: 36%; bottom: 20%; left: 3.5%; }
    .tree-triangle2 { width: 53%; height: 33%; bottom: 35%; left: 10%; }
    .tree-triangle1 { width: 42%; height: 25%; bottom: 50%; left: 15.5%; }

    .trunk {
        position: absolute;
        width: 10%;
        height: 16%;
        background: linear-gradient(to left,
            var(--trunk-color) 0%,
            var(--tree-dark) 10%,
            var(--background-color) 50%);
        border-left: 1px solid var(--tree-dark);
        bottom: 5%;
        left: 40%;
        filter: blur(2px);
        z-index: 0;
    }

    .trunk::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20%;
        background: linear-gradient(to bottom, transparent, var(--background-color));
    }

    @keyframes sway {
        0% { transform: skewX(6deg); }
        60% { transform: skewX(0deg); }
        100% { transform: skewX(6deg); }
    }
</style>
