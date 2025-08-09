import React, { useEffect, useRef } from 'react';

// WebBackground.jsx
// Componente React que cria uma teia animada cobrindo a tela.
// Uso: importe e coloque <WebBackground /> no topo da sua App (por exemplo: dentro de <App />)
// Observações: o canvas é fixed e pointer-events: none para não atrapalhar cliques.

export default function WebBackground() {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const pointer = useRef({ x: null, y: null, active: false });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const DPR = Math.max(1, window.devicePixelRatio || 1);
        canvas.width = width * DPR;
        canvas.height = height * DPR;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.scale(DPR, DPR);

        // configuração da teia
        const CONFIG = {
            nodeCount: Math.floor((width * height) / 70000), // densidade baseada na tela
            maxLinkDistance: Math.min(width, height) / 6,
            nodeRadius: 1.5,
            lineWidth: 1,
            nodeSpeed: 0.3,
            color: '135,206,250', // RGB base para linhas/points
            bgAlpha: 0.02
        };

        let nodes = [];

        function createNodes() {
            nodes = [];
            for (let i = 0; i < CONFIG.nodeCount; i++) {
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * CONFIG.nodeSpeed,
                    vy: (Math.random() - 0.5) * CONFIG.nodeSpeed,
                    r: CONFIG.nodeRadius
                });
            }
        }

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            canvas.width = width * DPR;
            canvas.height = height * DPR;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.scale(DPR, DPR);
            CONFIG.nodeCount = Math.floor((width * height) / 70000);
            CONFIG.maxLinkDistance = Math.min(width, height) / 6;
            createNodes();
        }

        function step() {
            // fade background levemente (para rastro suave)
            ctx.fillStyle = `rgba(8,12,18,${CONFIG.bgAlpha})`;
            ctx.fillRect(0, 0, width, height);

            // atualizar e desenhar nós
            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];
                n.x += n.vx;
                n.y += n.vy;

                // bounce nas bordas
                if (n.x < 0 || n.x > width) n.vx *= -1;
                if (n.y < 0 || n.y > height) n.vy *= -1;

                // interação com ponteiro (repulsão)
                if (pointer.current.active && pointer.current.x != null) {
                    const dx = n.x - pointer.current.x;
                    const dy = n.y - pointer.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONFIG.maxLinkDistance / 1.5 && dist > 0) {
                        const force = (CONFIG.maxLinkDistance / dist) * 0.02;
                        n.vx += (dx / dist) * force;
                        n.vy += (dy / dist) * force;
                    }
                }

                // desenha ponto
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${CONFIG.color},0.9)`;
                ctx.fill();
            }

            // desenha linhas entre nós próximos
            ctx.lineWidth = CONFIG.lineWidth;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i];
                    const b = nodes[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONFIG.maxLinkDistance) {
                        const alpha = 1 - dist / CONFIG.maxLinkDistance;
                        ctx.strokeStyle = `rgba(${CONFIG.color},${(alpha * 0.35).toFixed(3)})`;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }

                // linha do nó até o ponteiro
                if (pointer.current.active && pointer.current.x != null) {
                    const p = pointer.current;
                    const dxp = nodes[i].x - p.x;
                    const dyp = nodes[i].y - p.y;
                    const distp = Math.sqrt(dxp * dxp + dyp * dyp);
                    if (distp < CONFIG.maxLinkDistance) {
                        const alpha = 1 - distp / CONFIG.maxLinkDistance;
                        ctx.strokeStyle = `rgba(${CONFIG.color},${(alpha * 0.45).toFixed(3)})`;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(p.x, p.y);
                        ctx.stroke();
                    }
                }
            }

            animationRef.current = requestAnimationFrame(step);
        }

        createNodes();
        animationRef.current = requestAnimationFrame(step);

        // eventos do mouse/touch
        function onMove(e) {
            pointer.current.active = true;
            if (e.touches) {
                pointer.current.x = e.touches[0].clientX;
                pointer.current.y = e.touches[0].clientY;
            } else {
                pointer.current.x = e.clientX;
                pointer.current.y = e.clientY;
            }
        }

        function onLeave() {
            pointer.current.active = false;
            pointer.current.x = null;
            pointer.current.y = null;
        }

        window.addEventListener('mousemove', onMove);
        window.addEventListener('touchmove', onMove, { passive: true });
        window.addEventListener('mouseout', onLeave);
        window.addEventListener('touchend', onLeave);
        window.addEventListener('resize', resize);

        // cleanup
        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('mouseout', onLeave);
            window.removeEventListener('touchend', onLeave);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />

    );
}
