<div class="logo w-[45px] h-[40px] flex flex-row">
  <a href="/" title="Ouvre la page d'accueil de forabetter.tech" aria-label="Ouvre la page d'accueil de forabetter.tech" class="icon size-full block py-1 hover:bg-[var(--primary)] pt-[7px] pl-[5px]">
    <svg aria-hidden="true" data-name="Logo" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211.1 211.1" width="40" height="40">
      <g id="head">
        <polygon id="fond_vert" class="primary" points="184.6 84.9 140.4 35.7 137.5 0 113.5 20.5 113.5 20.5 92.3 31.6 74.2 21 74.2 21 46.2 0 44.7 35.7 0 87.2 57.3 112.1 77.4 98.7 66.3 133.4 77.4 133.4 111.4 133.4 122.4 133.4 110.2 98.7 130.6 112.8 184.6 84.9"/>
        <polygon id="nose" class="primary" points="99 67.9 88.5 67.9 70.9 129.5 117.6 129.5 99 67.9"/>
        <polygon id="face_left" class="primary" points="178.9 83.9 63.7 19.2 5.7 86.1 178.9 83.9"/>
        <polygon id="face_right" class="tertiary" points="5.7 86.1 120.8 19.2 178.9 83.9 5.7 86.1"/>
        <g id="black">
          <polygon id="right" class="black" points="178.9 83.9 130.4 109 94.3 85 118.1 55.2 178.9 83.9"/>
          <polygon id="left" class="black" points="5.7 86.1 56.6 109 94.3 85 68.9 55.2 5.7 86.1"/>
        </g>
        <g id="eyes">
          <circle id="right-2" class="secondary" cx="115.3" cy="76.1" r="6"/>
          <circle id="left-2" class="secondary" cx="71.4" cy="76.1" r="6"/>
        </g>
        <g id="ears">
          <polygon id="left-3" class="black" points="47.6 37.7 49 6.5 72.1 24 47.6 37.7"/>
          <polygon id="right-3" class="black" points="137.4 37.7 134.9 7 113.5 23.5 137.4 37.7"/>
        </g>
        <polygon id="nose-2" class="black" points="78.3 130.8 94.3 111.2 110.2 130.8 78.3 130.8"/>
      </g>
    </svg>
  </a>
</div>

<style>
.black {
  fill: var(--background);
}
.secondary {
  fill: var(--secondary);
}
.tertiary, .primary {
  transition: fill 1s;
}
.tertiary {
  fill: var(--tertiary);
}
.primary {
  fill: var(--primary);
}

.logo .icon:hover .tertiary,
.logo .icon:hover .primary {
  fill: var(--background);
}
</style>
