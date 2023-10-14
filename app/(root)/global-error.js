"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <h3>{error}</h3>
        <button onClick={() => reset()}>Try again ,try better</button>
      </body>
    </html>
  );
}
