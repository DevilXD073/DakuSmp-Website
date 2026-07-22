export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          color: "#ff2d2d",
          marginBottom: "10px",
        }}
      >
        DakuSMP
      </h1>

      <p
        style={{
          fontSize: "1.3rem",
          color: "#cccccc",
          maxWidth: "700px",
          marginBottom: "30px",
        }}
      >
        The Ultimate Minecraft PvP Experience
      </p>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => {
            navigator.clipboard.writeText("play.dakusmp.fun");
            alert("Server IP copied!");
          }}
          style={{
            padding: "14px 28px",
            background: "#ff2d2d",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Copy IP
        </button>

        <a
          href="https://discord.gg/YOURINVITE"
          target="_blank"
          style={{
            padding: "14px 28px",
            background: "#5865F2",
            color: "#fff",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Join Discord
        </a>
      </div>

      <div
        style={{
          marginTop: "50px",
          padding: "20px",
          border: "2px solid #ff2d2d",
          borderRadius: "12px",
          width: "320px",
        }}
      >
        <h2>Server Status</h2>
        <p>🟢 Online</p>
        <p>IP: play.dakusmp.fun</p>
        <p>Version: 1.21.x</p>
      </div>
    </main>
  );
}
