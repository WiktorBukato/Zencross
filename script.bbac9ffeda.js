const injectInfographicIconSprite = () => {
  if (document.getElementById("info-package")) {
    return;
  }

  const sprite = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  sprite.setAttribute("class", "svg-sprite");
  sprite.setAttribute("aria-hidden", "true");
  sprite.setAttribute("focusable", "false");
  sprite.innerHTML = `
    <symbol id="info-api" viewBox="0 0 24 24"><path d="M8 8 4 12l4 4"></path><path d="m16 8 4 4-4 4"></path><path d="m13.5 5-3 14"></path><path d="M7 20h10"></path></symbol>
    <symbol id="info-architecture" viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6" rx="1.3"></rect><rect x="14" y="4" width="6" height="6" rx="1.3"></rect><rect x="9" y="14" width="6" height="6" rx="1.3"></rect><path d="M10 7h4M7 10v2.5a1.5 1.5 0 0 0 1.5 1.5H12M17 10v2.5a1.5 1.5 0 0 1-1.5 1.5H12"></path></symbol>
    <symbol id="info-asset-tracking" viewBox="0 0 24 24"><path d="M6 18.5 10 21l8-4V8.5L14 6l-8 4v8.5Z"></path><path d="M6 10.2 10 13l8-4.2M10 13v8"></path><path d="M17.5 3.5a3 3 0 0 0-3 3c0 2.4 3 5 3 5s3-2.6 3-5a3 3 0 0 0-3-3Z"></path><circle cx="17.5" cy="6.5" r=".6"></circle></symbol>
    <symbol id="info-blueprint" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M8 8h8M8 12h4M8 16h6"></path><path d="M16 12h2v4h-4v-2"></path></symbol>
    <symbol id="info-card" viewBox="0 0 24 24"><path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"></path><path d="M8 8h4M8 12h8M8 16h5"></path><path d="M16 6v4h-4"></path></symbol>
    <symbol id="info-cloud" viewBox="0 0 24 24"><path d="M17.5 18H8a5 5 0 1 1 .7-9.9A6.5 6.5 0 0 1 21 11.4 3.8 3.8 0 0 1 17.5 18Z"></path><path d="M8 21h8M12 18v3"></path><path d="M7 12h.01M12 12h.01M17 12h.01"></path></symbol>
    <symbol id="info-compass" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"></path></symbol>
    <symbol id="info-connectivity" viewBox="0 0 24 24"><path d="M12 19v-5"></path><circle cx="12" cy="12" r="1.3"></circle><path d="M8.8 8.8a4.5 4.5 0 0 0 0 6.4M15.2 8.8a4.5 4.5 0 0 1 0 6.4"></path><path d="M5.7 5.7a9 9 0 0 0 0 12.6M18.3 5.7a9 9 0 0 1 0 12.6"></path><path d="M9 21h6"></path></symbol>
    <symbol id="info-consultation" viewBox="0 0 24 24"><path d="M4 5h11a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9l-5 4V5Z"></path><path d="m15 4-2 5h4l-3 5"></path><path d="M8 9h3M8 13h2"></path></symbol>
    <symbol id="info-delivery" viewBox="0 0 24 24"><path d="M3 7h11v10H3V7Z"></path><path d="M14 10h4l3 3v4h-7v-7Z"></path><circle cx="7" cy="18" r="2"></circle><circle cx="17" cy="18" r="2"></circle></symbol>
    <symbol id="info-discovery" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"></circle><path d="m16 16 4 4"></path><path d="m13.5 8.5-1.4 3.6-3.6 1.4 1.4-3.6 3.6-1.4Z"></path></symbol>
    <symbol id="info-docs" viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7V3Z"></path><path d="M14 3v5h5M10 12h6M10 16h6"></path></symbol>
    <symbol id="info-feasibility" viewBox="0 0 24 24"><path d="M12 3 19 6v6c0 4.4-2.8 7.5-7 9-4.2-1.5-7-4.6-7-9V6l7-3Z"></path><path d="M9 12h2l1.2 2.5L15 9"></path><path d="M8 7.5h8"></path></symbol>
    <symbol id="info-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.5 2.5 3.7 5.5 3.7 9S14.5 18.5 12 21c-2.5-2.5-3.7-5.5-3.7-9S9.5 5.5 12 3Z"></path></symbol>
    <symbol id="info-healthcare" viewBox="0 0 24 24"><path d="M12 21s-7-4.4-7-10a4.2 4.2 0 0 1 7-3.1A4.2 4.2 0 0 1 19 11c0 5.6-7 10-7 10Z"></path><path d="M12 8v6M9 11h6"></path></symbol>
    <symbol id="info-infrastructure" viewBox="0 0 24 24"><path d="M12 3 5 21h14L12 3Z"></path><path d="M9 11h6M7.5 15h9M10 7h4"></path><path d="M5 21h14"></path></symbol>
    <symbol id="info-layers" viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5 9-5Z"></path><path d="m3 12 9 5 9-5M3 16l9 5 9-5"></path></symbol>
    <symbol id="info-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path><path d="M7 17h4"></path></symbol>
    <symbol id="info-monitor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"></rect><path d="M8 21h8M12 17v4"></path><path d="M7 12h3l1.5-3 2 6 1.5-3h2"></path></symbol>
    <symbol id="info-package" viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="2"></rect><rect x="9" y="9" width="6" height="6" rx="1"></rect><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"></path></symbol>
    <symbol id="info-partner-network" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><circle cx="5" cy="6" r="2"></circle><circle cx="19" cy="6" r="2"></circle><circle cx="5" cy="18" r="2"></circle><circle cx="19" cy="18" r="2"></circle><path d="M7 7.4 9.8 10M17 7.4 14.2 10M7 16.6 9.8 14M17 16.6 14.2 14"></path></symbol>
    <symbol id="info-radio" viewBox="0 0 24 24"><path d="M12 19v-5"></path><circle cx="12" cy="12" r="1.3"></circle><path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14"></path></symbol>
    <symbol id="info-route" viewBox="0 0 24 24"><rect x="3" y="4" width="5" height="5" rx="1"></rect><rect x="16" y="15" width="5" height="5" rx="1"></rect><path d="M8 6.5h3.5a4.5 4.5 0 0 1 0 9H16"></path><path d="m13.5 13 2.5 2.5-2.5 2.5"></path></symbol>
    <symbol id="info-sdk" viewBox="0 0 24 24"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"></path><path d="m4.5 8 7.5 4 7.5-4M12 12v8"></path><path d="M8 6.2 16 10.5"></path><path d="M8.5 15.5h7"></path></symbol>
    <symbol id="info-utilities" viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="16" rx="2"></rect><path d="M8 8h8M9 13a3 3 0 0 1 6 0"></path><path d="m12 13 2-2M9 17h6"></path></symbol>
  `;
  document.body.prepend(sprite);
};

injectInfographicIconSprite();

const processTabs = document.querySelectorAll(".process-tab");
const processPanels = document.querySelectorAll(".process-panel");
const processImage = document.querySelector(".process-detail img");
const siteHeader = document.querySelector(".site-header");
const partnerGrid = document.querySelector(".partner-grid");
const navDropdowns = document.querySelectorAll(".nav-dropdown");
const subnavs = document.querySelectorAll(".subnav");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const subnavActiveOffset = 1;
const subnavActiveViewportRatio = 0.25;
const partnerMotionProfiles = [
  { amp: 7, duration: 6.8, delay: -0.4, x: 3 },
  { amp: 12, duration: 8.4, delay: -2.1, x: -4 },
  { amp: 9, duration: 7.5, delay: -1.2, x: 5 },
  { amp: 15, duration: 10.2, delay: -4.3, x: -3 },
  { amp: 6, duration: 6.1, delay: -0.9, x: 4 },
  { amp: 11, duration: 9.6, delay: -3.2, x: -5 },
  { amp: 8, duration: 7.1, delay: -2.8, x: 2 },
  { amp: 14, duration: 11.4, delay: -5.6, x: -4 },
];

const intakeForm = document.querySelector(".intake-form");
const intakeHints = {
  "Asset tracking": "Asset tracking requests often need early clarity on roaming, battery behavior, and coverage continuity.",
  Healthcare: "Healthcare deployments usually need early attention to security, data delivery, and operational reliability.",
  "Utilities and metering": "Utilities and metering projects often require deep coverage, longevity planning, and lifecycle visibility.",
  "Environment and infrastructure": "Infrastructure monitoring benefits from early alignment on ruggedization, availability, and remote access.",
  Other: "Share the deployment context and ZENCROSS can help identify the closest stack and ecosystem path.",
};

const updateHeaderState = () => {
  siteHeader?.classList.toggle("is-scrolled", window.scrollY > 12);
};

const jumpToInitialHash = () => {
  if (!window.location.hash || window.location.hash.length < 2) {
    return;
  }

  const target = document.getElementById(getHashTargetId(window.location.hash));

  if (!target) {
    return;
  }

  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  target.scrollIntoView({ block: "start" });
  root.style.scrollBehavior = previousScrollBehavior;
};

const getHashTargetId = (hashValue) => {
  if (!hashValue?.startsWith("#") || hashValue.length < 2) {
    return "";
  }

  const rawTargetId = hashValue.slice(1);

  try {
    return decodeURIComponent(rawTargetId);
  } catch {
    return rawTargetId;
  }
};

const getSubnavItems = (subnav) => [...subnav.querySelectorAll('a[href^="#"]')]
  .map((link) => {
    const target = document.getElementById(getHashTargetId(link.getAttribute("href")));
    return target ? { link, target } : null;
  })
  .filter(Boolean);

const setActiveSubnavItem = (items, activeItem) => {
  items.forEach((item) => {
    const isActive = item === activeItem;
    item.link.classList.toggle("is-active", isActive);

    if (isActive) {
      item.link.setAttribute("aria-current", "location");
      return;
    }

    item.link.removeAttribute("aria-current");
  });
};

const getPinnedElementHeight = (element) => {
  if (!element) {
    return 0;
  }

  const position = getComputedStyle(element).position;
  return position === "fixed" || position === "sticky" ? element.offsetHeight : 0;
};

const getSubnavActivationLine = (subnav) => {
  const stickyHeight = getPinnedElementHeight(siteHeader) + getPinnedElementHeight(subnav);
  const viewportProbe = Math.max(0, window.innerHeight - stickyHeight) * subnavActiveViewportRatio;

  return window.scrollY + stickyHeight + viewportProbe + subnavActiveOffset;
};

const findActiveSubnavItem = (items, subnav) => {
  const activationLine = getSubnavActivationLine(subnav);

  return items.reduce((activeItem, item) => (
    item.target.offsetTop <= activationLine ? item : activeItem
  ), items[0]);
};

const initSubnavScrollSpy = (subnav) => {
  const items = getSubnavItems(subnav);

  if (!items.length) {
    return;
  }

  let isSyncScheduled = false;
  let shouldPreferHash = Boolean(window.location.hash);

  const syncActiveItem = () => {
    isSyncScheduled = false;
    const hashItem = shouldPreferHash
      ? items.find((item) => item.target.id === getHashTargetId(window.location.hash))
      : null;

    shouldPreferHash = false;
    setActiveSubnavItem(items, hashItem || findActiveSubnavItem(items, subnav));
  };

  const scheduleSync = (preferHash = false) => {
    shouldPreferHash = shouldPreferHash || preferHash;

    if (isSyncScheduled) {
      return;
    }

    isSyncScheduled = true;
    window.requestAnimationFrame(syncActiveItem);
  };

  items.forEach((item) => {
    item.link.addEventListener("click", () => setActiveSubnavItem(items, item));
  });

  window.addEventListener("scroll", () => scheduleSync(), { passive: true });
  window.addEventListener("resize", () => scheduleSync());
  window.addEventListener("hashchange", () => scheduleSync(true));
  syncActiveItem();
};

const createRippleShader = (gl, type, source) => {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
};

const createRippleProgram = (gl, vertexSource, fragmentSource) => {
  const vertexShader = createRippleShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = createRippleShader(gl, gl.FRAGMENT_SHADER, fragmentSource);

  if (!vertexShader || !fragmentShader) {
    return null;
  }

  const program = gl.createProgram();

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }

  return program;
};

const loadRippleImage = (src) => new Promise((resolve, reject) => {
  const image = new Image();

  image.decoding = "async";
  image.onload = () => resolve(image);
  image.onerror = reject;
  image.src = src;
});

const getHeroRippleSource = (canvas) => {
  if (window.location.protocol !== "file:") {
    return canvas.dataset.rippleSrc || "images/hero-surface.webp";
  }

  const inlineTexture = document.getElementById("hero-ripple-texture");

  if (!inlineTexture?.textContent?.trim()) {
    return "";
  }

  try {
    return JSON.parse(inlineTexture.textContent);
  } catch {
    return "";
  }
};

const initHeroRippleBackdrop = async () => {
  const canvas = document.querySelector(".hero-ripple-canvas");
  const heroStack = canvas?.closest(".hero-stack");

  if (!canvas || !heroStack || reduceMotion.matches) {
    return;
  }

  const rippleSource = getHeroRippleSource(canvas);

  const gl = canvas.getContext("webgl", {
    alpha: false,
    antialias: false,
    depth: false,
    preserveDrawingBuffer: false,
  });

  if (!gl) {
    return;
  }

  const vertexSource = `
    attribute vec2 aPosition;
    varying vec2 vUv;

    void main() {
      vUv = aPosition * 0.5 + 0.5;
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;

  const fragmentSource = `
    precision mediump float;

    uniform sampler2D uTexture;
    uniform vec2 uCanvasSize;
    uniform vec2 uHeroSize;
    uniform vec2 uImageSize;
    uniform vec2 uPointer;
    uniform float uPointerInfluence;
    uniform float uTime;
    varying vec2 vUv;

    vec2 getCoverUv(vec2 screenUv) {
      float canvasAspect = uHeroSize.x / uHeroSize.y;
      float imageAspect = uImageSize.x / uImageSize.y;
      vec2 imageUv = screenUv;

      if (canvasAspect > imageAspect) {
        float renderedHeight = canvasAspect / imageAspect;
        imageUv.y = screenUv.y * renderedHeight;
      } else {
        float renderedWidth = imageAspect / canvasAspect;
        imageUv.x = screenUv.x * renderedWidth + (1.0 - renderedWidth) * 0.54;
      }

      return clamp(imageUv, 0.0, 1.0);
    }

    float getHeroFade(float y) {
      if (y < 0.31) {
        return mix(0.32, 0.18, smoothstep(0.0, 0.31, y));
      }

      if (y < 0.63) {
        return mix(0.18, 0.70, smoothstep(0.31, 0.63, y));
      }

      if (y < 0.84) {
        return mix(0.70, 0.94, smoothstep(0.63, 0.84, y));
      }

      return mix(0.94, 1.0, smoothstep(0.84, 1.0, y));
    }

    void main() {
      vec2 screenUv = vec2(vUv.x, 1.0 - vUv.y);
      vec2 heroUv = screenUv;
      vec2 origin = vec2(0.76, 0.24);
      vec2 ovalDelta = vec2((screenUv.x - origin.x) * 0.95, (screenUv.y - origin.y) * 2.8);
      float distanceFromOrigin = length(ovalDelta);
      vec2 rippleDirection = normalize(ovalDelta + vec2(0.0001));
      vec2 rippleTangent = vec2(-rippleDirection.y, rippleDirection.x);
      float heroBand = 1.0 - smoothstep(0.58, 0.84, screenUv.y);
      float envelope = smoothstep(1.0, 0.04, distanceFromOrigin) * heroBand;
      float ringFocus = smoothstep(0.02, 0.2, distanceFromOrigin) * (1.0 - smoothstep(0.88, 1.08, distanceFromOrigin));
      float wave = sin(distanceFromOrigin * 68.0 - uTime * 0.75);
      float secondaryWave = sin(distanceFromOrigin * 39.0 - uTime * 0.48 + 1.6);
      float microWave = sin((screenUv.x * 10.0 + screenUv.y * 4.0) + uTime * 0.18);
      float displacement = (wave * 0.058 + secondaryWave * 0.022 + microWave * 0.003) * envelope * ringFocus;
      vec2 canvasDisplacement =
        vec2(rippleDirection.x / 0.95, rippleDirection.y / 2.8) * displacement +
        vec2(rippleTangent.x, rippleTangent.y / 2.8) * secondaryWave * envelope * 0.012;
      vec2 pointerDelta = vec2((screenUv.x - uPointer.x) * 1.2, (screenUv.y - uPointer.y) * 2.0);
      float pointerDistance = length(pointerDelta);
      vec2 pointerDirection = normalize(pointerDelta + vec2(0.0001));
      float pointerEnvelope = (1.0 - smoothstep(0.0, 0.34, pointerDistance)) * heroBand * uPointerInfluence;
      float pointerWave = sin(pointerDistance * 42.0 - uTime * 1.1);
      canvasDisplacement += vec2(pointerDirection.x / 1.2, pointerDirection.y / 2.0) * pointerWave * pointerEnvelope * 0.034;
      vec2 displacedUv = heroUv + canvasDisplacement;
      vec2 imageUv = getCoverUv(displacedUv);
      vec4 color = texture2D(uTexture, imageUv);
      float highlight =
        (abs(wave) * 0.03 + secondaryWave * 0.018) * envelope * ringFocus +
        abs(pointerWave) * pointerEnvelope * 0.022;

      color.rgb += highlight;
      color.rgb = mix(color.rgb, vec3(0.9686, 0.9686, 0.9725), getHeroFade(heroUv.y));
      gl_FragColor = vec4(color.rgb, 1.0);
    }
  `;

  const program = createRippleProgram(gl, vertexSource, fragmentSource);

  if (!program) {
    return;
  }

  let image;

  try {
    image = await loadRippleImage(rippleSource);
  } catch {
    return;
  }

  const positionBuffer = gl.createBuffer();
  const texture = gl.createTexture();
  const positionLocation = gl.getAttribLocation(program, "aPosition");
  const canvasSizeLocation = gl.getUniformLocation(program, "uCanvasSize");
  const heroSizeLocation = gl.getUniformLocation(program, "uHeroSize");
  const imageSizeLocation = gl.getUniformLocation(program, "uImageSize");
  const pointerLocation = gl.getUniformLocation(program, "uPointer");
  const pointerInfluenceLocation = gl.getUniformLocation(program, "uPointerInfluence");
  const timeLocation = gl.getUniformLocation(program, "uTime");
  const textureLocation = gl.getUniformLocation(program, "uTexture");
  const renderScale = 0.72;
  const targetFrameInterval = 1000 / 30;
  let animationFrame = 0;
  let isVisible = true;
  let lastRenderTime = 0;
  let pointerInfluence = 0;
  let pointerInfluenceTarget = 0;
  const pointer = { x: 0.76, y: 0.24 };
  const pointerTarget = { x: pointer.x, y: pointer.y };
  const lastPointer = { x: 0, y: 0, time: 0 };

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1,
    1, -1,
    -1, 1,
    -1, 1,
    1, -1,
    1, 1,
  ]), gl.STATIC_DRAW);

  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  try {
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  } catch {
    return;
  }

  const resizeCanvas = () => {
    const rect = canvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1) * renderScale;
    const width = Math.max(1, Math.round(rect.width * pixelRatio));
    const height = Math.max(1, Math.round(rect.height * pixelRatio));

    if (canvas.width === width && canvas.height === height) {
      return;
    }

    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, width, height);
  };

  const renderRipple = (timestamp) => {
    animationFrame = 0;

    if (!isVisible || reduceMotion.matches) {
      return;
    }

    if (lastRenderTime && timestamp - lastRenderTime < targetFrameInterval) {
      animationFrame = window.requestAnimationFrame(renderRipple);
      return;
    }

    lastRenderTime = timestamp;
    pointer.x += (pointerTarget.x - pointer.x) * 0.12;
    pointer.y += (pointerTarget.y - pointer.y) * 0.12;
    pointerInfluence += (pointerInfluenceTarget - pointerInfluence) * 0.16;
    pointerInfluenceTarget *= 0.88;
    resizeCanvas();
    const canvasRect = canvas.getBoundingClientRect();
    const heroRect = heroStack.getBoundingClientRect();

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(textureLocation, 0);
    gl.uniform2f(canvasSizeLocation, canvasRect.width, canvasRect.height);
    gl.uniform2f(heroSizeLocation, heroRect.width, heroRect.height);
    gl.uniform2f(imageSizeLocation, image.naturalWidth, image.naturalHeight);
    gl.uniform2f(pointerLocation, pointer.x, pointer.y);
    gl.uniform1f(pointerInfluenceLocation, pointerInfluence);
    gl.uniform1f(timeLocation, timestamp * 0.001);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    animationFrame = window.requestAnimationFrame(renderRipple);
  };

  const startRipple = () => {
    if (!animationFrame && !reduceMotion.matches) {
      animationFrame = window.requestAnimationFrame(renderRipple);
    }
  };

  const stopRipple = () => {
    if (!animationFrame) {
      return;
    }

    window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    lastRenderTime = 0;
  };

  const syncPointer = (event) => {
    const rect = heroStack.getBoundingClientRect();

    pointerTarget.x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    pointerTarget.y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));

    const now = performance.now();

    if (lastPointer.time) {
      const elapsedFrames = Math.max(1, (now - lastPointer.time) / 16.67);
      const movement = Math.hypot(event.clientX - lastPointer.x, event.clientY - lastPointer.y) / elapsedFrames;
      pointerInfluenceTarget = Math.min(1, Math.max(pointerInfluenceTarget * 0.65, movement / 42));
    }

    lastPointer.x = event.clientX;
    lastPointer.y = event.clientY;
    lastPointer.time = now;
    startRipple();
  };

  const releasePointer = () => {
    pointerInfluenceTarget = 0;
    lastPointer.time = 0;
  };

  const observer = "IntersectionObserver" in window
    ? new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;

      if (isVisible) {
        startRipple();
        return;
      }

      stopRipple();
    })
    : null;

  observer?.observe(heroStack);
  heroStack.addEventListener("pointermove", syncPointer, { passive: true });
  heroStack.addEventListener("pointerleave", releasePointer, { passive: true });
  reduceMotion.addEventListener?.("change", () => {
    if (reduceMotion.matches) {
      stopRipple();
      return;
    }

    startRipple();
  });
  heroStack.classList.add("is-ripple-enhanced");
  startRipple();
};

const resetPanelAnimation = (panel) => {
  panel.classList.remove("is-entering", "is-leaving");
};

const animateProcessImage = () => {
  if (!processImage || reduceMotion.matches) {
    return;
  }

  processImage.classList.remove("is-swapping");
  void processImage.offsetWidth;
  processImage.classList.add("is-swapping");
};

const switchProcessStep = (tab) => {
  const activeStep = tab.dataset.step;
  const currentPanel = document.querySelector(".process-panel.is-active");
  const nextPanel = document.querySelector(`.process-panel[data-panel="${activeStep}"]`);

  if (!nextPanel || currentPanel === nextPanel) {
    return;
  }

  processTabs.forEach((item) => {
    const isActive = item === tab;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-selected", String(isActive));
  });

  if (reduceMotion.matches) {
    processPanels.forEach((panel) => {
      const isActive = panel === nextPanel;
      resetPanelAnimation(panel);
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });
    return;
  }

  animateProcessImage();
  nextPanel.hidden = false;
  resetPanelAnimation(nextPanel);
  nextPanel.classList.add("is-active", "is-entering");

  if (currentPanel) {
    resetPanelAnimation(currentPanel);
    currentPanel.classList.remove("is-active");
    currentPanel.classList.add("is-leaving");
    window.setTimeout(() => {
      if (currentPanel.classList.contains("is-leaving")) {
        currentPanel.hidden = true;
        resetPanelAnimation(currentPanel);
      }
    }, 320);
  }

  window.setTimeout(() => {
    nextPanel.classList.remove("is-entering");
  }, 520);
};

processTabs.forEach((tab) => {
  tab.addEventListener("click", () => switchProcessStep(tab));
});

subnavs.forEach(initSubnavScrollSpy);
initHeroRippleBackdrop();

const closeNavDropdowns = (exceptDropdown = null) => {
  navDropdowns.forEach((dropdown) => {
    if (dropdown === exceptDropdown) {
      return;
    }

    dropdown.classList.remove("is-open");
    dropdown.querySelector(".nav-dropdown__toggle")?.setAttribute("aria-expanded", "false");
  });
};

navDropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".nav-dropdown__toggle");
  const menu = dropdown.querySelector(".nav-dropdown__menu");

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const shouldOpen = !dropdown.classList.contains("is-open");
    closeNavDropdowns(dropdown);
    dropdown.classList.toggle("is-open", shouldOpen);
    toggle.setAttribute("aria-expanded", String(shouldOpen));
  });

  menu.addEventListener("click", () => {
    closeNavDropdowns();
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-dropdown")) {
    closeNavDropdowns();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNavDropdowns();
  }
});

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();

window.addEventListener("load", () => {
  window.requestAnimationFrame(jumpToInitialHash);
});

const applyPartnerMotion = (item, index, rowIndex) => {
  const profile = partnerMotionProfiles[(index + rowIndex * 3) % partnerMotionProfiles.length];
  const direction = rowIndex % 2 === 0 ? 1 : -1;

  item.style.setProperty("--float-amp", `${profile.amp}px`);
  item.style.setProperty("--float-duration", `${profile.duration}s`);
  item.style.setProperty("--float-delay", `${profile.delay - rowIndex * 0.7}s`);
  item.style.setProperty("--float-x", `${profile.x * direction}px`);
};

const clonePartnerRow = (row, rowIndex) => {
  const items = [...row.children];

  items.forEach((item, index) => applyPartnerMotion(item, index, rowIndex));
  items.forEach((item, index) => {
    const clone = item.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    applyPartnerMotion(clone, index + items.length, rowIndex);
    row.append(clone);
  });
};

if (partnerGrid && !reduceMotion.matches) {
  const marquee = partnerGrid.closest(".partner-marquee");
  const partners = [...partnerGrid.children];
  const rows = [
    partners.filter((_, index) => index % 2 === 0),
    partners.filter((_, index) => index % 2 === 1),
  ];
  const secondRow = partnerGrid.cloneNode(false);

  partnerGrid.classList.add("partner-grid--primary");
  secondRow.classList.add("partner-grid--secondary");
  partnerGrid.replaceChildren(...rows[0]);
  secondRow.replaceChildren(...rows[1]);
  partnerGrid.after(secondRow);
  marquee?.classList.add("is-enhanced");

  [partnerGrid, secondRow].forEach(clonePartnerRow);
}

if (intakeForm) {
  const steps = [...intakeForm.querySelectorAll(".intake-step")];
  const progressSegments = [...intakeForm.querySelectorAll(".intake-progress__segment")];
  const backButton = intakeForm.querySelector(".intake-back");
  const nextButton = intakeForm.querySelector(".intake-next");
  const submitButton = intakeForm.querySelector(".intake-submit");
  const summary = intakeForm.querySelector(".intake-summary");
  const success = intakeForm.querySelector(".intake-success");
  const useCaseHint = intakeForm.querySelector('[data-hint="useCase"]');
  const scopeHint = intakeForm.querySelector('[data-hint="scope"]');
  let activeStep = 0;

  const getCheckedValue = (name) => {
    const checked = intakeForm.querySelector(`[name="${name}"]:checked`);
    return checked?.value || "Not specified";
  };

  const getCheckedValues = (name) => {
    const values = [...intakeForm.querySelectorAll(`[name="${name}"]:checked`)].map((item) => item.value);
    return values.length ? values.join(", ") : "Not specified";
  };

  const getFieldValue = (name) => {
    const field = intakeForm.elements[name];
    return field?.value?.trim() || "Not specified";
  };

  const updateUseCaseHint = () => {
    if (!useCaseHint) {
      return;
    }

    useCaseHint.textContent = intakeHints[getCheckedValue("useCase")] || intakeHints.Other;
  };

  const updateScopeHint = () => {
    if (!scopeHint) {
      return;
    }

    const geography = getCheckedValues("geography");
    const scale = getCheckedValue("scale");

    if (geography.includes("Global") || scale.includes("10k")) {
      scopeHint.textContent = "Global or high-scale deployments usually benefit from early partner and connectivity alignment.";
      return;
    }

    scopeHint.textContent = "Multi-region and growth deployments are easier to shape once geography and expected device volume are clear.";
  };

  const updateSummary = () => {
    if (!summary) {
      return;
    }

    const rows = [
      ["Use case", getCheckedValue("useCase")],
      ["Geography", getCheckedValues("geography")],
      ["Scale", getCheckedValue("scale")],
      ["Company", getFieldValue("company")],
      ["Contact", `${getFieldValue("name")} / ${getFieldValue("email")}`],
      ["Context", getFieldValue("context")],
    ];

    summary.replaceChildren(
      ...rows.map(([label, value]) => {
        const row = document.createElement("div");
        const labelElement = document.createElement("strong");
        const valueElement = document.createElement("span");

        labelElement.textContent = label;
        valueElement.textContent = value;
        row.append(labelElement, valueElement);
        return row;
      }),
    );
  };

  const showIntakeStep = (stepIndex) => {
    activeStep = Math.max(0, Math.min(stepIndex, steps.length - 1));

    steps.forEach((step, index) => {
      const isActive = index === activeStep;
      step.hidden = !isActive;
      step.classList.toggle("is-active", isActive);
    });

    progressSegments.forEach((segment, index) => {
      segment.classList.toggle("is-active", index <= activeStep);
    });

    if (backButton) {
      backButton.hidden = activeStep === 0;
    }

    if (nextButton) {
      nextButton.hidden = activeStep === steps.length - 1;
    }

    if (submitButton) {
      submitButton.hidden = activeStep !== steps.length - 1;
    }

    updateUseCaseHint();
    updateScopeHint();

    if (activeStep === steps.length - 1) {
      updateSummary();
    }
  };

  nextButton?.addEventListener("click", () => showIntakeStep(activeStep + 1));
  backButton?.addEventListener("click", () => showIntakeStep(activeStep - 1));

  intakeForm.addEventListener("change", (event) => {
    const fieldName = event.target?.name;

    if (fieldName === "useCase") {
      updateUseCaseHint();
    }

    if (fieldName === "geography" || fieldName === "scale") {
      updateScopeHint();
    }
  });

  intakeForm.addEventListener("input", () => {
    if (activeStep === steps.length - 1) {
      updateSummary();
    }
  });

  intakeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    updateSummary();
    steps.forEach((step) => {
      step.hidden = true;
      step.classList.remove("is-active");
    });
    intakeForm.querySelector(".intake-progress")?.setAttribute("hidden", "");
    intakeForm.querySelector(".intake-actions")?.setAttribute("hidden", "");

    if (success) {
      success.hidden = false;
      success.scrollIntoView({ block: "center", behavior: reduceMotion.matches ? "auto" : "smooth" });
    }
  });

  showIntakeStep(0);
}
