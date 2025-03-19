<div class="tree">
    <div class="tree-triangle3"></div>
    <div class="tree-triangle2"></div>
    <div class="tree-triangle1"></div>
</div>
<div class="trunk"></div>

<style>
    .tree {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 13%;
        top: 5%;
        animation: sway 5s ease-in-out infinite;
        z-index: 1;
    }

    .tree-triangle3 {
        position: absolute;
        width: 66%;
        height: 36%;
        bottom: 20%;
        left: 3.5%;
        background: linear-gradient(to left,
            hsl(190, 59%, 27%) 0%,
            hsl(190, 50%, 17%) 20%,
            var(--background) 70%);
        border: 2px solid hsl(190, 50%, 17%);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
    .tree-triangle2 {
        position: absolute;
        width: 53%;
        height: 33%;
        bottom: 35%;
        left: 10%;
        background: linear-gradient(to left,
            hsl(190, 60%, 27%) 0%,
            hsl(190, 50%, 17%) 20%,
            var(--background) 70%);
        border: 2px solid hsl(190, 50%, 17%);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
    .tree-triangle1 {
        position: absolute;
        width: 42%;
        height: 25%;
        bottom: 50%;
        left: 15.5%;
        background: linear-gradient(to left,
            hsl(190, 60%, 27%) 0%,
            hsl(190, 50%, 17%) 20%,
            var(--background) 70%);
        border: 2px solid hsl(190, 50%, 17%);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }

    .trunk {
        position: absolute;
        width: 10%;
        height: 16%;
        background: linear-gradient(to left,
            hsl(190, 60%, 27%) 0%,
            hsl(190, 50%, 17%) 10%,
            var(--background) 50%);
        border-left: 1px solid hsl(190, 50%, 17%);
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
        background: linear-gradient(to bottom,
            hsla(212, 30%, 17%, 0),
            var(--background));
        z-index: 100;
    }

    @keyframes sway {
        0% {
            transform: skewX(6deg);
        }
        60% {
            transform: skewX(0deg);
        }
        100% {
            transform: skewX(6deg);
        }
    }
</style>
