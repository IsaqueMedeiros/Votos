function SectionComponent({ sectionBg, children, haveHeader }) {
  return (
    <section className={sectionBg}>
      <div
        className={`
          w-[90%] max-w-[1400px] min-h-[100dvh] mx-auto flex flex-col gap-8
          items-center justify-center overflow-hidden ${haveHeader === true ? "py-24" : ""}
          md:w-[80%]
        `}
      >
        {children}
      </div>
    </section>
  );
}

export default SectionComponent;
