import { useEffect, useRef } from 'react';

const COLORS = [
  { r: 255, g: 255, b: 255 },   // White
  { r: 147, g: 197, b: 253 },   // Soft Blue
  { r: 196, g: 181, b: 253 },   // Purple
  { r: 249, g: 168, b: 212 },   // Pink
  { r: 167, g: 243, b: 208 },   // Mint Green (subtle)
];

const MOUSE_COLOR = { r: 250, g: 204, b: 21 }; // Golden yellow for mouse area

const lerp = (a, b, t) => a + (b - a) * t;

const NeuralNetworkBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationId;
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const NODE_COUNT = 80;
    const CONNECTION_DIST = 160;
    const MOUSE_RADIUS = 200;

    // Assign each node a random galaxy color
    const nodes = Array.from({ length: NODE_COUNT }, () => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.8,
        color,
        // Each node slowly transitions to a new color
        targetColor: COLORS[Math.floor(Math.random() * COLORS.length)],
        colorT: 0,
        colorSpeed: Math.random() * 0.003 + 0.001,
        baseAlpha: Math.random() * 0.5 + 0.3,
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      };
    });

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let tick = 0;

    const draw = () => {
      tick++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const node of nodes) {
        // Slowly interpolate color (galaxy shimmer)
        node.colorT += node.colorSpeed;
        if (node.colorT >= 1) {
          node.color = node.targetColor;
          node.targetColor = COLORS[Math.floor(Math.random() * COLORS.length)];
          node.colorT = 0;
        }
        const cr = Math.round(lerp(node.color.r, node.targetColor.r, node.colorT));
        const cg = Math.round(lerp(node.color.g, node.targetColor.g, node.colorT));
        const cb = Math.round(lerp(node.color.b, node.targetColor.b, node.colorT));

        // Twinkle effect
        const twinkle = 0.5 + 0.5 * Math.sin(tick * node.twinkleSpeed + node.twinkleOffset);
        let alpha = node.baseAlpha * (0.6 + 0.4 * twinkle);

        // Mouse proximity
        const dxM = mouseX - node.x;
        const dyM = mouseY - node.y;
        const distMouse = Math.sqrt(dxM * dxM + dyM * dyM);
        let drawR = { r: cr, g: cg, b: cb };

        if (distMouse < MOUSE_RADIUS) {
          const proximity = 1 - distMouse / MOUSE_RADIUS;
          // Pull toward mouse
          const force = proximity * 0.015;
          node.vx += dxM * force;
          node.vy += dyM * force;
          // Shift color toward golden
          drawR = {
            r: Math.round(lerp(cr, MOUSE_COLOR.r, proximity * 0.8)),
            g: Math.round(lerp(cg, MOUSE_COLOR.g, proximity * 0.8)),
            b: Math.round(lerp(cb, MOUSE_COLOR.b, proximity * 0.8)),
          };
          alpha = Math.min(1, alpha + proximity * 0.5);
        }

        // Move
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Clamp speed
        const speed = Math.sqrt(node.vx ** 2 + node.vy ** 2);
        if (speed > 1.2) { node.vx = (node.vx / speed) * 1.2; node.vy = (node.vy / speed) * 1.2; }

        // Glow effect for bright nodes
        if (alpha > 0.6) {
          ctx.beginPath();
          const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r * 5);
          glow.addColorStop(0, `rgba(${drawR.r},${drawR.g},${drawR.b},${alpha * 0.4})`);
          glow.addColorStop(1, `rgba(${drawR.r},${drawR.g},${drawR.b},0)`);
          ctx.arc(node.x, node.y, node.r * 5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Draw node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${drawR.r},${drawR.g},${drawR.b},${alpha})`;
        ctx.fill();

        node._drawR = drawR;
        node._alpha = alpha;
      }

      // Draw connections with gradient color between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const t = 1 - dist / CONNECTION_DIST;
            const lineAlpha = t * 0.3;

            // Gradient line between two node colors
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            const ci = nodes[i]._drawR;
            const cj = nodes[j]._drawR;
            grad.addColorStop(0, `rgba(${ci.r},${ci.g},${ci.b},${lineAlpha})`);
            grad.addColorStop(1, `rgba(${cj.r},${cj.g},${cj.b},${lineAlpha})`);

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = t * 1.2;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ opacity: 0.75 }}
    />
  );
};

export default NeuralNetworkBg;
