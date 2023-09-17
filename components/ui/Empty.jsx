import Image from "next/image";

export const Empty = ({ label, error, reset }) => {
  return (
    <section>
      <div className="p-20 flex flex-col items-center justify-center">
        <div className="relative h-72 w-72">
          <Image
            src="/empty.png"
            alt="Empty"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            layout="fill" // Add this if you want to use "fill" layout
          />
        </div>
        <h1 className="text-muted-foreground text-2xl text-center">{label}</h1>
        <p className="text-muted-foreground text-sm text-center select-text">
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
