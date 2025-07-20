interface OGTemplateProps {
  title: string
  subtitle?: string
  type?: "website" | "blog" | "project"
  gradient?: boolean
}

export function OGTemplate({
  title,
  subtitle = "Rafadlis | Crafter",
  type = "website",
  gradient = false,
}: OGTemplateProps) {
  const backgroundStyle = gradient
    ? {
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
      }
    : {
        background: "white",
        color: "#0a0a0a",
      }

  const typeColors = {
    website: "#0070f3",
    blog: "#7c3aed",
    project: "#059669",
  }

  return (
    <div
      style={{
        ...backgroundStyle,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "80px",
        fontFamily:
          '"Roboto", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* Header with Logo */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
          marginBottom: "60px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: gradient ? "rgba(255,255,255,0.2)" : "#09090b",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
            fontWeight: "700",
            color: gradient ? "white" : "#fafafa",
          }}
        >
          r.
        </div>

        {/* Decorative Pattern */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: gradient ? "rgba(255,255,255,0.3)" : "#e2e8f0",
            }}
          />
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: gradient ? "rgba(255,255,255,0.2)" : "#cbd5e1",
            }}
          />
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: gradient ? "rgba(255,255,255,0.1)" : "#94a3b8",
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
        }}
      >
        {/* Main Title */}
        <div
          style={{
            fontSize:
              title.length > 40 ? "48px" : title.length > 25 ? "64px" : "80px",
            fontWeight: "800",
            lineHeight: "1.1",
            marginBottom: "24px",
            color: gradient ? "white" : "#0a0a0a",
            maxWidth: "800px",
          }}
        >
          {title}
        </div>

        {/* Type Badge */}
        {type !== "website" && (
          <div
            style={{
              display: "inline-flex",
              backgroundColor: typeColors[type],
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "16px",
              width: "fit-content",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            {type}
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
          marginTop: "40px",
        }}
      >
        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: "500",
            color: gradient ? "rgba(255,255,255,0.8)" : "#64748b",
          }}
        >
          {subtitle}
        </div>

        {/* Domain */}
        <div
          style={{
            fontSize: "20px",
            fontWeight: "400",
            color: gradient ? "rgba(255,255,255,0.6)" : "#94a3b8",
          }}
        >
          rafadlis.space
        </div>
      </div>
    </div>
  )
}
