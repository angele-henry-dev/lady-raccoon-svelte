<svg width="315px" height="107px" viewBox="0 0 315 107" version="1.1" style="overflow:visible">
    <g  id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path id="Path-1" class="path" fill="none" stroke="var(--secondary)" stroke-width="5" stroke-linejoin="round" stroke-miterlimit="10" d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"/>
        <path class="dashed" fill="none" stroke="var(--background)" stroke-width="8" stroke-linejoin="round" stroke-miterlimit="10" d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"/>
        <polygon id="arrow" points="0,-9 18,0 0,9" fill="var(--secondary)">
            <animateMotion rotate="auto" begin="1s" dur="1.6s" repeatCount="1" fill="freeze">
                <mpath xlink:href="#Path-1" />
            </animateMotion>
        </polygon>
    </g>
</svg>

<style>
.path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 3s linear forwards;
    animation-iteration-count: 1;
    animation-delay: 1s;
}
@keyframes dash {
    to {
        stroke-dashoffset: 0;
    }
}
.dashed {
    stroke-dasharray: 5, 12;
}
#arrow {
    animation: arrow 2s linear forwards;
    opacity: 0;
}
@keyframes arrow {
    to {
        opacity: 1;
    }
}
</style>
