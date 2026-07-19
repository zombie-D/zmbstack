import * as React from "react"

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[ErrorBoundary]", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            background: "#0D0E14",
            color: "#fff",
            fontFamily: "monospace",
            padding: "2rem",
            gap: "1rem",
          }}
        >
          <span style={{ fontSize: "1rem", color: "#3B6BFF" }}>ZMB STACK</span>
          <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
            Une erreur est survenue
          </h1>
          <pre
            style={{
              background: "#111320",
              border: "1px solid #1E2133",
              padding: "1rem",
              borderRadius: 0,
              fontSize: "0.75rem",
              color: "#EF4444",
              maxWidth: "600px",
              overflowX: "auto",
              whiteSpace: "pre-wrap",
            }}
          >
            {this.state.error?.message}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: "#3B6BFF",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1.5rem",
              fontSize: "0.75rem",
              fontWeight: "bold",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Recharger
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
