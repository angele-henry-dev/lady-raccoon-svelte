<div class="hidden sm:block" aria-hidden="true">
    <div class="tree">
        <div class="tree-triangle tree-triangle3"></div>
        <div class="tree-triangle tree-triangle2"></div>
        <div class="tree-triangle tree-triangle1"></div>
    </div>
    <div class="trunk"></div>
</div>

<style>
    :root {
        --tree-dark1: hsl(190, 50%, 17%);
        --tree-dark2: hsl(190, 59%, 27%);
        --tree-dark3: hsl(212, 30%, 17%);
        --trunk-dark: hsl(190, 50%, 20%);
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
            var(--tree-dark2) 0%,
            var(--tree-dark1) 20%,
            var(--tree-dark3) 70%);
        border: 4px solid var(--background);
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
            var(--trunk-dark) 0%,
            var(--tree-dark1) 10%,
            var(--tree-dark3) 50%);
        border: 4px solid var(--background);
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
        background: linear-gradient(to bottom, transparent, var(--tree-dark3));
    }

    @keyframes sway {
        0% { transform: skewX(6deg); }
        60% { transform: skewX(0deg); }
        100% { transform: skewX(6deg); }
    }
</style>
