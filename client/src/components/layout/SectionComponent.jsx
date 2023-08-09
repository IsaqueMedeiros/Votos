function SectionComponent({sectionBg, children}) {
  return (
    <section className={sectionBg}>
      <div className="w-[90%] max-w-[1400px] min-h-[100dvh] mx-auto flex flex-col gap-8 items-center justify-center md:w-[80%]">
        {children}
      </div>
    </section>
  );
}

export default SectionComponent;
