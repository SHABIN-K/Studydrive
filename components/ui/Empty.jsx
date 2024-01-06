import Image from "next/image";

export const Empty = ({ label, error, reset }) => {
  return (
    <section>
      <div className="p-20 flex flex-col items-center justify-center">
        <div className="relative mb-3">
          <Image
            src="/img/cry.png"
            alt="Empty"
            width={320}
            height={300}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h1 className="text-muted-foreground text-2xl text-center text-white">{label}</h1>
        <p className="text-muted-foreground text-sm text-white text-center select-text">
          {error.message}
        </p>
        <button className="btn_form"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      </div>
    </section>
  );
};
