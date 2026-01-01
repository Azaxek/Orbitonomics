
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const MapVisual: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 400;
    
    svg.selectAll("*").remove();

    // Create a grid background
    const grid = svg.append("g").attr("class", "grid");
    for (let i = 0; i <= width; i += 40) {
      grid.append("line")
        .attr("x1", i).attr("y1", 0).attr("x2", i).attr("y2", height)
        .attr("stroke", "rgba(255,255,255,0.05)");
    }
    for (let j = 0; j <= height; j += 40) {
      grid.append("line")
        .attr("x1", 0).attr("y1", j).attr("x2", width).attr("y2", j)
        .attr("stroke", "rgba(255,255,255,0.05)");
    }

    // Abstract map "shapes"
    const projection = d3.geoMercator().scale(130).translate([width / 2, height / 1.5]);
    
    // Generate some random "impact points"
    const points = Array.from({ length: 50 }, () => [
      Math.random() * width,
      Math.random() * height,
      Math.random() * 10 + 2
    ]);

    svg.selectAll("circle")
      .data(points)
      .enter()
      .append("circle")
      .attr("cx", d => d[0])
      .attr("cy", d => d[1])
      .attr("r", 0)
      .attr("fill", "rgba(59, 130, 246, 0.4)")
      .attr("stroke", "rgba(59, 130, 246, 0.8)")
      .transition()
      .duration(1000)
      .delay((_, i) => i * 50)
      .attr("r", d => d[2]);

    // Pulse animation
    function pulse() {
      svg.selectAll("circle")
        .transition()
        .duration(2000)
        .attr("r", d => d[2] * 1.5)
        .attr("opacity", 0.3)
        .transition()
        .duration(2000)
        .attr("r", d => d[2])
        .attr("opacity", 0.6)
        .on("end", pulse);
    }
    pulse();

    // Add some "scanning" lines
    const scanner = svg.append("line")
      .attr("x1", 0).attr("y1", 0).attr("x2", width).attr("y2", 0)
      .attr("stroke", "rgba(59, 130, 246, 0.5)")
      .attr("stroke-width", 2);

    function scan() {
      scanner
        .attr("y1", 0).attr("y2", 0)
        .transition()
        .duration(4000)
        .ease(d3.easeLinear)
        .attr("y1", height).attr("y2", height)
        .transition()
        .duration(4000)
        .ease(d3.easeLinear)
        .attr("y1", 0).attr("y2", 0)
        .on("end", scan);
    }
    scan();

  }, []);

  return (
    <div className="w-full bg-slate-900/50 rounded-2xl border border-white/10 overflow-hidden relative">
      <div className="absolute top-4 left-4 z-10">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-900/30 px-2 py-1 rounded">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          LIVE SATELLITE FEED: ORBIT-ALPHA-9
        </div>
      </div>
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      />
    </div>
  );
};

export default MapVisual;
