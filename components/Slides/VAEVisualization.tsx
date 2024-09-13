"use client"

import React from "react"

interface VAEVisualizationProps {
  width?: number
}

const VAEVisualization: React.FC<VAEVisualizationProps> = ({ width = 300 }) => {
  const scale = width / 300 // Adjust scale based on provided width
  const latentSize = 80 * scale
  const imageSize = latentSize * 2
  const vaeWidth = 100 * scale
  const vaeHeight = 50 * scale
  const spacing = 70 * scale
  const cornerRadius = 10 * scale
  const arrowGap = 10 * scale
  const totalHeight = latentSize + imageSize + vaeHeight + spacing * 2
  const totalWidth = imageSize
  const containerPadding = 20 * scale

  const svgWidth = totalWidth + containerPadding * 2
  const svgHeight = totalHeight + containerPadding * 2

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
    >
      {/* Container */}
      <rect
        x="0"
        y="0"
        width={svgWidth}
        height={svgHeight}
        fill="#f9f9f9"
        rx={15 * scale}
        ry={15 * scale}
      />

      {/* Latent space */}
      <rect
        x={(svgWidth - latentSize) / 2}
        y={containerPadding}
        width={latentSize}
        height={latentSize}
        fill="#e6f2ff"
        rx={cornerRadius}
        ry={cornerRadius}
      />
      <text
        x={svgWidth / 2}
        y={latentSize / 2 + containerPadding}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#4d4d4d"
        fontSize={12 * scale}
      >
        64x64 Latent
      </text>

      {/* VAE (trapezoid) */}
      <path
        d={`M${(svgWidth - vaeWidth) / 2} ${latentSize + spacing + vaeHeight + containerPadding}
           L${(svgWidth + vaeWidth) / 2} ${latentSize + spacing + vaeHeight + containerPadding}
           L${(svgWidth + vaeWidth / 2) / 2} ${latentSize + spacing + containerPadding}
           L${(svgWidth - vaeWidth / 2) / 2} ${latentSize + spacing + containerPadding} Z`}
        fill="#f0e6ff"
      />
      <text
        x={svgWidth / 2}
        y={latentSize + spacing + vaeHeight / 2 + containerPadding}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#4d4d4d"
        fontSize={12 * scale}
      >
        VAE
      </text>

      {/* Output image */}
      <rect
        x={containerPadding}
        y={totalHeight - imageSize + containerPadding}
        width={imageSize}
        height={imageSize}
        fill="#e6ffe6"
        rx={cornerRadius}
        ry={cornerRadius}
      />
      <text
        x={svgWidth / 2}
        y={totalHeight - imageSize / 2 + containerPadding}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#4d4d4d"
        fontSize={12 * scale}
      >
        1024x1024 Image
      </text>

      {/* Arrows */}
      <path
        d={`M${svgWidth / 2} ${latentSize + arrowGap + containerPadding}
           Q${svgWidth / 2} ${latentSize + spacing / 2 + containerPadding} ${svgWidth / 2} ${latentSize + spacing - arrowGap + containerPadding}`}
        fill="none"
        stroke="#99ccff"
        strokeWidth={2 * scale}
        markerEnd="url(#arrowhead)"
      />
      <path
        d={`M${svgWidth / 2} ${latentSize + spacing + vaeHeight + arrowGap + containerPadding}
           Q${svgWidth / 2} ${latentSize + spacing * 1.5 + vaeHeight + containerPadding} ${svgWidth / 2} ${totalHeight - imageSize - arrowGap + containerPadding}`}
        fill="none"
        stroke="#99ccff"
        strokeWidth={2 * scale}
        markerEnd="url(#arrowhead)"
      />

      {/* Arrowhead definition */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth={10 * scale}
          markerHeight={7 * scale}
          refX={9 * scale}
          refY={3.5 * scale}
          orient="auto"
        >
          <polygon
            points={`0 0, ${10 * scale} ${3.5 * scale}, 0 ${7 * scale}`}
            fill="#99ccff"
          />
        </marker>
      </defs>
    </svg>
  )
}

export default VAEVisualization
