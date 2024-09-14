import * as fal from "@fal-ai/serverless-client"
import { NextResponse } from "next/server"

const RATE_LIMIT_PER_DAY = 3
const requestCounts = new Map()

function resetRequestCounts() {
  requestCounts.clear()
}

// Reset counts every 24 hours
setInterval(resetRequestCounts, 24 * 60 * 60 * 1000)

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    "127.0.0.1"

  const count = requestCounts.get(ip) || 0

  if (count >= RATE_LIMIT_PER_DAY) {
    console.log(`Rate limit exceeded for IP: ${ip}`)
    return NextResponse.json(
      { error: "Too many requests, please try again tomorrow." },
      { status: 429 }
    )
  }

  requestCounts.set(ip, count + 1)

  const { prompt } = await request.json()
  fal.config({
    credentials: process.env.FAL_API_KEY,
  })

  try {
    const result = await fal.subscribe("fal-ai/flux/dev", {
      input: {
        prompt,
        image_size: "square_hd",
        num_inference_steps: 28,
        guidance_scale: 3.5,
        num_images: 1,
        enable_safety_checker: false,
      },
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_PROGRESS") {
          console.log(update.logs.map((log) => log.message))
        }
      },
    })

    return NextResponse.json({ result, loading: false })
  } catch (error) {
    console.error("Error generating image:", error)
    return NextResponse.json({
      error: "Failed to generate image",
      loading: false,
    })
  }
}
