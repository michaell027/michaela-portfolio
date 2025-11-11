import { ImageResponse } from "next/og"

export const runtime = "nodejs"

export async function GET() {
    return new ImageResponse(
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #2d1b4e 0%, #1a0933 50%, #3d0066 100%)",
                padding: "40px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    width: "400px",
                    height: "400px",
                    background: "radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, transparent 70%)",
                    borderRadius: "50%",
                    top: "-100px",
                    right: "-100px",
                    filter: "blur(40px)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    background: "radial-gradient(circle, rgba(147, 112, 219, 0.2) 0%, transparent 70%)",
                    borderRadius: "50%",
                    bottom: "-50px",
                    left: "-50px",
                    filter: "blur(40px)",
                }}
            />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                    textAlign: "center",
                }}
            >
                <div
                    style={{
                        fontSize: "72px",
                        fontWeight: "bold",
                        color: "#e9d5ff",
                        marginBottom: "20px",
                        fontStyle: "italic",
                        letterSpacing: "2px",
                    }}
                >
                    Michaela Majorošová | Fullstack Developer
                </div>

                <div
                    style={{
                        fontSize: "32px",
                        color: "#c4b5fd",
                        marginBottom: "40px",
                        fontWeight: "300",
                        letterSpacing: "1px",
                    }}
                >
                    Modern Web Solutions
                </div>

                <div
                    style={{
                        width: "100px",
                        height: "2px",
                        background: "linear-gradient(90deg, transparent, #a78bfa, transparent)",
                        marginTop: "20px",
                    }}
                />
            </div>
        </div>,
        {
            width: 1200,
            height: 630,
        },
    )
}
