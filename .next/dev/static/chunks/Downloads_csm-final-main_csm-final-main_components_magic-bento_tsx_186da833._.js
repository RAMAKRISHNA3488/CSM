(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/csm-final-main/csm-final-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/csm-final-main/csm-final-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/csm-final-main/csm-final-main/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "255, 255, 255";
const MOBILE_BREAKPOINT = 768;
const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR)=>{
    const el = document.createElement("div");
    el.className = "particle";
    el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
    return el;
};
const calculateSpotlightValues = (radius)=>({
        proximity: radius * 0.5,
        fadeDistance: radius * 0.75
    });
const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius)=>{
    const rect = card.getBoundingClientRect();
    const relativeX = (mouseX - rect.left) / rect.width * 100;
    const relativeY = (mouseY - rect.top) / rect.height * 100;
    card.style.setProperty("--glow-x", `${relativeX}%`);
    card.style.setProperty("--glow-y", `${relativeY}%`);
    card.style.setProperty("--glow-intensity", glow.toString());
    card.style.setProperty("--glow-radius", `${radius}px`);
};
const ParticleCard = ({ children, className = "", disableAnimations = false, style, particleCount = DEFAULT_PARTICLE_COUNT, glowColor = DEFAULT_GLOW_COLOR, enableTilt = true, clickEffect = false, enableMagnetism = false })=>{
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timeoutsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isHoveredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const memoizedParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const particlesInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const magnetismAnimationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initializeParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticleCard.useCallback[initializeParticles]": ()=>{
            if (particlesInitialized.current || !cardRef.current) return;
            const { width, height } = cardRef.current.getBoundingClientRect();
            memoizedParticles.current = Array.from({
                length: particleCount
            }, {
                "ParticleCard.useCallback[initializeParticles]": ()=>createParticleElement(Math.random() * width, Math.random() * height, glowColor)
            }["ParticleCard.useCallback[initializeParticles]"]);
            particlesInitialized.current = true;
        }
    }["ParticleCard.useCallback[initializeParticles]"], [
        particleCount,
        glowColor
    ]);
    const clearAllParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticleCard.useCallback[clearAllParticles]": ()=>{
            timeoutsRef.current.forEach(clearTimeout);
            timeoutsRef.current = [];
            magnetismAnimationRef.current?.kill();
            particlesRef.current.forEach({
                "ParticleCard.useCallback[clearAllParticles]": (particle)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(particle, {
                        scale: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: "back.in(1.7)",
                        onComplete: {
                            "ParticleCard.useCallback[clearAllParticles]": ()=>{
                                particle.parentNode?.removeChild(particle);
                            }
                        }["ParticleCard.useCallback[clearAllParticles]"]
                    });
                }
            }["ParticleCard.useCallback[clearAllParticles]"]);
            particlesRef.current = [];
        }
    }["ParticleCard.useCallback[clearAllParticles]"], []);
    const animateParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticleCard.useCallback[animateParticles]": ()=>{
            if (!cardRef.current || !isHoveredRef.current) return;
            if (!particlesInitialized.current) {
                initializeParticles();
            }
            memoizedParticles.current.forEach({
                "ParticleCard.useCallback[animateParticles]": (particle, index)=>{
                    const timeoutId = window.setTimeout({
                        "ParticleCard.useCallback[animateParticles].timeoutId": ()=>{
                            if (!isHoveredRef.current || !cardRef.current) return;
                            const clone = particle.cloneNode(true);
                            cardRef.current.appendChild(clone);
                            particlesRef.current.push(clone);
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(clone, {
                                scale: 0,
                                opacity: 0
                            }, {
                                scale: 1,
                                opacity: 1,
                                duration: 0.3,
                                ease: "back.out(1.7)"
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(clone, {
                                x: (Math.random() - 0.5) * 100,
                                y: (Math.random() - 0.5) * 100,
                                rotation: Math.random() * 360,
                                duration: 2 + Math.random() * 2,
                                ease: "none",
                                repeat: -1,
                                yoyo: true
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(clone, {
                                opacity: 0.3,
                                duration: 1.5,
                                ease: "power2.inOut",
                                repeat: -1,
                                yoyo: true
                            });
                        }
                    }["ParticleCard.useCallback[animateParticles].timeoutId"], index * 100);
                    timeoutsRef.current.push(timeoutId);
                }
            }["ParticleCard.useCallback[animateParticles]"]);
        }
    }["ParticleCard.useCallback[animateParticles]"], [
        initializeParticles
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleCard.useEffect": ()=>{
            if (disableAnimations || !cardRef.current) return;
            const element = cardRef.current;
            const handleMouseEnter = {
                "ParticleCard.useEffect.handleMouseEnter": ()=>{
                    isHoveredRef.current = true;
                    animateParticles();
                    if (enableTilt) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            rotateX: 5,
                            rotateY: 5,
                            duration: 0.3,
                            ease: "power2.out",
                            transformPerspective: 1000
                        });
                    }
                }
            }["ParticleCard.useEffect.handleMouseEnter"];
            const handleMouseLeave = {
                "ParticleCard.useEffect.handleMouseLeave": ()=>{
                    isHoveredRef.current = false;
                    clearAllParticles();
                    if (enableTilt) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            rotateX: 0,
                            rotateY: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                    if (enableMagnetism) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            x: 0,
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                }
            }["ParticleCard.useEffect.handleMouseLeave"];
            const handleMouseMove = {
                "ParticleCard.useEffect.handleMouseMove": (e)=>{
                    if (!enableTilt && !enableMagnetism) return;
                    const rect = element.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    if (enableTilt) {
                        const rotateX = (y - centerY) / centerY * -10;
                        const rotateY = (x - centerX) / centerX * 10;
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            rotateX,
                            rotateY,
                            duration: 0.1,
                            ease: "power2.out",
                            transformPerspective: 1000
                        });
                    }
                    if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;
                        magnetismAnimationRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            x: magnetX,
                            y: magnetY,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                }
            }["ParticleCard.useEffect.handleMouseMove"];
            const handleClick = {
                "ParticleCard.useEffect.handleClick": (e)=>{
                    if (!clickEffect) return;
                    const rect = element.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const maxDistance = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
                    const ripple = document.createElement("div");
                    ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;
                    element.appendChild(ripple);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(ripple, {
                        scale: 0,
                        opacity: 1
                    }, {
                        scale: 1,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        onComplete: {
                            "ParticleCard.useEffect.handleClick": ()=>ripple.remove()
                        }["ParticleCard.useEffect.handleClick"]
                    });
                }
            }["ParticleCard.useEffect.handleClick"];
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
            element.addEventListener("mousemove", handleMouseMove);
            element.addEventListener("click", handleClick);
            return ({
                "ParticleCard.useEffect": ()=>{
                    isHoveredRef.current = false;
                    element.removeEventListener("mouseenter", handleMouseEnter);
                    element.removeEventListener("mouseleave", handleMouseLeave);
                    element.removeEventListener("mousemove", handleMouseMove);
                    element.removeEventListener("click", handleClick);
                    clearAllParticles();
                }
            })["ParticleCard.useEffect"];
        }
    }["ParticleCard.useEffect"], [
        animateParticles,
        clearAllParticles,
        disableAnimations,
        enableTilt,
        enableMagnetism,
        clickEffect,
        glowColor
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: `${className} relative overflow-hidden`,
        style: {
            ...style,
            position: "relative",
            overflow: "hidden"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
        lineNumber: 307,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ParticleCard, "8H+Z7UUSOy00JZLTsdrtDvxLl+c=");
_c = ParticleCard;
const GlobalSpotlight = ({ gridRef, disableAnimations = false, enabled = true, spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS, glowColor = DEFAULT_GLOW_COLOR })=>{
    _s1();
    const spotlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInsideSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalSpotlight.useEffect": ()=>{
            if (disableAnimations || !gridRef?.current || !enabled) return;
            const spotlight = document.createElement("div");
            spotlight.className = "global-spotlight";
            spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
            document.body.appendChild(spotlight);
            spotlightRef.current = spotlight;
            const handleMouseMove = {
                "GlobalSpotlight.useEffect.handleMouseMove": (e)=>{
                    if (!spotlightRef.current || !gridRef.current) return;
                    const section = gridRef.current.closest(".bento-section");
                    const rect = section?.getBoundingClientRect();
                    const mouseInside = rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
                    isInsideSection.current = mouseInside || false;
                    const cards = gridRef.current.querySelectorAll(".card");
                    if (!mouseInside) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(spotlightRef.current, {
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                        cards.forEach({
                            "GlobalSpotlight.useEffect.handleMouseMove": (card)=>{
                                ;
                                card.style.setProperty("--glow-intensity", "0");
                            }
                        }["GlobalSpotlight.useEffect.handleMouseMove"]);
                        return;
                    }
                    const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
                    let minDistance = Number.POSITIVE_INFINITY;
                    cards.forEach({
                        "GlobalSpotlight.useEffect.handleMouseMove": (card)=>{
                            const cardElement = card;
                            const cardRect = cardElement.getBoundingClientRect();
                            const centerX = cardRect.left + cardRect.width / 2;
                            const centerY = cardRect.top + cardRect.height / 2;
                            const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
                            const effectiveDistance = Math.max(0, distance);
                            minDistance = Math.min(minDistance, effectiveDistance);
                            let glowIntensity = 0;
                            if (effectiveDistance <= proximity) {
                                glowIntensity = 1;
                            } else if (effectiveDistance <= fadeDistance) {
                                glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                            }
                            updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
                        }
                    }["GlobalSpotlight.useEffect.handleMouseMove"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(spotlightRef.current, {
                        left: e.clientX,
                        top: e.clientY,
                        duration: 0.1,
                        ease: "power2.out"
                    });
                    const targetOpacity = minDistance <= proximity ? 0.8 : minDistance <= fadeDistance ? (fadeDistance - minDistance) / (fadeDistance - proximity) * 0.8 : 0;
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(spotlightRef.current, {
                        opacity: targetOpacity,
                        duration: targetOpacity > 0 ? 0.2 : 0.5,
                        ease: "power2.out"
                    });
                }
            }["GlobalSpotlight.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "GlobalSpotlight.useEffect.handleMouseLeave": ()=>{
                    isInsideSection.current = false;
                    gridRef.current?.querySelectorAll(".card").forEach({
                        "GlobalSpotlight.useEffect.handleMouseLeave": (card)=>{
                            ;
                            card.style.setProperty("--glow-intensity", "0");
                        }
                    }["GlobalSpotlight.useEffect.handleMouseLeave"]);
                    if (spotlightRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(spotlightRef.current, {
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                }
            }["GlobalSpotlight.useEffect.handleMouseLeave"];
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseleave", handleMouseLeave);
            return ({
                "GlobalSpotlight.useEffect": ()=>{
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseleave", handleMouseLeave);
                    spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
                }
            })["GlobalSpotlight.useEffect"];
        }
    }["GlobalSpotlight.useEffect"], [
        gridRef,
        disableAnimations,
        enabled,
        spotlightRadius,
        glowColor
    ]);
    return null;
};
_s1(GlobalSpotlight, "T4X9HpgVM7a5ZqCd6QjO7E5uETY=");
_c1 = GlobalSpotlight;
const useMobileDetection = ()=>{
    _s2();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMobileDetection.useEffect": ()=>{
            const checkMobile = {
                "useMobileDetection.useEffect.checkMobile": ()=>setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
            }["useMobileDetection.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "useMobileDetection.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["useMobileDetection.useEffect"];
        }
    }["useMobileDetection.useEffect"], []);
    return isMobile;
};
_s2(useMobileDetection, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
// Default card data matching wireframe layout
const defaultCardData = [
    // Card 1: Founder Image (Top Left, 2 cols, 2 rows)
    {
        color: "#0a0a0a",
        title: "THARUN SAI",
        description: "Founder & CEO of CREATIVE SPARK MEDIA",
        label: "Founder",
        image: "/professional-founder-portrait-dark-background.jpg"
    },
    // Card 2: About Us (Top Right, 1 col, 2 rows)
    {
        color: "#0a0a0a",
        title: "Our Story",
        description: "Founded with a passion for visual storytelling, we transform brands through powerful imagery that captivates audiences.",
        label: "WHO WE ARE"
    },
    // Card 3: Experience (1 col, 1 row)
    {
        color: "#0a0a0a",
        title: "Partnered with 100+ Brands & 12K Influencers",
        description: "Successfully delivered creative campaigns for brands and influencers.",
        label: "EXPERIENCE"
    },
    // Card 4: Location & Availability (spans under cards 2&3)
    {
        color: "#0a0a0a",
        title: "Hyderabad, Telangana",
        description: "Based in Hyderabad, Telangana, India with global reach and availability.",
        label: "LOCATION"
    },
    // Card 5: Another Founder Image (Bottom Left, 1 col, 2 rows)
    {
        color: "#0a0a0a",
        title: "ALEX KUMAR",
        description: "Co-Founder & Creative Director",
        label: "Co-Founder",
        image: "/professional-co-founder-portrait-dark-background.jpg"
    },
    // Card 6: Founder Info (1 col, 1 row)
    {
        color: "#0a0a0a",
        title: "Creative Vision",
        description: "Leading our creative team with innovative approaches to visual storytelling.",
        label: "ABOUT"
    },
    // Card 7: Expertise (1 col, 1 row)
    {
        color: "#0a0a0a",
        title: "Brand Strategy & Design",
        description: "Expert in brand identity, visual design, and creative direction.",
        label: "EXPERTISE"
    },
    // Card 8: Web Designers Images (2 cards side by side)
    {
        color: "#0a0a0a",
        title: "",
        description: "",
        label: "WEB DESIGN TEAM",
        images: [
            {
                src: "./images/dev1.jpg",
                name: "NARASIMHA"
            },
            {
                src: "./images/dev2.jpg",
                name: "RAMA KRISHNA"
            }
        ]
    },
    // Card 9: Web Designing Info (2 cols, 1 row)
    {
        color: "#0a0a0a",
        title: "Web Design Excellence",
        description: "Our web design team brings creativity and technical expertise to build stunning, responsive websites that drive results.",
        label: "WEB DESIGNING"
    }
];
const MagicBento = ({ enableStars = true, enableSpotlight = true, enableBorderGlow = true, disableAnimations = false, spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS, particleCount = DEFAULT_PARTICLE_COUNT, enableTilt = false, glowColor = DEFAULT_GLOW_COLOR, clickEffect = true, enableMagnetism = true, cards = defaultCardData })=>{
    _s3();
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = useMobileDetection();
    const shouldDisableAnimations = disableAnimations || isMobile;
    const renderCard = (card, index, gridClass)=>{
        const baseClassName = `card flex flex-col justify-between relative min-h-[180px] w-full p-5 rounded-lg border border-white/10 font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 ${enableBorderGlow ? "card--border-glow" : ""} ${gridClass}`;
        const cardStyle = {
            backgroundColor: card.color || "var(--background-dark)",
            borderColor: "var(--border-color)",
            color: "var(--white)",
            "--glow-x": "50%",
            "--glow-y": "50%",
            "--glow-intensity": "0",
            "--glow-radius": "200px",
            backgroundImage: card.image ? `url(${card.image})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center top"
        };
        // Special rendering for card 8 (two images side by side)
        if (card.images && card.images.length > 0) {
            if (enableStars) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleCard, {
                    className: baseClassName,
                    style: {
                        ...cardStyle,
                        backgroundImage: undefined
                    },
                    disableAnimations: shouldDisableAnimations,
                    particleCount: particleCount,
                    glowColor: glowColor,
                    enableTilt: enableTilt,
                    clickEffect: clickEffect,
                    enableMagnetism: enableMagnetism,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card__header flex justify-between gap-3 relative text-white z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "card__label text-xs uppercase tracking-wider text-white/60",
                                    children: card.label
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                                    lineNumber: 594,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "card__number text-xs text-white/40",
                                    children: [
                                        "#",
                                        index + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                                    lineNumber: 595,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                            lineNumber: 593,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 flex-1 items-center justify-center py-4",
                            children: card.images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-30 h-30 md:w-50 md:h-50 rounded-lg bg-cover bg-center",
                                            style: {
                                                backgroundImage: `url(${img.src})`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                                            lineNumber: 600,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold text-white",
                                            children: img.name
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                                            lineNumber: 604,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                                    lineNumber: 599,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                            lineNumber: 597,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index, true, {
                    fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                    lineNumber: 582,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: baseClassName,
                style: {
                    ...cardStyle,
                    backgroundImage: undefined
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card__header flex justify-between gap-3 relative text-white z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "card__label text-xs uppercase tracking-wider text-white/60",
                                children: card.label
                            }, void 0, false, {
                                fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                                lineNumber: 614,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "card__number text-xs text-white/40",
                                children: [
                                    "#",
                                    index + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                                lineNumber: 615,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                        lineNumber: 613,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 flex-1 items-center justify-center py-4",
                        children: card.images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-24 md:w-32 md:h-32 rounded-lg bg-cover bg-center border border-white/10",
                                        style: {
                                            backgroundImage: `url(${img.src})`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                                        lineNumber: 620,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-white",
                                        children: img.name
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                                        lineNumber: 624,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, i, true, {
                                fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                                lineNumber: 619,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                        lineNumber: 617,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                lineNumber: 612,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        if (enableStars) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleCard, {
                className: baseClassName,
                style: cardStyle,
                disableAnimations: shouldDisableAnimations,
                particleCount: particleCount,
                glowColor: glowColor,
                enableTilt: enableTilt,
                clickEffect: clickEffect,
                enableMagnetism: enableMagnetism,
                children: [
                    card.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                        lineNumber: 646,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card__header flex justify-between gap-3 relative text-white z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "card__label text-xs uppercase tracking-wider text-white/60",
                                children: card.label
                            }, void 0, false, {
                                fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                                lineNumber: 649,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "card__number text-xs text-white/40",
                                children: [
                                    "#",
                                    index + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                                lineNumber: 650,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                        lineNumber: 648,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card__content flex flex-col relative text-white z-10 mt-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "card__title font-semibold text-lg md:text-xl m-0 mb-2",
                                children: card.title
                            }, void 0, false, {
                                fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                                lineNumber: 653,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "card__description text-sm leading-relaxed text-white/70",
                                children: card.description
                            }, void 0, false, {
                                fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                                lineNumber: 654,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                        lineNumber: 652,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                lineNumber: 634,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: baseClassName,
            style: cardStyle,
            children: [
                card.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                    lineNumber: 662,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card__header flex justify-between gap-3 relative text-white z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "card__label text-xs uppercase tracking-wider text-white/60",
                            children: card.label
                        }, void 0, false, {
                            fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                            lineNumber: 664,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "card__number text-xs text-white/40",
                            children: [
                                "#",
                                index + 1
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                            lineNumber: 665,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                    lineNumber: 663,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card__content flex flex-col relative text-white z-10 mt-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "card__title font-semibold text-lg md:text-xl m-0 mb-2",
                            children: card.title
                        }, void 0, false, {
                            fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                            lineNumber: 668,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "card__description text-sm leading-relaxed text-white/70",
                            children: card.description
                        }, void 0, false, {
                            fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                            lineNumber: 669,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                    lineNumber: 667,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, index, true, {
            fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
            lineNumber: 661,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Grid classes for each card position based on wireframe
    const getGridClass = (index)=>{
        switch(index){
            case 0:
                return "card-1" // Founder - 2 cols, 2 rows
                ;
            case 1:
                return "card-2" // About Us - 1 col, 2 rows
                ;
            case 2:
                return "card-3" // Experience - 1 col, 1 row
                ;
            case 3:
                return "card-4" // Location - 2 cols, 1 row
                ;
            case 4:
                return "card-5" // Another Founder - 1 col, 2 rows
                ;
            case 5:
                return "card-6" // Founder Info - 1 col, 1 row
                ;
            case 6:
                return "card-7" // Expertise - 1 col, 1 row
                ;
            case 7:
                return "card-8" // Web Designers - 2 cols, 1 row
                ;
            case 8:
                return "card-9" // Web Design Info - 2 cols, 1 row
                ;
            default:
                return "";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${glowColor};
            --border-color: #2a2a2a;
            --background-dark: #0a0a0a;
            --white: hsl(0, 0%, 100%);
          }
          
          .bento-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0.75rem;
            width: 100%;
          }
          
          /* Mobile: Stack all cards */
          @media (max-width: 599px) {
            .bento-grid .card {
              min-height: 200px;
            }
            .bento-grid .card-1 {
              min-height: 350px;
            }
            .bento-grid .card-5 {
              min-height: 300px;
            }
          }
          
          /* Tablet: 2 columns */
          @media (min-width: 600px) and (max-width: 1023px) {
            .bento-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .bento-grid .card-1 {
              grid-column: span 2;
              min-height: 350px;
            }
            .bento-grid .card-4 {
              grid-column: span 2;
            }
            .bento-grid .card-8 {
              grid-column: span 2;
            }
            .bento-grid .card-9 {
              grid-column: span 2;
            }
          }
          
          /* Desktop: 4 columns with exact wireframe layout */
          @media (min-width: 1024px) {
            .bento-grid {
              grid-template-columns: repeat(4, 1fr);
              grid-template-rows: repeat(6, minmax(140px, auto));
            }
            
            /* Card 1: Top Left - 2 cols, 2 rows */
            .bento-grid .card-1 {
              grid-column: 1 / 3;
              grid-row: 1 / 3;
              min-height: 320px;
            }
            
            /* Card 2: Top Right - 1 col, 2 rows */
            .bento-grid .card-2 {
              grid-column: 3;
              grid-row: 1 / 3;
            }
            
            /* Card 3: Top Right Corner - 1 col, 1 row */
            .bento-grid .card-3 {
              grid-column: 4;
              grid-row: 1;
            }
            
            /* Card 4: Below 3 - 1 col, 1 row (Location & Availability area) */
            .bento-grid .card-4 {
              grid-column: 4;
              grid-row: 2;
            }
            
            /* Card 5: Bottom Left - 1 col, 2 rows */
            .bento-grid .card-5 {
              grid-column: 1;
              grid-row: 3 / 5;
              min-height: 280px;
            }
            
            /* Card 6: Next to Card 5 - 1 col, 1 row */
            .bento-grid .card-6 {
              grid-column: 2;
              grid-row: 3;
            }
            
            /* Card 7: Below Card 6 - 1 col, 1 row */
            .bento-grid .card-7 {
              grid-column: 2;
              grid-row: 4;
            }
            
            /* Card 8: Web Designers - 2 cols, 1 row */
            .bento-grid .card-8 {
              grid-column: 3 / 5;
              grid-row: 3;
            }
            
            /* Card 9: Web Design Info - 2 cols, 1 row */
            .bento-grid .card-9 {
              grid-column: 3 / 5;
              grid-row: 4;
            }
          }
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 1px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
            opacity: 1;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .card--border-glow:hover {
            box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1), 0 0 30px rgba(${glowColor}, 0.1);
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${glowColor}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }
        `
            }, void 0, false, {
                fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                lineNumber: 703,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            enableSpotlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalSpotlight, {
                gridRef: gridRef,
                disableAnimations: shouldDisableAnimations,
                enabled: enableSpotlight,
                spotlightRadius: spotlightRadius,
                glowColor: glowColor
            }, void 0, false, {
                fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                lineNumber: 863,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bento-section p-3 w-full max-w-6xl mx-auto select-none relative",
                ref: gridRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$csm$2d$final$2d$main$2f$csm$2d$final$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bento-grid",
                    children: cards.slice(0, 9).map((card, index)=>renderCard(card, index, getGridClass(index)))
                }, void 0, false, {
                    fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                    lineNumber: 873,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx",
                lineNumber: 872,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s3(MagicBento, "XUa7xZJiDL4EXgyb7a00zBxNt6w=", false, function() {
    return [
        useMobileDetection
    ];
});
_c2 = MagicBento;
const __TURBOPACK__default__export__ = MagicBento;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ParticleCard");
__turbopack_context__.k.register(_c1, "GlobalSpotlight");
__turbopack_context__.k.register(_c2, "MagicBento");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/csm-final-main/csm-final-main/components/magic-bento.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Downloads_csm-final-main_csm-final-main_components_magic-bento_tsx_186da833._.js.map