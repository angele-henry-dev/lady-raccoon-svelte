<div aria-hidden="true" class="heart"></div>

<style>
.heart::before,
.heart::after {
    background-color: var(--secondary);
    border-radius: 50px 50px 0 0;
    content: "";
    height: 25px;
    left: 15px;
    position: absolute;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    width: 15px;
}

.heart::after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
}
</style>