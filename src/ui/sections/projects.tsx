import BentoItem from '@components/bento-item';

export default function Projects() {
  return (
    <div className="grid grid-cols-12 auto-rows-[7rem] gap-4">
      <BentoItem
        className="col-span-8 row-span-3"
        title="Placeholder 1"
        subtitle="Subtitle PlaceHolder"
        description="Lorem ipsumdfsdfdsfs dffsfmkfndfg ndkgdfjgn ggnfmgnjdfsgndfn"
      />
      <BentoItem
        className="col-span-4 row-span-3"
        title="Placeholder 1"
        subtitle="Subtitle PlaceHolder"
        description="Lorem ipsumdfsdfdsfs dffsfmkfndfg ndkgdfjgn ggnfmgnjdfsgndfn"
      />
      <BentoItem
        className="col-span-5"
        title="Placeholder 1"
        subtitle="Subtitle PlaceHolder"
        description="Lorem ipsumdfsdfdsfs dffsfmkfndfg ndkgdfjgn ggnfmgnjdfsgndfn"
      />
      <BentoItem
        className="col-span-7"
        title="Placeholder 1"
        subtitle="Subtitle PlaceHolder"
        description="Lorem ipsumdfsdfdsfs dffsfmkfndfg ndkgdfjgn ggnfmgnjdfsgndfn"
      />
    </div>
  );
}
