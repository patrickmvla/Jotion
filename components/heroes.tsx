import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/documents.png"
            fill
            alt="documents"
            className="dark:hidden object-contain"
          />
          <Image
            src="/documents-dark.png"
            fill
            alt="documents"
            className="hidden dark:block object-contain"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src="/reading.png"
            fill
            alt="reading"
            className="dark:hidden object-contain"
          />
          <Image
            src="/reading-dark.png"
            fill
            alt="reading"
            className="hidden dark:block object-contain"
          />
        </div>
      </div>
    </div>
  );
};
