<script>
let { size = "50px" } = $props();
</script>

<a href="/" title="Homepage" class="flex items-center gap-5">
  <svg id="logo" data-name="Logo" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211.1 211.1" width="{size}" height="{size}">
    <g id="head">
      <polygon id="fond_vert" class="cls-4" points="197.83 123.74 153.62 74.51 150.74 38.86 126.74 59.3 126.74 59.3 105.55 70.47 87.46 59.84 87.46 59.84 59.51 38.86 57.97 74.51 13.27 126.09 70.58 150.97 90.62 137.52 79.56 172.24 90.62 172.24 124.69 172.24 135.71 172.24 123.51 137.52 143.87 151.61 197.83 123.74"/>
      <polygon id="nose" class="cls-3" points="112.29 106.74 101.77 106.74 84.2 168.3 130.86 168.3 112.29 106.74"/>
      <polygon id="face_left" class="cls-3" points="192.14 122.79 76.95 58.09 18.96 124.99 192.14 122.79"/>
      <polygon id="face_right" class="cls-2" points="18.96 124.99 134.03 58.09 192.14 122.79 18.96 124.99"/>
      <g id="black">
        <polygon id="right" class="cls-1" points="192.14 122.79 143.66 147.83 110.97 126.38 131.32 94.06 192.14 122.79"/>
        <polygon id="left" class="cls-1" points="18.96 124.99 69.89 147.83 104.07 126.26 82.22 94.06 18.96 124.99"/>
      </g>
      <g id="eyes">
        <circle id="right-2" data-name="right" class="cls-3" cx="128.57" cy="114.96" r="5.98"/>
        <circle id="left-2" data-name="left" class="cls-3" cx="84.63" cy="114.96" r="5.98"/>
      </g>
      <g id="ears">
        <polygon id="left-3" data-name="left" class="cls-1" points="60.91 76.6 62.26 45.38 85.38 62.83 60.91 76.6"/>
        <polygon id="right-3" data-name="right" class="cls-1" points="150.65 76.6 148.17 45.83 126.74 62.33 150.65 76.6"/>
      </g>
      <polygon id="nose-2" data-name="nose" class="cls-1" points="91.55 168.3 107.53 148.7 123.51 168.3 91.55 168.3"/>
    </g>
  </svg>
  <span class="hidden sm:block open-dyslexic">forabetter.tech</span>
</a>

<style>
.cls-1 {
  fill: var(--background);
}
.cls-2,
.cls-3,
.cls-4 {
  transition: fill 1s;
  position: relative;
  overflow: hidden;
}
.cls-2 {
  fill: var(--secondary);
}
.cls-3 {
  fill: var(--primary);
}
.cls-4 {
  fill: var(--primary);
}

.cls-2::before,
.cls-3::before,
.cls-4::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, var(--secondary), transparent);
  transform: translateX(0);
  transition: transform 1s ease-out;
  z-index: 1;
}

a:hover .cls-2::before,
a:hover .cls-3::before,
a:hover .cls-4::before {
  transform: translateX(100%);
}

a:hover .cls-2,
a:hover .cls-3,
a:hover .cls-4 {
  fill: var(--primary);
}
</style>
